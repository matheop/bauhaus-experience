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

<Seo title="BVX | Three" url="https://www.bauhaus.fun/bauhaus/three" />

{#if intro}
	<div id="grid">
		<div id="one" class="shape">
			<div class="circle">
				<div class="semi-circle" />
			</div>
		</div>
		<div id="two" class="shape">
			<div class="circle">
				<div class="semi-circle" />
			</div>
		</div>
		<div id="three" class="shape">
			<div class="circle">
				<div class="semi-circle" />
			</div>
		</div>
		<div id="four" class="shape">
			<div class="circle">
				<div class="semi-circle" />
			</div>
		</div>
		<div id="five" class="shape">
			<div class="circle">
				<div class="semi-circle" />
			</div>
		</div>
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

			.circle
				position: absolute
				bottom: 2rem
				transform: translateX(-50%)
				width: 8rem
				height: 8rem
				background-color: $white
				overflow: hidden

				.semi-circle
					position: absolute
					left: 50%
					width: 100%
					height: 100%
					background-color: $t-l

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
</style>
