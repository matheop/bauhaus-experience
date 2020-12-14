<script lang="ts">
	/* Sapper */
	import { stores } from "@sapper/app";
	const { page } = stores();
	/* Svelte */
	import { fade } from "svelte/transition";
	/* Helpers */
	import { clickOutside } from "helpers/clickOutside.js";

	let showInfo: boolean = false;
	let content = new Array<string>(2);

	type GenericObject = { [key: string]: any };

	const toggleInfo = (el: string, infos: GenericObject): void => {
		const figure = el.split("/");
		for (const [key, arr] of Object.entries(infos)) {
			if (figure[figure.length - 1] !== "/")
				if (key === figure[figure.length - 1]) content = arr;
				else if (key === figure[figure.length - 2]) content = arr;
		}
		showInfo = !showInfo;
	};

	const info = {
		one: ["Titre 1", "ceci est un contenu totalement <strong>quelconque</strong>."],
		two: [
			"Titre 2",
			"ceci est un <strong>autre</strong> contenu totalement <i>quelconque</i>.",
		],
		three: [
			"Titre 3",
			"ceci est un <strong>autre</strong> contenu totalement <i>quelconque</i>.",
		],
		four: [
			"Titre 4",
			"ceci est un <strong>autre</strong> contenu totalement <i>quelconque</i>.",
		],
		five: [
			"Titre 5",
			"ceci est un <strong>autre</strong> contenu totalement <i>quelconque</i>.",
		],
		six: [
			"Titre 6",
			"ceci est un <strong>autre</strong> contenu totalement <i>quelconque</i>.",
		],
	};
</script>

{#if $page.path !== '/bauhaus'}
	<div id="info" use:clickOutside on:click_outside={() => (showInfo = false)}>
		<button class="w-outlined-btn" on:click={() => toggleInfo($page.path, info)}>
			<code>{showInfo ? 'x' : 'i'}</code>
		</button>
		<article class:showInfo>
			{#if showInfo}
				<h4>{content[0]}</h4>
				<p in:fade={{ delay: 300 }}>
					{@html content[1]}
				</p>
			{/if}
		</article>
	</div>
{/if}

<main>
	<slot />
</main>

<style lang="sass">

    #info
        position: absolute
        top: 1rem
        right: 2rem

        button
            margin: auto
            padding: 1rem
            min-width: 3.1rem
            min-height: 3.1rem
            +circle

    article
        position: absolute
        bottom: 0
        left: 0
        width: 0
        height: 0
        opacity: 0
        float: left
        transform: translate(-17rem, 110%)
        padding: 1.5rem
        z-index: 10
        background: $b-trans-d
        color: $white
        +m-radius
        border: 1px $white solid
        +transition(all ease 0.5s)

        &.showInfo
            width: 20rem
            max-width: calc( 100vw - 2rem )
            min-height: 10rem
            height: fit-content
            max-height: 80vh
            opacity: 1
            +transition(all ease 0.5s)
            +m-radius
            border: 1px $white solid
            overflow-y: scroll

        h4
            margin-bottom: 1rem

</style>
