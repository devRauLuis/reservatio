<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>Reservatio</title>
</svelte:head>
<div class="h-screen flex flex-col">
	<Navbar />

	<main class="h-full">
		<slot />
	</main>
</div>
