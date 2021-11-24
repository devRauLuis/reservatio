<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import GoogleButton from '$lib/components/GoogleButton.svelte';
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import '$lib/styles/login-signup.postcss';
	import { user } from '$lib/stores';
</script>

<div id="container" class="grid grid-cols-2">
	<div class="container registrarse " />
	<div class="container iniciar-sesion active-container">
		<FormWrapper title="Iniciar sesion">
			<p class="">
				o <a href="/registrarse" class="text-coral">registrarse</a>
			</p>
			<Input
				icon={'/assets/icons/mail.svg'}
				type="email"
				classes=""
				placeholder="correo electronico"
				wrapperClasses="mt-8"
			/>

			<Input
				icon={'/assets/icons/key.svg'}
				type="password"
				classes=""
				placeholder="contraseña"
				wrapperClasses="mt-3"
			/>

			<button type="submit" on:click={user.login} class={`btn mt-6`}>
				Iniciar sesion
			</button>
			<GoogleButton classes="mt-2" on:click={user.login} />
		</FormWrapper>
	</div>
</div>
