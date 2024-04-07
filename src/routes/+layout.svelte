<script>
	import '$lib/app.css';
	// import Header from '$lib/components/nav/Header.svelte';
	import Footer from '$lib/components/nav/Footer.svelte';
	import { Input } from '$lib/components/ui/input';
	import Button from '$lib/components/ui/button/button.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	let searchVisible = false;
	function toggleVisible() {
		searchVisible = !searchVisible;
	}
</script>

<div class="min-h-screen relative">
	<header class="lg:px-12 fixed w-full backdrop-blur-lg">
		<nav>
			<div class="mt-4 flex flex-wrap flex-row justify-around items-center">
				<a href="/" class="text-5xl text-center py-6 flex-1">HACKER TIMES</a>
			</div>
			<div class="border-b pb-1">
				<div class="border-b">
					<div class="flex flex-nowrap flex-row justify-around h-12 items-center">
						<div class="pb-8 flex flex-row mx-8 space-x-6">
							<SearchBar />
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
	<div class="pb-16" />
	<slot />
	<Footer />
</div>
