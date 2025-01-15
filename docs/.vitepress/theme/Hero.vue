<!-- docs/.vitepress/theme/components/Hero.vue -->
<template>
  <div class="custom-hero">
    <img src="/fivecircles.svg" alt="Hero Background Image" class="hero-background-image" />
    <div class="hero-content">
      <h1>{{ name }}</h1>
      <p>{{ tagline }}</p>
      <a :href="action.link" class="hero-button">{{ action.text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'CAPS Online Learning Center'
    },
    tagline: {
      type: String,
      default: 'Access a repository of learning resources maintained by CAPS'
    },
    action: {
      type: Object,
      default: () => ({ text: 'Get Started', link: '/get-started' })
    }
  }
}
</script>

<style scoped>
.custom-hero {
  position: relative;
  width: 100%; /* Full width */
  min-height: 50vh; /* Adjust as needed */
  overflow: hidden;
  display: flex; /* Flexbox for layout */
  align-items: center; /* Center content vertically */
}

.hero-background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 600px; /* Adjust as needed */
  padding: 20px;
  margin-left: 20px; /* Margin for left alignment */
}

.hero-content h1 {
  font-size: 4rem; /* Make text larger */
  margin: 0;
}

.hero-content p {
  font-size: 1.5rem; /* Adjust font size */
  margin: 10px 0;
}

.hero-button {
  display: inline-block;
  background-color: var(--vp-c-brand-1);
  color: #ffffff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}
</style>
