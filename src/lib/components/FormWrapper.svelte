<script>
	export let title, noOverlay, center;
</script>

<div class="" class:overlay={!noOverlay} class:center={noOverlay}>
	<div class="card" class:card-center={center}>
		<img src="/assets/logo.svg" alt="" class="mx-auto w-[160px]" />
		<h1 class="card-title">{title}</h1>
		<slot />
	</div>
</div>

<style lang="postcss">
	.center {
		@apply h-full flex flex-col items-center justify-center;
	}
	.overlay {
		background: rgba(0, 0, 0, 0.4);
		@apply h-full flex flex-col items-center justify-center object-cover bg-no-repeat;
	}

	.card {
		@apply bg-white p-6 w-2/4 rounded-xl shadow-lg text-center;
	}
	.card-center {
		@apply w-2/6;
	}

	.card-title {
		@apply font-extrabold text-2xl mt-6;
	}
</style>
