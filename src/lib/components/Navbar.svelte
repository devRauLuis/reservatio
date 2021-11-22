<script>
	export const options = [
		{ name: 'Inicio', href: '/' },
		{ name: 'Explorar', href: '/explorar' },
		{ name: 'Reservaciones', href: '/reservaciones' },
		{ name: 'Cambiar Contraseña', href: '/cambiar-contrasena' },
	];
	('');
</script>

<nav class="">
	<div class="flex items-center px-7 py-5">
		<a href="/">
			<img src="/assets/logo.svg" alt="Logo de Reservatio" class="ml-auto" />
		</a>
		<div class="flex ml-14 mr-auto gap-x-11 text-black text-lg items-center">
			{#each options as { name, href }, i (i)}
				<a {href} class="">{name}</a>
			{/each}
		</div>
		<a href="/iniciar-sesion" class="nav-btn"> Iniciar sesion </a>
		<a href="/registrarse" class="nav-btn nav-primary-btn ml-2">
			Registrarse
		</a>
	</div>
</nav>

<style lang="postcss">
	.nav-btn {
		@apply border-2 border-black px-4 py-1 rounded-[5px] font-semibold tracking-wider text-xl;
	}

	.nav-primary-btn {
		@apply border-golden text-golden;
	}
</style>
