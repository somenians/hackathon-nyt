import type { PageServerLoad } from './$types';
import { NEWS_API_KEY as key } from '$env/static/private';

export const load: PageServerLoad = async ({ url, fetch }) => {
	// const query = params.q && decodeURIComponent(params.q);
	const query = url.searchParams.get('q') ? decodeURIComponent(url.searchParams.get('q')!) : '';

	if (query) {
		try {
			// fixing critical security vulnerability
			const data = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${key}`);
			const json: NewsAPIResponse = (await data.json()) as NewsAPIResponse;

            console.log(json);

			if (json.status !== 'ok') {
				throw new Error(json.status);
			}
			if (json.totalResults === 0) {
				return {
					status: 404,
					error: 'No results found',
                    articles: []
				};
			}

            const filtered = json.articles.filter((article) => article.title !== '[Removed]');

			return {
				articles: filtered,
                status: 200,
                error: ''
			};
		} catch (e) {
			return {
				status: 500,
				error: `Error: ${e}`,
                articles: []
			};
		}
	}
	return {
        status: 400,
        error: 'No search query provided',
        articles: []
    };
};
