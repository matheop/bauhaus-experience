<script lang="ts">
	/* Svelte */
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	/* Helpers */
	import { DELAY } from "helpers/global";

	/* Components */
	import Seo from "components/templates/SEO.svelte";

	let intro: boolean = false;
	onMount(() => setTimeout(() => (intro = true), DELAY));

	const element = [
		{ id: "one", delay: 0, rotate: 2 },
		{ id: "two", delay: 250, rotate: 7 },
		{ id: "three", delay: 100, rotate: 5 },
		{ id: "four", delay: 450, rotate: 4 },
		{ id: "five", delay: 700, rotate: 9 },
	];
</script>

<Seo title="BVX | Three" url="https://www.bauhaus.fun/bauhaus/three" />

{#if intro}
	<div id="grid">
		{#each element as el}
			<div id={el.id} class="shape" transition:fly={{ delay: el.delay, y: -500 }}>
				<div class="circle" style="animation-duration: {el.rotate}s;">
					<div class="semi-circle-{el.id}" />
				</div>
			</div>
		{/each}
	</div>
{/if}

<style lang="sass">
	#grid
		display: grid
        grid-template-columns: repeat(6, 1fr)
		grid-template-rows: repeat(10, 1fr)
		grid-column-gap: 5rem 
		width: 100%
		+px(6rem)
		height: 100vh

		.shape
			position: relative
			border-bottom-right-radius: 100rem
			width: 100%
			height: 100%

			&:hover
				.circle
					top: 2rem
					+transition(top 1s ease)

			.circle
				position: absolute
				top: calc(100% - 10rem)
				left: -4rem
				width: 8rem
				height: 8rem
				background-color: $white
				overflow: hidden
				animation: rotate 5s infinite linear
				+transition(all 0.7s linear)

				+screen-max-md
					top: calc(100% - 8rem)
					left: -3rem
					width: 6rem
					height: 6rem
				
				+screen-max-sm
					top: calc(100% - 6rem)
					left: -2rem
					width: 4rem
					height: 4rem

				div[class^='semi-circle']
					position: absolute
					left: 50%
					width: 100%
					height: 100%

					&[class*='-one']
						background-color: $t-l
					&[class*='-two']
						background-color: $prim
					&[class*='-three']
						background-color: $sec
					&[class*='-four']
						background-color: $black
					&[class*='-five']
						background-color: $grey-xl
			&#one
				grid-row: 1 / 5
				grid-column: 2
				background: $grey-xl

			&#two
				grid-row: 1 / 3
				grid-column: 3
				background: $sec

			&#three
				grid-row: 1 / 4
				grid-column: 4
				background: $prim

			&#four
				grid-row: 1 / 7
				grid-column: 5
				background: $ter

			&#five
				grid-row: 1 / 9
				grid-column: 6 / 7
				background-color: $black
				border: 0.1px solid $grey-xd

	@-webkit-keyframes rotate
		from
    		-webkit-transform: rotate(0deg)
		to
    		-webkit-transform: rotate(359deg)
</style>
