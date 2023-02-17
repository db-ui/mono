#!/usr/bin/env bash

if [[ -z $VALID_SEMVER_VERSION ]]; then
	echo "Version is missing!"
	exit 1
fi

if [[ $RELEASE == 'false' && $PRE_RELEASE == 'false' ]]; then
	echo "RELEASE and PRE_RELEASE are false, there should be an error in the pipeline!"
	exit 1
fi

echo "🛠 Forge all packages version numbers"
echo "which package version ?: $VALID_SEMVER_VERSION"

echo "goto build-outputs"
cd build-outputs || exit 1

# TODO: Add other build as well
for PACKAGE in 'create-dbux' 'foundations' 'components' 'ngx-components' 'react-components' 'v-components' 'web-components'; do
	echo "Start $PACKAGE bundle:"

	echo "🆚 Update Version"
	npm version --no-git-tag-version "$VALID_SEMVER_VERSION" --workspace=@db-ui/"$PACKAGE"

	if [[ $PACKAGE != 'foundations' && $PACKAGE != 'eslint-plugin' && $PACKAGE != 'create-dbux' ]]; then
		echo "🕵️‍ Set foundations dependency"
		npm pkg set dependencies.@db-ui/foundations="$VALID_SEMVER_VERSION" --workspace=@db-ui/"$PACKAGE"
		if [[ $PACKAGE != 'components' ]]; then
			npm pkg set dependencies.@db-ui/components="$VALID_SEMVER_VERSION" --workspace=@db-ui/"$PACKAGE"
		fi
	fi

	echo "📦 Create npm package"
	if [[ $PACKAGE == 'create-dbux' ]]; then
		npm pack --quiet --workspace="$PACKAGE"
	else
		npm pack --quiet --workspace=@db-ui/"$PACKAGE"
	fi
done

TAG="latest"
if [[ $PRE_RELEASE == 'true' ]]; then
	TAG="next"
fi

echo "📰 Publish Package to Registry with tag: $TAG"
for REGISTRY in 'GITHUB' 'NPM'; do
	echo "🔒 Authenticate $REGISTRY NPM Registry"

	if [[ $REGISTRY == 'GITHUB' ]]; then
		npm config set @db-ui:registry https://npm.pkg.github.com
		npm set //npm.pkg.github.com/:_authToken "$GPR_TOKEN"
		echo "🔑 Authenticated with GitHub"
	elif [[ $REGISTRY == 'NPM' ]]; then
		npm config set @db-ui:registry https://registry.npmjs.org/
		npm set //registry.npmjs.org/:_authToken "$NPM_TOKEN"
		echo "🔑 Authenticated with NPM"
	else
		echo "Could not authenticate with $REGISTRY"
		exit 1
	fi

	# TODO: Add other build as well
	for PACKAGE in 'create-dbux' 'foundations' 'components' 'ngx-components' 'react-components' 'v-components' 'web-components'; do
		echo "⤴ Publish $PACKAGE with tag $TAG to $REGISTRY"
		if [[ $PACKAGE == 'create-dbux' ]]; then
			npm publish --tag "$TAG" "$PACKAGE"-"$VALID_SEMVER_VERSION".tgz
		else
			npm publish --tag "$TAG" db-ui-"$PACKAGE"-"$VALID_SEMVER_VERSION".tgz
		fi
	done
done
