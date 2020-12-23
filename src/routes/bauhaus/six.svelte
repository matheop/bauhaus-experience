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

<Seo title="BVX | Six" url="https://www.bauhaus.fun/bauhaus/six" />

{#if intro}
	<h1 class="soon" in:fade={{ duration: 4000 }}>Coming soon...</h1>
{/if}
