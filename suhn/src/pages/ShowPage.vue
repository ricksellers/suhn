<template>
  <div class="show-page">
    <div class="column is-12">
      <div class="columns">
        <div class="column is-12">
          <story-item :data="showPosts"></story-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoryItem from '@/components/StoryItem'
import axios from 'axios'

export default {
  name: 'show-page',
  components: {
    StoryItem
  },
  data: () => ({
    showPostIDs: [],
    showPosts: [],
    errors: [],
    apiUrl: 'https://hacker-news.firebaseio.com/v0'
  }),
  created () {
    this.getShowPostIDs()
  },
  methods: {
    getShowPostIDs: function () {
      let _self = this
      axios.get(this.apiUrl + '/showstories.json?print=pretty')
        .then(response => {
          this.showPostIDs = response.data.slice(0, 15) // grab 15 posts olny
          this.showPostIDs.forEach(function (id) {
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
          this.showPosts.push(response.data)
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
