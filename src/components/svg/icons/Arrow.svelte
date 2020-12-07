<script lang="ts">
	export let color: string = "white";
	export let direction: string = "right"; // left / up / down
</script>

<svg class={direction} viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M0.418019 14.7862L6.71282 8.49138L0.418019 2.53553C-0.854146 1.26405 1.06874 -0.884227
		2.34294 0.389979C9.57161 7.61797 9.99907 7.71815 9.99907 8.49138C9.99907 9.26666 10.2536
		8.80041 2.34294 16.7111C1.07146 17.9833 -0.856188 16.0597 0.418019 14.7862Z"
		fill={color} />
</svg>

<style lang="sass">
	svg
		transition: transform 0.5s

	.left
		transform: rotate(0.5turn)
		transition: transform 0.5s

	.up
		transform: rotate(-0.25turn)
		transition: transform 0.5s

	.down
		transform: rotate(0.25turn)
		transition: transform 0.5s
</style>
