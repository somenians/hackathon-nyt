<script lang="ts">
	import type { PageData } from './$types';
	import { onMount, createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';
	import { invalidateAll } from '$app/navigation';
    import ArticleCard from '$lib/components/ArticleCard.svelte';

	export let data: PageData;

	
</script>

<ul class='grid grid-cols-1 mx-auto max-w-3xl gap-6'>
{#if data.status === 200 && data.articles.length > 0}
    {#each data.articles as item}
        <li>
            <ArticleCard article={item} />
        </li>
    {/each}
{/if}
</ul>