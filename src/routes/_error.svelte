<script>
	import Seo from "components/templates/SEO.svelte";

	export let status: number;
	export let error: any;

	const dev: boolean = process.env.NODE_ENV === "development";
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<Seo />

<section>
	<h1 id="title">You seem lost...</h1>
	<br />
	<h1 id="status">{status}</h1>

	<p>{error.message}</p>

	<br />
	<br />

	<a href="/"> <button class="w-filled-btn"> Back to Homescreen </button> </a>
</section>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}

<style lang="sass">
	section
		position: absolute
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)
		color: $grey-l
		text-align: center

		#title
			font-weight: lighter

		h1,#status
			font-style: italic
</style>
