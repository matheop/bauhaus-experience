<script lang="ts">
	import { onMount } from "svelte";

	let intro: boolean = false;
	onMount(() => setTimeout(() => (intro = true), 1200));
</script>

{#if intro}{/if}
