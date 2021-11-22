<script>
	export let type, icon, placeholder, inputClasses, wrapperClasses, iconClasses;
</script>

<div
	class={'input-wrapper flex bg-white border-2 border-black rounded p-2 text-base ' +
		wrapperClasses}
>
	<img src={icon} alt="" class="input-icon mr-2 w-[17px]" />
	<input
		{type}
		class={'input font-semibold tracking-wider w-full ' + inputClasses}
		{placeholder}
	/>
</div>

<style lang="postcss">
	input:focus {
		outline: none;
	}
</style>
