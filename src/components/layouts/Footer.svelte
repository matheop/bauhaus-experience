<script lang="ts">
	/* Sapper & Svelte */
	import { stores } from "@sapper/app";
	const { page } = stores();
	import { fade } from "svelte/transition";
	/* Helpers */
	import { discover } from "helpers/redirection";
	import { figuresArr } from "helpers/convertStrNum";
	import { greyXL } from "helpers/theme";
	/* Components */
	import Arrow from "components/svg/icons/Arrow.svelte";
	import Redirection from "./Redirection.svelte";

	let next: string = "";
	let previous: string = "";

	$: if ($page) {
		const currentFigure =
			$page.path.split(/\//).slice(-1)[0] === ""
				? $page.path.split(/\//).slice(-2)[0]
				: $page.path.split(/\//).slice(-1)[0];

		figuresArr.forEach((f, i, arr) => {
			if (f.str === currentFigure) {
				if (arr[i + 1]) next = arr[i + 1].str;
				else next = figuresArr[0].str;
			}
		});
		figuresArr.forEach((f, i, arr) => {
			if (f.str === currentFigure) {
				if (arr[i - 1]) previous = arr[i - 1].str;
				else previous = figuresArr[figuresArr.length - 1].str;
			}
		});
	}
</script>

<footer>
	{#if !['/bauhaus', '/bauhaus/'].includes($page.path)}
		<section transition:fade>
			<i on:click={() => discover(previous)}>
				<Arrow direction="left" color={greyXL} />
			</i>
			<i on:click={() => discover(next)}>
				<Arrow direction="right" color={greyXL} />
			</i>
		</section>
	{/if}
	<aside>
		<Redirection />
	</aside>
</footer>

<style lang="sass">
	footer
		position: absolute
		bottom: 0
		left: 0
		width: 100%
		padding: 1rem

		section, aside
			position: absolute
			bottom: 1rem

		section
			+flex
			transform: translate(-50%)
			left: 50%

			i
				display: flex
				width: 1.1rem
				height: 1.1rem
				margin-bottom: 0.5rem
				cursor: pointer

				&:first-child
					margin-right: 2rem

		aside
			right: 2rem

</style>
