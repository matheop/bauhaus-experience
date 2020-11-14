<script lang="ts">
	import { onMount } from "svelte";

	import { fade } from "svelte/transition";

	let intro: boolean = false;
	onMount(() => setTimeout(() => (intro = true), 1200));
</script>

{#if intro}
	<div id="container" transition:fade>
		<div class="rect up" />
		<div class="semi-circle up" />
		<div class="rect down" />
		<div class="semi-circle down" />
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
