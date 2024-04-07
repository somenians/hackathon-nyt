<script lang="ts">
	import '$lib/app.css';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	let topHeadLines = [];

	export let data: PageData;
	onMount(() => {
		console.log(data.data);
		console.log(data.data[0].title);
	});
</script>

<main>
	<div class="py-24 px-16 mx-auto items-center">
		{#if data && data.data}
			{#each data.data.filter((article) => article.urlToImage) as article}
				<div class="border-b py-8 lg:py-16">
					<div class="flex flex-row flex-wrap flex-shrink-0 justify-center">
						<div class="flex flex-col px-8 lg:max-w-2xl">
							<a href={article.url} target="_blank">
								<h1 class="pb-8 font-semibold hover:text-lg hover:underline hover:text-gray-600">
									{article.title}
								</h1>
							</a>
							<p class="text-gray-600">{article.description}</p>
						</div>
						<img
							class="py-4 px-8 object-scale-down max-h-full rounded-sm max-w-md"
							src={article.urlToImage}
							alt="Image Description"
						/>
					</div>
				</div>
			{/each}
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</main>
