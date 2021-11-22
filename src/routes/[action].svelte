<script context="module">
	export async function load({ page }) {
		return { props: { pageType: page.params.action } };
	}
</script>

<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import GoogleButton from '$lib/components/GoogleButton.svelte';
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	export let pageType;
	const registrarse = pageType == 'registrarse';
	const iniciarSesion = pageType == 'iniciar-sesion';
</script>

<div id="container" class="grid grid-cols-2">
	<div class="container registrarse" class:active-container={registrarse}>
		{#if registrarse}
			<FormWrapper title="Registrarse">
				<span class=" "
					>o <a href="/iniciar-sesion" class="text-coral">iniciar sesion</a
					></span
				>
				<Input
					icon={'/assets/icons/person.svg'}
					type="text"
					classes=""
					placeholder="nombre completo"
					wrapperClasses="mt-4"
				/>

				<Input
					icon={'/assets/icons/mail.svg'}
					type="email"
					classes=""
					placeholder="correo electronico"
					wrapperClasses="mt-3"
				/>

				<Input
					icon={'/assets/icons/key.svg'}
					type="password"
					classes=""
					placeholder="contraseña"
					wrapperClasses="mt-3"
				/>

				<Button name="Iniciar sesion" type="submit" classes="mt-4" />
				<GoogleButton classes="mt-2" />
			</FormWrapper>
		{/if}
	</div>
	<div class="container iniciar-sesion" class:active-container={iniciarSesion}>
		{#if iniciarSesion}
			<FormWrapper title="Iniciar sesion">
				<span class=" "
					>o <a href="/registrarse" class="text-coral">registrarse</a></span
				>
				<Input
					icon={'/assets/icons/mail.svg'}
					type="email"
					classes=""
					placeholder="correo electronico"
					wrapperClasses="mt-3"
				/>

				<Input
					icon={'/assets/icons/key.svg'}
					type="password"
					classes=""
					placeholder="contraseña"
					wrapperClasses="mt-3"
				/>

				<Button name="Registrarse" type="submit" classes="mt-4" />
				<GoogleButton classes="mt-2" />
			</FormWrapper>
		{/if}
	</div>
</div>

<style lang="postcss">
	#container {
		height: 100%;
	}
	.container {
		@apply h-full object-cover bg-no-repeat;
	}
	.registrarse {
		background: url(/assets/signup-bg.png);
	}

	.iniciar-sesion {
		background: url(/assets/login-bg.png);
	}
</style>
