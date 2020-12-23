<script lang="ts">
	/* Svelte */
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	/* Helpers */
	import { DELAY } from "helpers/global";

	/* Components */
	import Seo from "components/templates/SEO.svelte";

	let intro: boolean = false;
	onMount(() => setTimeout(() => (intro = true), DELAY));
</script>

<Seo title="BVX | Four" url="https://www.bauhaus.fun/bauhaus/four" />

{#if intro}
	<h1 class="soon" in:fade={{ duration: 4000 }}>Coming soon...</h1>
{/if}
