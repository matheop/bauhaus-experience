<script lang="ts">
</script>

<div>
	<div class="rounded red" />
	<div class="rounded blue" />
</div>

<style lang="sass">
	div
		flex-direction: column
		height: 100vh
		text-align: center
		// +flex
        
        .rounded
            height: 5rem
            width: 5rem

            &.red
                background-color: $tertiary

            &.blue
                background-color: $primary
</style>
