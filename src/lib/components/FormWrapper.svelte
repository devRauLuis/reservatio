<script>
	export let title;
</script>

<div class="overlay">
	<div class="card">
		<img src="/assets/logo.svg" alt="" class="mx-auto w-[180px]" />
		<h1 class="card-title">{title}</h1>
		<slot />
	</div>
</div>

<style lang="postcss">
	.overlay {
		background: rgba(0, 0, 0, 0.4);
		@apply h-full flex flex-col items-center justify-center object-cover bg-no-repeat;
	}

	.card {
		@apply bg-white p-6 w-2/4 rounded-xl shadow-lg text-center;
	}

	.card-title {
		@apply font-extrabold text-2xl mt-5;
	}
</style>
