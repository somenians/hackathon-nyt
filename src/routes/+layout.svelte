<script>
	import '$lib/app.css';
	import Header from '$lib/components/nav/HeaderHome.svelte';
	import Footer from '$lib/components/nav/Footer.svelte';
</script>

<div class="min-h-screen relative">
	<a href="/">
		<div class="h-16 text-center justify-center">NYT TIMES</div>
	</a>
	<Header />
	<slot />
	<Footer />
</div>
