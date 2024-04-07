<script lang="ts">
	import '$lib/app.css';
	import SearchBar from '$lib/components/SearchBar.svelte';
</script>

<div class="h-24 relative">
	<nav class="fixed bg-background bg-opacity-50 backdrop-blur-lg w-full h-24">
		<div class="container flex justify-between items-center h-full">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
			<SearchBar />
		</div>
		<hr />
	</nav>
</div>
<slot />
