<script>
	const places = [
		{
			name: 'Upton Group',
			price: '$2300.45',
			distance: 152,
			bar: true,
		},
		{
			name: "O'Kon, Skiles and Ferry",
			price: '$4740.01',
			distance: 74,
			bar: true,
		},
		{
			name: 'Weber-Gottlieb',
			price: '$2022.38',
			distance: 93,
			bar: true,
		},
		{
			name: 'Willms-Spinka',
			price: '$2838.14',
			distance: 95,
			bar: true,
		},
		{
			name: 'Hodkiewicz, Mann and Bode',
			price: '$2137.75',
			distance: 59,
			bar: true,
		},
		{
			name: 'Greenfelder, Koch and Rogahn',
			price: '$1434.80',
			distancia: 72,
		},
		{
			name: 'Hamill-Frami',
			price: '$2523.49',
			distancia: 54,
		},
	];
</script>

<div class="container">
	<div class="card ">
		<div class="flex">
			<div class="filter">
				<input type="text" class="filter-input" placeholder="Ubicación" />
				<img src="/assets/icons/pin.svg" alt="" class="filter-icon" />
			</div>
			<div class="filter">
				<input type="date" class="filter-input" placeholder="Fecha" />
			</div>
			<div class="filter">
				<input type="time" class="filter-input" placeholder="Hora" />
			</div>
		</div>

		<div class="grid grid-cols-4 mt-12 gap-x-4 gap-y-10">
			{#each places as { name, price, distance, bar }, i (i)}
				<div class="transform hover:scale-105 transition duration-75 ease-in">
					<img
						src={`/assets/${i + 1}.jpg`}
						alt=""
						class="object-cover h-[200px] w-[300px] rounded-xl "
					/>
					<div class="flex justify-between pr-4 items-center mt-4">
						<h2 class=" font-bold ">{name}</h2>
						<span
							class:bar
							class="ring rounded-xl px-3 ring-purple-600 text-purple-600 font-bold text-sm"
							>{bar ? 'Bar' : 'Restaurante'}</span
						>
					</div>
					<div class="flex justify-between items-end pr-4 mt-4">
						<p class="text-gray-600 text-sm">A {distance} km de distancia</p>
						<p class="font-semibold">{price}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.container {
		background: rgba(0, 0, 0, 0.5) url('/assets/bg-2.png');
		@apply max-w-full h-full bg-blend-multiply bg-no-repeat bg-cover w-full flex flex-col justify-center;
	}

	.card {
		@apply bg-white rounded w-[85%] mx-auto p-6 shadow-2xl;
	}

	.filter {
		@apply hover:scale-105 transform transition duration-75 ease-in bg-black bg-opacity-40 flex p-3 rounded shadow-lg text-lg;
	}
	.filter + .filter {
		@apply ml-6;
	}

	.filter-icon {
		@apply mr-3 w-[35px] filter invert;
	}

	.filter-input {
		@apply bg-opacity-0 bg-white w-full focus:outline-none font-bold text-white placeholder-white;
	}

	::-webkit-inner-spin-button,
	::-webkit-calendar-picker-indicator {
		filter: invert();
	}

	::-webkit-calendar-picker-indicator:hover {
		@apply rounded-full p-1 bg-gray-400;
	}

	span.bar {
		@apply ring-green-500 text-green-500;
	}
</style>
