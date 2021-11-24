<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import '$lib/styles/login-signup.postcss';
</script>

<div class="container">
	<FormWrapper title="Solicitud de Establecimientos" noOverlay center>
		<Input
			icon={'/assets/icons/building.svg'}
			type="name"
			classes=""
			placeholder="nombre del establecimiento"
			wrapperClasses="mt-9"
		/>

		<Input
			icon={'/assets/icons/home.svg'}
			type="address"
			classes=""
			placeholder="direccion"
			wrapperClasses="mt-3"
		/>

		<Input
			icon={'/assets/icons/phone.svg'}
			type="cellPhone"
			classes=""
			placeholder="telefono"
			wrapperClasses="mt-3"
		/>

		<Button name="Enviar" type="submit" classes="mt-9" />
	</FormWrapper>
</div>

<style lang="postcss">
	.container {
		background: url('/assets/bg-2.png');
		width: 100%;
		max-width: 100%;
		background-repeat: no-repeat;
	}
</style>
