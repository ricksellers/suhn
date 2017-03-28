<template>
  <div class="story-item">
    <div class="event-timeline">
      <p class="event-item" v-for="(item, index) in data">
        {{index + 1}}. <a :href="item.url" target="_blank">{{item.title}}</a>
        <span class="tag is-light"><small>{{item.descendants}} comments</small></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'story-item',
  props: ['data']
}
</script>

<style scoped>
</style>
