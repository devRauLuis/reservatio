<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import '$lib/styles/login-signup.postcss';
</script>

<div class="container">
	<div class= "solicitud-box">
		<div class="solicitud-box-activa">
			<FormWrapper title="Solicitud de Establecimientos">
				
				<Input
					icon={'/assets/icons/key.svg'}
					type="name"
					classes=""
					placeholder="Nombre del Establecimiento"
					wrapperClasses="mt-3"
				/>
	
				<Input
					icon={'/assets/icons/key.svg'}
					type="address"
					classes=""
					placeholder="Direccion"
					wrapperClasses="mt-3"
				/>

				<Input
					icon={'/assets/icons/key.svg'}
					type="city"
					classes=""
					placeholder="Ciudad"
					wrapperClasses="mt-3"
				/>

                <Input
					icon={'/assets/icons/key.svg'}
					type="cellPhone"
					classes=""
					placeholder="Telefono"
					wrapperClasses="mt-3"
				/>

				<Button name="Enviar" type="submit" classes="mt-4" />
			</FormWrapper>
		</div>
	</div>
</div>


<style lang="postcss">

	.container {
		background: url('/assets/bg-2.png');
	}

	.solicitud-box {
		width: 900px;
	}

	.solicitud-box-activa{
		height: 800px;
    	position: relative;
    	box-sizing: border-box;
        padding: 120px 80px;
		transform: translate(20%, -10%);
	}

</style>
