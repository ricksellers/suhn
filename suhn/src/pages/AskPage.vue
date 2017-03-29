<template>
  <div class="ask-page">
    <div class="column is-12">
      <div class="columns">
        <div class="column is-12">
          <story-item :data="askPosts"></story-item>
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
    askPostIDs: [],
    askPosts: [],
    errors: [],
    apiUrl: 'https://hacker-news.firebaseio.com/v0'
  }),
  created () {
    this.getAskPostIDs()
  },
  methods: {
    getAskPostIDs: function () {
      let _self = this
      axios.get(this.apiUrl + '/askstories.json?print=pretty')
        .then(response => {
          this.askPostIDs = response.data.slice(0, 15) // grab 15 posts olny
          this.askPostIDs.forEach(function (id) {
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
          this.askPosts.push(response.data)
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
