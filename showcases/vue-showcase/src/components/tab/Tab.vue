<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tab.json";
import { DBTab } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBTab" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBTab
				:active="exampleProps.active"
				:noText="exampleProps.noText"
				:icon="exampleProps.icon"
				:iconAfter="exampleProps.iconAfter"
				:width="exampleProps.width"
				:alignment="exampleProps.alignment"
				:disabled="exampleProps.disabled"
			>
				{{ exampleName }}
			</DBTab>
		</template>
	</DefaultComponent>
</template>
