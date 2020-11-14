<script lang="ts">
	/* Sapper */
	import { goto } from "@sapper/app";
	/* Svelte */
	import { fade } from "svelte/transition";
	/* Helpers */
	import { discover } from "helpers/redirection";

	export let isMenu: boolean = false;

	const redirect = async (menu: boolean): Promise<void> =>
		(await menu) ? goto("/") : goto("/bauhaus");

	const random = async () => {
		const random: Array<string> = ["one", "two", "three", "four", "five", "six"];
		const item = random[Math.floor(Math.random() * random.length)];
		discover(item);
	};
</script>

<div id="aside-btns-div">
	<button
		on:click={() => redirect(isMenu)}
		in:fade={{ delay: 4300, duration: 400 }}
		out:fade={{ duration: 400 }}
		id="home-btn"
		class="w-link">
		{isMenu ? 'Homescreen' : 'Menu'}
	</button>
	<button
		on:click={random}
		in:fade={{ delay: 4000, duration: 400 }}
		out:fade={{ duration: 400 }}
		id="random-btn"
		class="w-outlined-btn">
		Random
	</button>
</div>

<style lang="sass">
    #aside-btns-div
        position: absolute
        bottom: 1rem
        right: 1rem
        +flex-x

        &:first-child
            margin-right: 1rem
</style>
