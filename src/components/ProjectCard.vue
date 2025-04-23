<script setup lang="ts">
defineProps<{
  image: string
  link: string
  description: string
  title: string
}>();
</script>

<template>
  <div class="project-card">
    <a :href="link" target="_blank" class="image-wrapper">
      <img :src="image" alt="">
      <div class="overlay">
        <h3 class="project-title">{{ title }}</h3>
      </div>
    </a>
    <p class="project-description">{{ description }}</p>
  </div>
</template>


<style scoped lang="scss">
.project-card {
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;

  .image-wrapper {
  position: relative;
  display: block;

  img {
    width: 100%;
    height: auto;
    display: block;
    filter: brightness(0.7); 
    transition: filter 0.3s ease;
    border-radius: 6px;
  }



    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    }

    .project-title {
      color: white;
      font-size: 1.5rem;
      background-color: rgba(0, 0, 0, 50);
      padding: 0.5rem 1rem;
      border-radius: 8px;
    }


    &:hover img {
    filter: brightness(1);
  }
  }

  .project-description {
    font-size: 1rem;
    color: #323;
    margin-top: 0.5rem;
  }
}

</style>
