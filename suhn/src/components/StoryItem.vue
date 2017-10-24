<template>
  <div class="story-item">
    <div class="event-timeline">
      <p class="event-item" v-for="(item, index) in data">
        <a :href="item.url" target="_blank">{{item.title}}</a>
        <router-link :to="{ name: 'CommentsPage', params: { id: item.id }}"><span class="tag is-light"><small>{{item.comments_count}} comments</small></span></router-link>
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
.tag {
  margin-left: 10px;
}
</style>
