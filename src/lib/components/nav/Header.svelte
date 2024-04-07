<script>
	import '$lib/app.css';
	import Input from '../ui/input/input.svelte';
	import Button from '../ui/button/button.svelte';

	let searchVisible = false;
	function toggleVisible() {
		searchVisible = !searchVisible;
	}
</script>

<header class="lg:px-12 fixed w-full bg-white">
	<nav>
		<div class="mt-4 flex flex-wrap flex-row justify-around items-center">
			<div class="hidden lg:block flex-0">
				<Button variant="secondary" on:click={toggleVisible}>a</Button>
				{#if searchVisible}
					<Input class="w-1/3"></Input>
				{/if}
			</div>
			<a href="/" class="text-5xl text-center py-6 flex-1">HACKER TIMES</a>
		</div>
		<div class="border-b pb-1">
			<div class="border-b">
				<div class="flex flex-nowrap flex-row justify-around h-12 items-center">
					<div class="flex flex-row mx-8 space-x-6">
						<a href="/">home</a>
						<a href="/news">news</a>
						<a href="/opinions">opinions</a>
						<a href="/games">games</a>
						<a href="/search">search</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
