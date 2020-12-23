<script lang="ts">
	/* Svelte */
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	/* Helpers */
	import { DELAY } from "helpers/global";

	import Seo from "components/templates/SEO.svelte";

	let intro: boolean = false;
	onMount(() => setTimeout(() => (intro = true), DELAY));
</script>

<Seo title="BVX | Two" url="https://www.bauhaus.fun/bauhaus/two" />

{#if intro}
	<div id="container">
		<div class="rect up" transition:fly={{ duration: 1000, x: -1000 }} />
		<div class="semi-circle up" transition:fly={{ delay: 200, y: -1000 }} />
		<div class="rect down" transition:fly={{ delay: 500, y: 1000 }} />
		<div class="semi-circle down" transition:fly={{ delay: 750, duration: 1000, x: 1000 }} />
	</div>
{/if}

<style lang="sass">
	#container
        position: absolute
        height: 45.5rem // circles height * 2 - intersection / 2
        width: 26rem
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)

        display: grid
        grid-template-rows: repeat(2, 1fr)
        grid-template-columns: repeat(2, 1fr)

        .rect, .semi-circle
            width: 100%
            height: 100%

        .rect
            &.up
                background-color: $prim
                border-top-right-radius: 100rem
            &.down
                background-color: $grey-xl

        .semi-circle
            &.up, &.down
                border-top-right-radius: 100rem
                border-bottom-right-radius: 100rem
            
            &.up
                background-color: $sec
            &.down
                background-color: $ter




</style>
