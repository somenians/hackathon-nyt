import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const data = await fetch(
			'https://newsapi.org/v2/top-headlines?country=us&apiKey=e46d3ebc97c14f2eb35fe9ffb8ea328a'
		);
		const json = await data.json();

		return {
			data: json.articles
		};
	} catch (e) {
		return {
			data: `Error: ${e}`
		};
	}
};
