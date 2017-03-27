<template>
  <div id="app">
    <nav class="nav hero is-default has-shadow" id="top">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item" href="../index.html">
          <p class="logo-circle"></p>
          <p class="logo">suhn</p>
          </a>
          <a class="nav-item">New</a>
          <a class="nav-item">Show</a>
          <a class="nav-item">Ask</a>
        </div>
      </div>
    </nav>
    <div class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>suhn</strong> by Rick Sellers. Built using <a href="#">Vue2</a>, <a href="#">axios</a>, <a href="#">Bulma</a>, and <a href="#">HN API</a>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import StoryItem from '@/components/StoryItem'

export default {
  name: 'app',
  components: {
    StoryItem
  }
}
</script>

<style>
a {
  color: #ff7300 !important;
}
.logo {
  font-size: 34px;
  font-weight: 600;
}
.logo-circle {
	border-radius: 50%;
	background: #ffb300;
	width: 20px;
	height: 20px;
	margin-top: 5px;
}
</style>
