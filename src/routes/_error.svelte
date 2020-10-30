<script>
	export let status: number;
	export let error: any;

	const dev: boolean = process.env.NODE_ENV === "development";
</script>

<style lang="sass">

</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
