<script lang="ts">
	/* Svelte */
	import { fly } from "svelte/transition";
	/* Helpers */
	import { discover } from "helpers/redirection";

	let showNav: boolean = false;

	const duration: number = 700;
</script>

<div class="hoverable" on:mouseenter={() => (showNav = true)} />

{#if showNav}
	<nav on:click={() => (showNav = false)} on:mouseleave={() => (showNav = false)}>
		<button
			on:click={() => discover('one')}
			transition:fly={{ x: -1000, delay: 100, duration: duration }}
			id="btn-up-l"
			class="s-outlined-btn">
			One
		</button>
		<button
			on:click={() => discover('two')}
			transition:fly={{ x: -1000, delay: 200, duration: duration }}
			id="btn-up-r"
			class="p-filled-btn">
			Two
		</button>
		<button
			on:click={() => discover('three')}
			transition:fly={{ x: -1000, delay: 300, duration: duration }}
			id="btn-mid-r"
			class="t-outlined-btn">
			Three
		</button>
		<button
			on:click={() => discover('four')}
			transition:fly={{ x: -1000, delay: 400, duration: duration }}
			id="btn-down-r"
			class="s-filled-btn">
			Four
		</button>
		<button
			on:click={() => discover('five')}
			transition:fly={{ x: -1000, delay: 500, duration: duration }}
			id="btn-down-l"
			class="p-outlined-btn">
			Five
		</button>
		<button
			on:click={() => discover('six')}
			transition:fly={{ x: -1000, delay: 600, duration: duration }}
			id="btn-mid-l"
			class="t-filled-btn">
			Six
		</button>
	</nav>
{/if}

<style lang="sass">
    .hoverable
        position: absolute
        height: 100%
        width: 20%

    nav
        position: absolute
        height: 80%
        width: 20%
        z-index: 1
        +my(10vh)
        +ml(2rem)
        display: flex
        flex-direction: column
        justify-content: space-around

        button
            max-width: 10rem
</style>
