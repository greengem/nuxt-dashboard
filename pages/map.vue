<template>
  <div>
    <div id="windy" style="height: 500px;"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

declare global {
  interface Window {
    windyInit: (options: any, callback: (windyAPI: any) => void) => void;
  }
}

onMounted(() => {
  loadScript('https://unpkg.com/leaflet@1.4.0/dist/leaflet.js', () => {
    loadScript('https://api.windy.com/assets/map-forecast/libBoot.js', initializeMap);
  });
});

function initializeMap() {
  const options = {
    key: 'I9tEqshxWVGdtGU8ZW9GQ4vVIE3W3DZI',
    lat: 50.4,
    lon: 14.3,
    zoom: 5
  };

  // Ensure the windyInit function is available globally
  window.windyInit(options, (windyAPI: any) => {
    const { map } = windyAPI;
    // You can now use the map and other Windy API features
  });
}

function loadScript(url: string, callback: () => void) {
  const script = document.createElement('script');
  script.src = url;
  script.onload = callback;
  document.head.appendChild(script);
}

</script>