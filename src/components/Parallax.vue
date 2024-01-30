<template>
    <div class="parallax-container" :style="{ transform: `translateY(${offsetY}px)` }">
      <!-- Your parallax content goes here -->
      <div class="parallax-content">
        <h1>Welcome to the Parallax Effect</h1>
        <p>Scroll down to see the effect!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        offsetY: 0
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.offsetY = window.pageYOffset * 0.5; // Adjust the multiplier for different parallax effects
      }
    }
  };
  </script>
  
  <style scoped>
  .parallax-container {
    height: 100vh; /* Set the height of the parallax container */
    overflow: hidden; /* Hide the overflow */
  }
  
  .parallax-content {
    padding: 100px; /* Add padding or adjust margins for the content */
  }
  </style>