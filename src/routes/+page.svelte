<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
  import ArticleCard from '$lib/components/ArticleCard.svelte';

	export let data: PageData;
	onMount(() => {
		console.log(data.data);
		console.log(data.data[0].title);
	});
</script>

<main class='max-w-3xl px-4 mx-auto'>
	{#if data && data.status === 200}
		{#each data.data.filter((article) => article.urlToImage) as article}
			<ArticleCard {article} />
		{/each}
  {/if}
</main>
