<script setup lang="ts">

// Assuming the API returns an object with an array of articles
interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

// Use the NewsResponse interface to type the result of useFetch
const { data } = useFetch<NewsResponse>('/api/news');
const articles = computed(() => data.value?.articles || []);
</script>

<template>
  <RouteHeading>News</RouteHeading>
    <div class="grid grid-cols-4 gap-5">
      <div 
        v-for="article in articles" 
        :key="article.url"
        class="bg-ctp-surface0 rounded-md shadow-md"
      >
        <NuxtImg 
          :src="article.urlToImage" 
          class="rounded-t-md object-cover w-full h-64" 
        />

        <div class="p-4 pb-5">
          <h4 class="text-lg text-ctp-mauve mb-2 tracking-tight leading-snug">
            <a :href="article.url" target="_blank">
              {{ article.title }}
            </a>
          </h4>
          <p class="text-sm">{{ article.description }}</p>
        </div>
        
      </div>
    </div>
</template>
