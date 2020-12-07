<script lang="ts">
	/* Sapper */
	import { goto, stores } from "@sapper/app";
	const { page } = stores();
	/* Svelte */
	import { fade } from "svelte/transition";
	/* Helpers */
	import { discover } from "helpers/redirection";

	let isMenu: boolean = false;
	$: isMenu = $page.path === "/bauhaus" ? true : false;

	const redirect = async (menu: boolean): Promise<void> =>
		(await menu) ? goto("/") : goto("/bauhaus");

	const renderRandomFigure = async (currentPath): Promise<void> => {
		const path: Array<string> = currentPath.split("/");
		const figure: string = path?.[2];
		console.log("figure:", figure);
		const randomFigure: Array<string> = ["one", "two", "three", "four", "five", "six"];
		let item: string = figure;
		while (item === figure)
			item = randomFigure[Math.floor(Math.random() * randomFigure.length)];
		await discover(item);
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
		on:click={() => renderRandomFigure($page.path)}
		in:fade={{ delay: 4000, duration: 400 }}
		out:fade={{ duration: 400 }}
		id="random-btn"
		class="w-outlined-btn">
		Random
	</button>
</div>

<style lang="sass">
    #aside-btns-div
        +flex-x

        &:first-child
            margin-right: 1rem
</style>
