<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/radio.json";
import { DBCheckbox, DBRadio } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBRadio" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBRadio
				:label="exampleProps.label"
				:size="exampleProps.size"
				:name="exampleProps.name"
				:checked="exampleProps.checked"
				:invalid="exampleProps.invalid"
				:value="exampleProps.value"
				:required="exampleProps.required"
				:labelVariant="exampleProps.labelVariant"
				:disabled="exampleProps.disabled"
			>
				{{ exampleName }}
			</DBRadio>
		</template>
	</DefaultComponent>
</template>
