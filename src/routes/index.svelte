<script lang="ts">
	/* Svelte */
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
	/* Stores */
	import { notifications, Alert } from "notifications";
	import Seo from "components/templates/SEO.svelte";

	const easteregg = (): void =>
		notifications.add(
			new Alert(
				"Good Job !",
				"success",
				"You've just found the easter egg ! Want to talk ? reach me out at : <a class='notif-link' href='mailto:matheo.pierini1@gmail.com'>matheo.pierini1@gmail.com</a>"
			)
		);

	let intro: boolean = false;
	onMount((): number => setTimeout(() => (intro = true), 1200));
</script>

<Seo />

<section>
	{#if intro}
		<h1 transition:fade on:click={easteregg}>A Visual<br />Bauhaus Art Experience</h1>
		<h4 in:fade={{ delay: 500 }} out:fade>READY ?</h4>

		<a in:fly={{ y: 200, delay: 1000, duration: 2000 }} out:fade href="/bauhaus">
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
		+mx(2rem)

		h1
			color: $ter
			text-shadow: $t-d 1px 1px 2px
			font-style: italic
			+mb(2rem)

		h4
			color: $sec
			font-style: italic
			text-shadow: $s-d 1px 1px 2px
			+mb(4rem)

		button
			font-weight: bold

</style>
