<template>
  <div class="home-page">
    <div class="column is-12">
      <div class="columns">
        <div class="column is-12">
          <loading-component v-if="isLoading"></loading-component>
          <story-item :data="topPosts"></story-item>
          <button-component v-if="pageNum > 1" v-on:click.native="lastPage" :data="button1Data"></button-component>
          <button-component v-on:click.native="nextPage" :data="button2Data"></button-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StoryItem from '@/components/StoryItem'
import ButtonComponent from '@/components/Button'
import LoadingComponent from '@/components/Loading'
import axios from 'axios'

export default {
  name: 'home-page',
  components: {
    StoryItem,
    ButtonComponent,
    LoadingComponent
  },
  data: () => ({
    topPosts: [],
    errors: [],
    isLoading: true,
    button1Data: {
      title: 'Prev Page',
      url: '#',
      icon: '',
      color: 'light'
    },
    button2Data: {
      title: 'Next Page',
      url: '#',
      icon: '',
      color: 'light'
    },
    apiUrl: 'https://node-hnapi.herokuapp.com',
    postType: 'news',
    pageNum: 1
  }),
  created () {
    this.getPostContent(this.postType, this.pageNum)
  },
  methods: {
    getPostContent: function (postType, pageNum) {
      axios.get(this.apiUrl + `/${postType}?page=${pageNum}`)
        .then(response => {
          this.$set(this, 'topPosts', response['data'])
          this.isLoading = false
        })
        .catch(e => {
          this.errors.push(e)
          console.log(this.errors)
        })
    },
    nextPage: function () {
      this.pageNum++
      if (this.pageNum < 1) {
        this.pageNum = 1
      }
      this.isLoading = true
      this.getPostContent(this.postType, this.pageNum)
    },
    lastPage: function () {
      this.pageNum--
      if (this.pageNum < 1) {
        this.pageNum = 1
      }
      this.isLoading = true
      this.getPostContent(this.postType, this.pageNum)
    }
  }
}
</script>

<style scoped>
</style>
