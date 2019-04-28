<span class=nested>
	<slot>nested</slot> ({ count })
</span>

<svelte:options tag="my-mandatory-nested-element-name" />

<script>
	export let count = 0;

	setInterval(() => ++count, 1000);
</script>

<style>
	.nested {
		color: green;
	}

</style>
