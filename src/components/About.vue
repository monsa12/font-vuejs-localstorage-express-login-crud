<template>
  <div>
    <b-jumbotron class="mx-5">
      <template slot="header">About this project</template>
      <!-- <template slot="lead">About this project:</template> -->
      <p
        class="mt-5"
      >In total are two parts of project, this is the first part, which is for front-end and are developed whit the next tecnologies and libraries:</p>
      <ul>
        <li>Vuejs</li>
        <li>VueCLI</li>
        <li>Axios</li>
        <li>Vuex</li>
        <li>Vue-Router</li>
        <li>Bootstrap4</li>
        <li>Bootstrap-vue</li>
        <li>localStorage API HTML5</li>
      </ul>
      <p>

        This app manage it´s state whit Vuex and also save this data in the localStorage for futures sessions logins, make calls to api Rest with axios, and integred a structure SPA using vueRouter,
        for the desing a bootstrap libray was used and was bootstrap-vue.
        <br>
        At the moment this app dont have a strategy offline.
      </p>

      <p class="text-muted">
        SPA builded by:
        <a href="https://github.com/monsa12" target="__blank" class="text-reset">Diego Monsalve</a>.
      </p>

      <div class="mt-5">
        <b-button variant="primary" to="/login">Login</b-button>&nbsp;
        <b-button variant="primary" to="/register">Register</b-button>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
