<script lang="ts">
	import '$lib/app.css';
	import Header from '$lib/components/nav/Header.svelte';
	import Footer from '$lib/components/nav/Footer.svelte';
</script>

<div class="min-h-screen relative">
	<Header />
	<slot />
	<Footer />
</div>
