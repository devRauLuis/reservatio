<script>
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import FormWrapper from '$lib/components/FormWrapper.svelte';
	import '$lib/styles/login-signup.postcss';
</script>

<div class="container">
	<div class= "contrasena-box">
		<div class="contrasena-box-activa">
			<FormWrapper title="Cambiar Contraseña">
				
				<span class=" "
					>o <a href="/iniciar-sesion" class="text-coral">Iniciar sesion</a>
				</span>

				<Input
					icon={'/assets/icons/key.svg'}
					type="password"
					classes=""
					placeholder="Nueva Contraseña"
					wrapperClasses="mt-3"
				/>
	
				<Input
					icon={'/assets/icons/key.svg'}
					type="password"
					classes=""
					placeholder="Validar nueva contraseña"
					wrapperClasses="mt-3"
				/>

				<Input
					icon={'/assets/icons/key.svg'}
					type="password"
					classes=""
					placeholder="Contasena anterior"
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

	.contrasena-box {
		width: 900px;
	}

	.contrasena-box-activa{
		height: 800px;
    	position: relative;
    	box-sizing: border-box;
    	padding: 130px 130px;
		transform: translate(20%, -10%);
	}

</style>
