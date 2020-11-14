<script lang="ts">
	import { mouse } from "stores/mousemove";

	function handleMousemove(e) {
		$mouse.x = e.clientX;
		$mouse.y = e.clientY;
	}

	$: console.log("$mouse:", $mouse);
</script>

<nav onmousemove={handleMousemove}>
	<div id="one" class="circle">
		<div class="circle two">
			<div class="circle three">
				<div class="circle four" />
			</div>
		</div>
	</div>
</nav>

<style lang="sass">
    nav
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)

        #one
            width: 32rem
            height: 32rem
            background-color: $p-d

        .circle
            padding: 4rem

        .two
            background-color: $prim

            .three
                background-color: $p-l

                .four
                    background-color: $s-l


</style>
