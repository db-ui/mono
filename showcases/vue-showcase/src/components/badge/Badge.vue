<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/badge.json";
import {
	DBBadge,
	DBIcon,
	DBButton,
	DBInfotext
} from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBBadge" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<template v-if="!exampleProps?.placement && !exampleProps?.example">
				<DBBadge
					:semantic="exampleProps?.semantic"
					:emphasis="exampleProps?.emphasis"
					:size="exampleProps?.size"
				>
					{{ exampleProps?.noContent ? "" : exampleName }}
				</DBBadge>
				<DBInfotext
					v-if="exampleProps?.noContent"
					semantic="informational"
					size="small"
					icon="none"
				>
					{{ exampleName }}
				</DBInfotext>
			</template>

			<template
				v-if="
					exampleProps?.placement &&
					exampleProps?.placement !== 'inline' &&
					!exampleProps?.example
				"
			>
				<DBButton icon="person" variant="outlined" :noText="true">
					<DBBadge
						emphasis="strong"
						semantic="critical"
						size="small"
						:placement="exampleProps?.placement"
					>
					</DBBadge>
					{{ exampleName }}
				</DBButton>
				<DBInfotext semantic="informational" size="small" icon="none">
					{{ exampleName }}
				</DBInfotext>
			</template>

			<template v-if="exampleProps?.placement === 'inline'">
				<div class="badge-inline-container">
					<DBIcon icon="person"></DBIcon>
					<span>{{ exampleName }}</span>
					<DBBadge size="small" emphasis="strong" semantic="critical">
						Label
					</DBBadge>
					<DBIcon icon="error"></DBIcon>
				</div>
			</template>

			<template v-if="exampleProps?.example === 'icon'">
				<DBBadge
					semantic="critical"
					emphasis="strong"
					:size="exampleProps?.size"
				>
					<DBIcon icon="person">{{ exampleName }}</DBIcon>
				</DBBadge>
				<DBInfotext semantic="informational" size="small" icon="none">
					{{ exampleName }}
				</DBInfotext>
			</template>

			<template v-if="exampleProps?.example === 'number'">
				<DBBadge semantic="successful">9</DBBadge>
				<DBBadge semantic="informational">12</DBBadge>
				<DBBadge semantic="warning">123</DBBadge>
				<DBBadge size="small" emphasis="strong" semantic="successful">
					9
				</DBBadge>
				<DBBadge
					size="small"
					emphasis="strong"
					semantic="informational"
				>
					12
				</DBBadge>
				<DBBadge size="small" emphasis="strong" semantic="warning">
					123
				</DBBadge>
				<DBInfotext semantic="informational" size="small" icon="none">
					{{ exampleName }}
				</DBInfotext>
			</template>
		</template>
	</DefaultComponent>
</template>
