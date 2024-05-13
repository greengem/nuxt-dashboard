<template>
  <RouteHeading>Weather</RouteHeading>
  <h1>Weather Near You</h1>
  <div v-if="loading">
    Loading weather data...
  </div>
  <div v-else-if="weather">
    <pre>{{ jsonStringifiedWeather }}</pre>
    <p>Temperature: {{ weather.main.temp }}°C</p>
    <p>Weather condition: {{ weather.weather[0].description }}</p>
  </div>
  <div v-else>
    <p>Error: {{ error }}</p>
  </div>
</template>

<script setup>

const weather = ref(null);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    const location = `${latitude},${longitude}`;
    try {
      weather.value = await $fetch(`/api/weather?location=${location}`);
    } catch (err) {
      error.value = 'Failed to load weather data';
      console.error(err);
    } finally {
      loading.value = false;
    }
  }, (geoError) => {
    error.value = 'Geolocation is not supported by this browser.';
    console.error(geoError);
    loading.value = false;
  });
});

const jsonStringifiedWeather = computed(() => {
  return weather.value ? JSON.stringify(weather.value, null, 2) : '{}';
});
</script>
