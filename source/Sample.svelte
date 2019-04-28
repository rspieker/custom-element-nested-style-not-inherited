<div class=sample>
	<Nested>
		<slot>sample nested</slot>
	</Nested>
</div>

<svelte:options tag="my-sample" />

<script>
	import Nested from './Nested.svelte';
</script>

<style>
	.sample {
		color: red;
	}

</style>
