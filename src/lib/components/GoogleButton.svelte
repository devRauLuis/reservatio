<script>
	export let classes;
	import { user } from '$lib/stores';
</script>

<button class={`btn ${classes}`} on:click={user.login}>
	<img src="/assets/icons/google.svg" alt="" class="mr-3 w-[20px]" />
	Continue with <span class="font-google ml-0.5 font-bold">Google</span>
</button>

<style lang="postcss">
	.btn {
		@apply bg-white text-black border-2 border-black flex items-center justify-center pl-2;
	}
</style>
