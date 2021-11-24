<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import GoogleButton from '$lib/components/GoogleButton.svelte';
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import '$lib/styles/login-signup.postcss';
	import { user } from '$lib/stores';
</script>

<div id="container" class="grid grid-cols-2">
	<div class="container registrarse active-container">
		<FormWrapper title="Registrarse">
			<span class=" "
				>o <a href="/iniciar-sesion" class="text-coral">iniciar sesion</a></span
			>
			<Input
				icon={'/assets/icons/person.svg'}
				type="text"
				classes=""
				placeholder="nombre completo"
				wrapperClasses="mt-8"
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

			<button type="submit" on:click={user.login} class={`btn mt-6`}>
				Registrarse
			</button>
			<GoogleButton classes="mt-2" />
		</FormWrapper>
	</div>
	<div class="container iniciar-sesion" />
</div>
