<script lang="ts">
	/* Svelte */
	import { onMount } from "svelte";
	/* Helpers */
	import { DELAY } from "helpers/global";

	/* Components */
	import Seo from "components/templates/SEO.svelte";

	let intro: boolean = false;
	onMount(() => setTimeout(() => (intro = true), DELAY));
</script>

<Seo
	title="BVX | Six"
	description="A Bauhaus Visual Experience"
	url="https://www.bauhaus.fun/bauhaus/Six" />

{#if intro}{/if}
