<script lang="ts">
	import { fade } from "svelte/transition";
</script>

<div id="container" transition:fade>
	<div class="rounded red" />
	<div class="rounded blue">
		<div class="rounded purple" />
	</div>
</div>

<style lang="sass">
	#container
        position: absolute
        height: 45.5rem // circles height * 2 - intersection / 2
        width: 26rem
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)

        .rounded
            position: absolute
            height: 26rem
            width: 26rem
            border-radius: 50%
            &::after // for box-shadow
                content: ""
                display: block
                height: 100%
                width: 100%
                border-radius: 2rem
                +light-shadow($dark-grey)

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

            // effects
        // &:hover
        //     .red, .blue
        //         +light-shadow($dark-grey)
        //         transition: all 0.4s ease
                

</style>
