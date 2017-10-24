<template>
  <div id="app">
    <nav class="navbar hero is-default has-shadow" id="top">
      <div class="container">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/" exact>
            <p class="logo-circle"></p>
            <p class="logo">suhn</p>
          </router-link>
          <router-link class="navbar-item" to="new">New</router-link>
          <router-link class="navbar-item" to="show">Show</router-link>
          <router-link class="navbar-item" to="ask">Ask</router-link>
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
            <strong>suhn</strong> by Rick Sellers. Built using <a href="https://vuejs.org/" target="_blank">Vue2</a>, <a href="https://github.com/mzabriskie/axios" target="_blank">axios</a>, <a href="http://bulma.io/" target="_blank">Bulma</a>, and <a href="https://github.com/cheeaun/node-hnapi" target="_blank">Unofficial HN API</a>.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
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
