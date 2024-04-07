<script lang="ts">
  export let article: Article;
</script>

<div class="bg-white rounded-lg shadow-md p-8 flex gap-4 flex-col">
  {#if article.urlToImage}
    <img src={article.urlToImage} alt={article.title} class="w-full h-40 object-cover mb-4 rounded-lg" />
  {/if}

  <h2 class="text-xl font-semibold mb-2">{article.title}</h2>

  <p class="text-gray-600 leading-loose">{article.description}</p>

  <a class='text-blue-500 mt-4' href={article.url} target='_blank'>Read more</a>
</div>
