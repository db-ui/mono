<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/input.json";
import { DBInput } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBInput" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInput
				:variant="exampleProps.variant"
				:label="exampleProps.label"
				:message="exampleProps.message"
				:placeholder="exampleName"
				:minLength="exampleProps.minLength"
				:required="exampleProps.required"
				:type="exampleProps.type"
				:disabled="exampleProps.disabled"
				:readOnly="exampleProps.readOnly"
				:value="exampleProps.value"
				:icon="exampleProps.icon"
				:iconAfter="exampleProps.iconAfter"
			></DBInput>
		</template>
	</DefaultComponent>
</template>
