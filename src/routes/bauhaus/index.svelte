<script lang="ts">
	/* Svelte */
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	/* Stores */
	import { mouse } from "stores/mousemove";
	/* Helpers */
	import { MENU_DELAY, SHORT_DELAY } from "helpers/global";
	import { discover } from "helpers/redirection";

	import Seo from "components/templates/SEO.svelte";

	let intro: boolean = false;
	onMount(() => setTimeout(() => (intro = true), SHORT_DELAY));

	function handleMousemove(e) {
		// $mouse.x = e.clientX;
		// $mouse.y = e.clientY;
	}

	$: console.log("$mouse:", $mouse);
</script>

<Seo
	title="BVX | Menu"
	description="A Bauhaus Visual Experience"
	url="https://www.bauhaus.fun/bauhaus" />

{#if intro}
	<section id="grid-container">
		<!-- Options -->
		<button
			on:click={() => discover('one')}
			in:fade={{ delay: MENU_DELAY, duration: 400 }}
			out:fade={{ duration: 400 }}
			id="btn-up-l"
			class="s-outlined-btn">
			&nbsp;&nbsp;1&nbsp;&nbsp;
		</button>
		<button
			on:click={() => discover('two')}
			in:fade={{ delay: 1000, duration: 400 }}
			out:fade={{ delay: 200, duration: 400 }}
			id="btn-up-r"
			class="p-filled-btn">
			&nbsp;&nbsp;2&nbsp;&nbsp;
		</button>
		<button
			on:click={() => discover('three')}
			in:fade={{ delay: 1500, duration: 400 }}
			out:fade={{ delay: 400, duration: 400 }}
			id="btn-mid-r"
			class="t-outlined-btn">
			&nbsp;&nbsp;3&nbsp;&nbsp;
		</button>
		<button
			on:click={() => discover('four')}
			in:fade={{ delay: 2000, duration: 400 }}
			out:fade={{ delay: 600, duration: 400 }}
			id="btn-down-r"
			class="s-filled-btn">
			&nbsp;&nbsp;4&nbsp;&nbsp;
		</button>
		<button
			on:click={() => discover('five')}
			in:fade={{ delay: 2500, duration: 400 }}
			out:fade={{ delay: 800, duration: 400 }}
			id="btn-down-l"
			class="p-outlined-btn">
			&nbsp;&nbsp;5&nbsp;&nbsp;
		</button>
		<button
			on:click={() => discover('six')}
			in:fade={{ delay: 3000, duration: 400 }}
			out:fade={{ delay: 1000, duration: 400 }}
			id="btn-mid-l"
			class="t-filled-btn">
			&nbsp;&nbsp;6&nbsp;&nbsp;
		</button>

		<nav in:fade={{ duration: 3500 }} out:fade on:mousemove={handleMousemove}>
			<div id="one" class="circle">
				<div class="circle two">
					<div class="circle three">
						<div class="circle four" />
					</div>
				</div>
			</div>
		</nav>
	</section>
{/if}

<style lang="sass">
    #grid-container
        // position: relative
        display: grid
        grid-template-columns: repeat(2, 1fr) repeat(2, 25vh) repeat(2, 1fr)
        grid-template-rows: repeat(4, 25vh)

        button
            margin: auto

        // random button
        // #aside-btns-div
        //     position: absolute
        //     bottom: 1rem
        //     right: 1rem
        //     +flex-x

        //     &:first-child
        //         margin-right: 1rem

        // up
        #btn-up-l
            grid-column: 2 / 4
            grid-row: 1 / 2
        #btn-up-r
            grid-column: 4 / 6
            grid-row: 1 / 2

        // middle
        #btn-mid-l
            grid-column: 1 / 3
            grid-row: 2 / 4
        #btn-mid-r
            grid-column: 5 / 7
            grid-row: 2 / 4

        // down
        #btn-down-l
            grid-column: 2 / 4
            grid-row: 4 / 5
        #btn-down-r
            grid-column: 4 / 6
            grid-row: 4 / 5

    nav
        grid-column: 3 / 5
        grid-row: 2 / 4

        #one
            width: 100%
            height: 100%
            max-width: 40rem
            max-height: 40rem
            +flex
            background-color: $p-l

        .circle
            padding: 3.5rem // TODO: Adapt it proportionnaly

        .two
            background-color: $prim

            .three
                background-color: $p-d

                .four
                    background-color: $marine


</style>
