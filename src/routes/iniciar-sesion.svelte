<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import GoogleButton from '$lib/components/GoogleButton.svelte';
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import '$lib/styles/login-signup.postcss';
</script>

<div id="container" class="grid grid-cols-2">
	<div class="container registrarse " />
	<div class="container iniciar-sesion active-container">
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
	</div>
</div>
