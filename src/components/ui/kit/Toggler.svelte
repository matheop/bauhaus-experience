<script lang="ts">
	export let checked: boolean = true
</script>

<label id="toggler">
	<input type="checkbox" bind:checked />
	<span id="slider" />
</label>

<style lang="sass">
	#toggler
		position: relative
		display: inline-block
		width: 32px
		height: 14px
		margin: 0 1rem

		input
			opacity: 0
			width: 0
			height: 0

	#slider
		position: absolute
		cursor: pointer
		top: 0
		left: 0
		right: 0
		bottom: 0
		background-color: darkgrey
		-webkit-transition: 0.4s
		transition: 0.4s
		border-radius: 16px

		&::before
			position: absolute
			content: ""
			height: 10px
			width: 10px
			right: 2px
			bottom: 2px
            //TODO: ajouter couleur
			background-color: white
			-webkit-transition: 0.4s
			transition: 0.4s
			border-radius: 50%

	input:checked + #slider
        //TODO: ajouter couleur
		background-color: lightgreen

	input:not(:checked) + #slider::before
		-webkit-transform: translateX(-18px)
		-ms-transform: translateX(-18px)
		transform: translateX(-18px)
</style>
