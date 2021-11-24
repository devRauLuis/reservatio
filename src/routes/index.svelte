<div class="container text-white">
	<div class="hero">
		<h1 class=" font-semibold  text-6xl ">
			Encuentra una mesa, para <span class="font-black">toda</span> ocasión
		</h1>
		<div class="w-4/6 ">
			<div
				class="hover:scale-105 transform transition duration-75 ease-in bg-white flex mt-16 p-3 rounded shadow-lg text-2xl"
			>
				<img src="/assets/icons/search.svg" alt="" class="mr-3 w-[35px]" />
				<input
					type="text"
					class=" w-full focus:outline-none font-bold text-black"
					placeholder="Qué/dónde quieres cenar o tomarte unas copas..."
				/>
			</div>

			<div class="mt-8 ml-2 flex">
				<a href="" class="cta-btn mr-12">
					<img src="/assets/icons/bar.svg" alt="" class="filter invert mr-1" />
					Bares
				</a>
				<a href="" class="cta-btn">
					<img
						src="/assets/icons/lunch.svg"
						alt=""
						class="filter invert mr-1"
					/>
					Restaurantes
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.container {
		max-width: 100%;
		background: rgba(0, 0, 0, 0.5) url('/assets/landing-bg.jpg');
		background-blend-mode: multiply;
		@apply h-full bg-no-repeat bg-cover w-full;
	}
	.hero {
		@apply h-full flex flex-col items-center justify-center;
	}
	.cta-btn {
		@apply flex font-semibold text-xl flex items-center;
	}
</style>
