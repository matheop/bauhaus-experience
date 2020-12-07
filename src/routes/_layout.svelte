<script>
	/* Sapper */
	import { stores } from "@sapper/app";
	const { page } = stores();
	/* Stores */
	import { media } from "../stores/media";

	/* UI */
	import LoadingPage from "components/ui/LoadingPage.svelte";
	import Notifications from "components/ui/kit/Notifications.svelte";
	import Footer from "components/layouts/Footer.svelte";

	let isHomescreen: boolean = false;
	$: isHomescreen = $page.path === "/" || $page?.error ? true : false;

	// $: console.log("$page:", $page);

	let windowWidth: number;
	let siteReady: boolean = true;

	$: if (windowWidth) media.up(windowWidth);
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if !siteReady}
	<LoadingPage />
{/if}

<Notifications />

<main>
	<slot />
</main>

{#if !isHomescreen}
	<Footer />
{/if}

<!-- <Footer /> -->
<style lang="sass" global>
	@import "../style/global.sass"
</style>
