<script lang="ts">
	import { goto } from '$app/navigation';

	let searchString = '';

	const handleSearch = async () => {
		await goto(`/search?q=${encodeURIComponent(searchString)}`);
		searchString = '';
	};
</script>

<span class="flex gap-4">
	<input
		type="text"
		bind:value={searchString}
		placeholder="Enter your search query..."
		class="px-4 py-2 rounded-lg border-1 border-primary"
	/>
	<button
		class="px-4 py-2 bg-blue-500 font-medium text-lg rounded-xl hover:brightness-75 text-white"
		on:click={handleSearch}>Search</button
	>
</span>
