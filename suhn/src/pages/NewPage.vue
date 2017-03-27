<template>
  <div class="ask-page">
    <div class="column is-12">
      <div class="columns">
        <div class="column is-12">
          <story-item></story-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoryItem from '@/components/StoryItem'
import axios from 'axios'

export default {
  name: 'ask-page',
  components: {
    StoryItem
  },
  data: () => ({
    newPosts: [],
    errors: []
  }),
  created () {
    const apiUrl = 'https://hacker-news.firebaseio.com/v0'
    axios.get(apiUrl + '/topstories.json?print=pretty')
      .then(response => {
        this.newPosts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>
</style>
