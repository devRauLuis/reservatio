<script>
	export let type, icon, placeholder, inputClasses, wrapperClasses, iconClasses;
</script>

<div
	class={'input-wrapper group  flex bg-white border-2 border-black rounded p-2.5 text-base ' +
		wrapperClasses}
>
	<img src={icon} alt="" class="input-icon mr-2 w-[20px]" />
	<input
		{type}
		class={'input font-semibold tracking-wider w-full transform group-focus:scale-110 ' +
			inputClasses}
		{placeholder}
	/>
</div>

<style lang="postcss">
	input:focus {
		outline: none;
	}
</style>
