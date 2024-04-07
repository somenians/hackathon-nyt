<script lang="ts">
	import '$lib/app.css';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div
	class="flex flex-col h-screen py-24 px-16 mx-auto max
    -w-screen-xl lg:py-32 lg:px-24"
>
	<h1 class="mb-6 text-3xl md:text-6xl lg:text-5xl pb-16">Games</h1>
	<div
		class="space-y-8 md:grid md:grid-cols-1 md:gap-12 md:space-y-0 lg:grid-cols-2 md:px-32 lg:px-64"
	>
		<div class="border rounded shadow-md text-center mx-1">
			<div class="px-16 py-24">
				<div class="text-lg mb-4">Wordle</div>
				<Button href="/games/wordle" class="rounded-lg">Play</Button>
			</div>
		</div>
		<div class="border rounded shadow-md text-center">
			<div class="px-16 py-24">
				<div class="text-lg mb-4">Crossword</div>
				<Button href="/games/crossword">Play</Button>
			</div>
		</div>
	</div>
</div>
