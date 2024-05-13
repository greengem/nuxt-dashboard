export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  //const source = event.context.query.source || 'techcrunch'; // Default to techcrunch if no source is provided
  const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=8&apiKey=${config.newsApiKey}`;

  try {
    const response = await $fetch(apiUrl);
    return response;
  } catch (error) {

    console.error('Failed to fetch news:', error);
    return { error: 'Failed to fetch news' };
  }
});
