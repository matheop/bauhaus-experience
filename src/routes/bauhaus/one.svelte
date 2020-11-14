<script lang="ts">
	import { onMount } from "svelte";

	import { fade } from "svelte/transition";

	let intro: boolean = false;
	onMount(() => setTimeout(() => (intro = true), 1200));
</script>

{#if intro}
	<div id="container" transition:fade>
		<div class="circle red" />
		<div class="circle blue">
			<div class="circle purple" />
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

            &.blue
                background-color: #65B0AA
                overflow: hidden
                .purple
                    position: absolute
                    top: 19.5rem
                    background-color: #5E4188
            &.red
                bottom: 0
                background-color: #D54927

</style>
