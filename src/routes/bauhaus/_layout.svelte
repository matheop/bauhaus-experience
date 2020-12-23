<script lang="ts">
	/* Sapper */
	import { stores } from "@sapper/app";
	const { page } = stores();
	/* Svelte */
	import { fade } from "svelte/transition";
	/* Helpers */
	import { clickOutside } from "helpers/clickOutside";
	import type { GenericObject } from "helpers/genericObjectType";
	import Nav from "components/layouts/Nav.svelte";

	let showInfo: boolean = false;
	let content = new Array<string>(2);

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
		one: [
			"Introduction",
			"Bauhaus was an influential art and design movement that began in 1919 in Weimar, Germany. The movement encouraged teachers and students to pursue their crafts together in design studios and workshops. The school moved to Dessau in 1925 and then to Berlin in 1932, after which Bauhaus—under constant harassment by the Nazis—finally closed. The Bauhaus movement championed a geometric, abstract style featuring little sentiment or emotion and no historical nods, and its aesthetic continues to influence architects, designers and artists.",
		],
		two: [
			"Walter Gropius",
			`The Weimar school founded by architect Walter Gropius in 1919 was inspired by Expressionist art and the work of architect Frank Lloyd Wright and designer William Morris. Its creators believed in bringing artists and craftspeople together for a utopian purpose.

			Under the leadership of Gropius, the Bauhaus movement made no special distinction between the applied and fine arts. Painting, typography, architecture, textile design, furniture-making, theater design, stained glass, woodworking, metalworking—these all found a place there.

			The Bauhaus style of architecture featured rigid angles of glass, masonry and steel, together creating patterns and resulting in buildings that some historians characterize as looking as if no human had a hand in their creation. These austere aesthetics favored function and mass production, and were influential in the worldwide redesign of everyday buildings that did not hint at any class structure or hierarchy.

			Gropius remained as director for nine years and steered the Bauhaus school into developing a cohesive style, though that was not his original intention. Starting in 1925, Gropius oversaw the school’s move to Dessau, allowing the opportunity for the principles of Bauhaus to manifest in the school’s physical space. Gropius designed the Bauhaus Building and several other buildings for the new campus.

			Fine art became a major offering at the school in 1927 with a free painting class offered by Paul Klee and Wassily Kandinsky. Instruction focused less on function (like so many Bauhaus offerings) and more on abstraction. Expressionism and Futurism would have a noticeable influence on the art produced in the school alongside its specific style of geometric design that at times resembled Cubism.`,
		],
		three: [
			"Paul Klee",
			`Paul Klee joined the school’s faculty in 1920, bringing with him a fascination with the art and artistic processes of non-Western cultures and children that he melded with a geometric, often scientific approach to abstract painting. His tenure at Bauhaus saw him create works that are lauded for their poetry and humor, as with his 1922 painting, Dance, Monster, to My Soft Song!

			Klee left the Bauhaus in 1931 and died in 1940. Surrealist painters Joan Miró and Andre Masson credit Klee as a major influence on their work.`,
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
			"End of Bauhaus",
			`Mies van der Rohe’s solution to Nazi intervention in the school was to move it to an empty telephone factory in Berlin and designate it a private institution. But the National Socialists continued to harass the school, attacking what the Nazis perceived as a Soviet Communist ideology and demanding that Nazi sympathizers replace select faculty members.

			The faculty flatly refused to work with the Nazis, and rather than cooperate with them, the school was closed in 1933 by the faculty’s vote.

			Following this decision, Mies van der Rohe, Gropius, the Albers and many others within the Bauhaus school fled to the United States, where they continued to have a profound and lasting influence on 20th-century art and design.`,
		],
	};
</script>

{#if !['/bauhaus', '/bauhaus/'].includes($page.path)}
	<Nav />

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
