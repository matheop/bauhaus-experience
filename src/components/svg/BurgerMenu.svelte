<script>
	// Ce SVG est un Toggler Burger pour le menu
	// en version mobile
	
	export let open;

	$: paths = open
		? ["M30.307,66.193L66.693,29.807", "M29.286,29.286L66.714,66.714", "M48,48L49,48"]
		: ["M28 65,L68 65", "M28 31,L68 31", "M28 48,L68 48"];
</script>

<svg
	height="100%"
	width="100%"
	data-cursor="pointer"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	version="1.1"
	x="0px"
	y="0px"
	viewBox="0 0 96 96"
	style="enable-background:new 0 0 96 96;"
	xml:space="preserve">
	<g>
		{#each paths as path, i (i)}
			<path d={path} />
		{/each}
	</g>
</svg>

<style lang="sass">
	svg 
		path 
			transition: all 0.4s
			transform: translate(0px)
			stroke-width: 2
			fill: none
			stroke: $black
			stroke-miterlimit: 10
		
		+screen-max-xs 
			&:hover 
				path 
					&:nth-child(2) 
						transform: translateY(-5px)
					
					&:nth-child(1) 
						transform: translateY(5px)
</style>
