<script lang="ts">
	import SEO from "components/templates/SEO.svelte";
	import { notifications, Alert } from "notifications";
	import { onMount } from "svelte";

	onMount(() => notifications.add(new Alert("Hello", "valid", "world ?")));
</script>

<SEO />

<div>
	<h1>Hello world</h1>
</div>

<style lang="sass">
	div
		+flex
		height: 100vh
	
	h1
		color: $primary
		+screen-md
			color: $secondary
</style>
