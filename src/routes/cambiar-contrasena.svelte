<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import '$lib/styles/login-signup.postcss';
</script>

<div class="container">
	<FormWrapper title="Cambiar Contraseña" noOverlay center>
		<p class="font-semibold mt-2">Ingrese la contraseña nueva</p>

		<Input
			icon={'/assets/icons/key.svg'}
			type="password"
			classes=""
			placeholder="nueva contraseña"
			wrapperClasses="mt-9"
		/>

		<Input
			icon={'/assets/icons/key.svg'}
			type="password"
			classes=""
			placeholder="validar nueva contraseña"
			wrapperClasses="mt-4"
		/>

		<Input
			icon={'/assets/icons/key.svg'}
			type="password"
			classes=""
			placeholder="contraseña anterior"
			wrapperClasses="mt-4"
		/>

		<button type="submit" class="btn mt-9">Cambiar contraseña</button>
	</FormWrapper>
</div>

<style lang="postcss">
	button.btn {
		width: 80%;
	}
	.container {
		background: url('/assets/bg-2.png');
		width: 100%;
		max-width: 100%;
		background-repeat: no-repeat;
	}
</style>
