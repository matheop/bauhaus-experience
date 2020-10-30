<script>
	/* Stores */
	import { media } from "../stores/media";

	/* UI */
	import Footer from "components/ui/Footer.svelte";
	import Header from "components/ui/Header.svelte";
	import LoadingPage from "components/ui/LoadingPage.svelte";
	import Notifications from "components/ui/kit/Notifications.svelte";

	let windowWidth: number;
	let siteReady: boolean = true;

	$: if (windowWidth) media.up(windowWidth);
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if !siteReady}
	<LoadingPage />
{/if}

<Header />
<Notifications />

<main>
	<slot />
</main>

<Footer />

<style lang="sass" global>
	@import "../style/global.sass";
</style>
