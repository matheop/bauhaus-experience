<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import SEO from "components/templates/SEO.svelte";
	import { onMount } from "svelte";
	// import { notifications, Alert } from "notifications";
	// import { onMount } from "svelte";

	// onMount(() => notifications.add(new Alert("Hello", "valid", "world ?")));

	let intro: boolean = false;
	onMount(() => setTimeout(() => (intro = true), 1200));
</script>

<SEO />

<section>
	{#if intro}
		<h1 transition:fade>A Bauhaus Art Experience</h1>
		<h4 transition:fade={{ delay: 500 }}>Presented by matheop</h4>

		<a transition:fly={{ y: 200, delay: 1000, duration: 2000 }} href="/bauhaus">
			<button class="p-outlined-btn"> Enter the Bauhaus </button>
		</a>
	{/if}
</section>

<style lang="sass">
	section
		+flex
		flex-direction: column
		height: 100vh
		text-align: center

		h1
			color: $ter
			text-shadow: $t-d 1px 1px 2px
			+mb(2rem)

		h4
			color: $sec
			font-style: italic
			text-shadow: $s-d 1px 1px 2px
			+mb(4rem)

		button
			font-weight: bold

</style>
