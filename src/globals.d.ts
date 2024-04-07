
type NewsAPIResponse = {
	status: string;
	totalResults: number;
	articles: Article[];
};

type Article = {
  source: {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
      id: string;
      name: string;
    url: string;
    urlToImage: string;
  };
      title: string;
      description: string;
      url: string;
      urlToImage: string;
      publishedAt: string;
      content: string;
}