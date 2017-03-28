<template>
  <div class="home-page">
    <div class="column is-12">
      <div class="columns">
        <div class="column is-12">
          <story-item :data="topPosts"></story-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoryItem from '@/components/StoryItem'
import axios from 'axios'

export default {
  name: 'home-page',
  components: {
    StoryItem
  },
  data: () => ({
    topPostIDs: [],
    topPosts: [],
    errors: [],
    apiUrl: 'https://hacker-news.firebaseio.com/v0'
  }),
  created () {
    this.getTopPostIDs()
  },
  methods: {
    getTopPostIDs: function () {
      let _self = this
      axios.get(this.apiUrl + '/topstories.json?print=pretty')
        .then(response => {
          this.topPostIDs = response.data.slice(0, 15) // grab 15 posts olny
          this.topPostIDs.forEach(function (id) {
            _self.getPostContent(id)
          })
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    getPostContent: function (id) {
      axios.get(this.apiUrl + `/item/${id}.json?print=pretty`)
        .then(response => {
          this.topPosts.push(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<style scoped>
</style>
