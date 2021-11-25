<script>
	import { user } from '$lib/stores';

	export const options = [
		{ name: 'Inicio', href: '/' },
		{ name: 'Explorar', href: '/explorar' },
		// { name: 'Contraseña', href: '/cambiar-contrasena' },
		// { name: 'Establecimiento', href: '/solicitud-establecimiento' },
	];
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
		{#if $user}
			<div
				class="group flex items-center font-semibold transition-all duration-100"
			>
				<button
					on:click={user.logout}
					class="action-btn text-coral font-semibold"
				>
					Cerrar sesión
				</button>
				<a href="/cambiar-contrasena" class="action-btn">Cambiar contraseña </a>
				<div
					class="group group-hover:bg-black flex items-center p-2 rounded transition duration-75 ease-in"
				>
					<button class="bg-black rounded-full p-1.5 group-hover:bg-white">
						<img
							src="/assets/icons/person.svg"
							alt=""
							class="filter invert group-hover:invert-0"
						/>
					</button>
					<p class="ml-2 font-bold group-hover:text-white">Fulano de Tal</p>
				</div>
			</div>
		{:else}
			<a href="/iniciar-sesion" class="nav-btn"> Iniciar sesion </a>
			<a href="/registrarse" class="nav-btn nav-primary-btn ml-2">
				Registrarse
			</a>
		{/if}
	</div>
</nav>

<style lang="postcss">
	.nav-btn {
		@apply border-2 border-black px-4 py-1 rounded-[5px] font-semibold tracking-wider text-xl;
	}

	.nav-primary-btn {
		@apply border-golden text-golden;
	}

	.action-btn {
		@apply hidden w-0 group-hover:block group-hover:w-auto mr-6;
	}
</style>
