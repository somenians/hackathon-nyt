import type { PageServerLoad } from './$types';
import { NEWS_API_KEY as key } from '$env/static/private';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`);
		const json = await data.json();

		return {
            status: 200,
			data: json.articles as Article[]
		};
	} catch (e) {
		return {
            status: 500,
			data: []
		};
	}
};
