<script lang="ts">
	import Arrow from "components/svg/icons/Arrow.svelte";
	import { greyXL } from "helpers/theme";
	import Redirection from "./Redirection.svelte";
</script>

<footer>
	<section>
		<i>
			<Arrow direction="left" color={greyXL} />
		</i>
		<i>
			<Arrow direction="right" color={greyXL} />
		</i>
	</section>

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
