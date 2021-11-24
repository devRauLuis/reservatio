import { goto } from '$app/navigation';
import { writable } from 'svelte/store';

const createUser = () => {
	const { subscribe, update } = writable(false);

	return {
		subscribe,
		login: () =>
			update(() => {
				goto('/');
				return true;
			}),
		logout: () =>
			update(() => {
				goto('/');
				return false;
			}),
	};
};

export const user = createUser();
