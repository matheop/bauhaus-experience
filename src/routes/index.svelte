<script lang="ts">
	import SEO from "components/templates/SEO.svelte";
	// import { notifications, Alert } from "notifications";
	// import { onMount } from "svelte";

	// onMount(() => notifications.add(new Alert("Hello", "valid", "world ?")));
</script>

<SEO />

<section>
	<h1>A Bauhaus Art Experience</h1>
	<h4>Presented by matheop</h4>

	<a href="/bauhaus"> <button class="p-outlined-btn"> Enter the Bauhaus </button> </a>
</section>

<style lang="sass">
	section
		+flex
		flex-direction: column
		height: 100vh
		text-align: center

		h1
			color: $secondary
			+mb(3rem)

		h4
			font-style: italic
			+mb(4rem)
</style>
