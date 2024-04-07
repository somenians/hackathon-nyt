<script lang="ts">
	import type { PageData } from './$types';
	import { onMount, createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { invalidateAll } from '$app/navigation';
	import ArticleCard from '$lib/components/ArticleCard.svelte';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<ul class="pt-32 grid grid-cols-1 mx-auto max-w-3xl gap-6">
	<h1 class="text-2xl font-semibold">
		Total Results: {Object.keys(data.articles).length}
	</h1>
	{#if data.status === 200 && data.articles.length > 0}
		{#each data.articles as item}
			<li>
				<ArticleCard article={item} />
			</li>
		{/each}
	{/if}
</ul>
