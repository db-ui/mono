<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/input.json";
import { DBInput } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBInput" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInput
				:variant="exampleProps.variant"
				:label="exampleProps.label"
				:labelVariant="exampleProps.labelVariant"
				:message="exampleProps.message"
				:placeholder="exampleName"
				:minLength="exampleProps.minLength"
				:required="exampleProps.required"
				:type="exampleProps.type"
				:disabled="exampleProps.disabled"
				:value="exampleProps.value"
				:icon="exampleProps.icon"
				:invalid="exampleProps.invalid"
				:iconAfter="exampleProps.iconAfter"
			></DBInput>
		</template>
	</DefaultComponent>
</template>
