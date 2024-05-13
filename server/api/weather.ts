// server/api/weather.ts
export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const location = event.context.query.location || 'London'; // Default to London if no location is provided
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${config.openWeatherApiKey}&units=metric`;
  
    const response = await $fetch(apiUrl);
    return response;
});
