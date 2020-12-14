<script lang="ts">
	/* Svelte */
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	/* Helpers */
	import { DELAY } from "helpers/global";

	import Seo from "components/templates/SEO.svelte";

	let intro: boolean = false;
	onMount(() => setTimeout(() => (intro = true), DELAY));
</script>

<Seo title="BVX | One" url="https://www.bauhaus.fun/bauhaus/one" />

{#if intro}
	<div id="container" transition:fade>
		<div class="circle down" />
		<div class="circle up">
			<div class="circle in" />
		</div>
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

        .circle
            position: absolute
            height: 26rem
            width: 26rem
            transition: 2s all ease

            &:hover
                transform: rotate(360deg)
                transition: 2s all ease

            &.up
                background-color: $white
                overflow: hidden
                .in
                    position: absolute
                    top: 19.5rem
                    background-color: $sec
            &.down
                bottom: 0
                background-color: $prim

</style>
