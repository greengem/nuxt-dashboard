<template>
  <RouteHeading>Weather</RouteHeading>
  <div v-if="loading">
    Loading weather data...
  </div>
  <div v-else-if="weather">
    <p>Location: {{ weather.name }}</p>
    <p>Temperature: {{ weather.main.temp }}°C</p>
    <p>Feels Like: {{ weather.main.feels_like }}°C</p>
    <p>Min: {{ weather.main.temp_min }}°C</p>
    <p>Max: {{ weather.main.temp_max }}°C</p>
    <p>Pressure: {{ weather.main.pressure }}</p>
    <p>Humidity: {{ weather.main.humidity }}</p>
    <p>Weather condition: {{ weather.weather[0].description }}</p>
  </div>
  <div v-else>
    <p>Error: {{ error }}</p>
  </div>
</template>

<script setup lang="ts">

interface Weather {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
}

const weather = ref<Weather | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

const locationDebugEnabled = true;
const locationDebug = 'London,UK';

onMounted(async () => {
  loading.value = true;
  if (locationDebugEnabled) {
    try {
      weather.value = await $fetch(`/api/weather?location=${locationDebug}`);
    } catch (err) {
      error.value = 'Failed to load weather data';
      console.error(err);
    } finally {
      loading.value = false;
    }
  } else {
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
  }
});
</script>