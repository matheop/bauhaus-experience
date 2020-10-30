<script>
	import { fade } from "svelte/transition";
</script>

<div transition:fade={{ delay: 1000 }} />

<style lang="sass">
	div
		position: fixed
		z-index: 9999999999
		top: 0
		left: 0
		width: 100vw
		height: 100vh
		//TODO: ajouter couleur
		background-color: $white
</style>
