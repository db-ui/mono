<script setup lang="ts">
const props = defineProps(["plain", "vmodel"]);
</script>

<template>
	<div class="form-container">
		<form>
			<fieldset><slot /></fieldset>
		</form>
		<dl data-testid="data-list">
			<dt>Plain:</dt>
			<dd>{{ plain?.toString() }}</dd>
			<dt>VModel:</dt>
			<dd>{{ vmodel?.toString() }}</dd>
		</dl>
	</div>
</template>
