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
    askPosts: [],
    errors: [],
    isLoading: true,
    apiUrl: 'https://node-hnapi.herokuapp.com',
    postType: 'ask',
    pageNum: '1'
  }),
  created () {
    this.getPostContent(this.postType, this.pageNum)
  },
  methods: {
    getPostContent: function (postType, pageNum) {
      axios.get(this.apiUrl + `/${postType}?page=${pageNum}`)
        .then(response => {
          this.$set(this, 'askPosts', response['data'])
          this.isLoading = false
        })
        .catch(e => {
          this.errors.push(e)
          console.log(this.errors)
        })
    }
  }
}
</script>

<style scoped>
</style>
