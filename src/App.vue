<template>
  <div>
    <navbar v-on:exit="logout" v-bind:loggedd="isLoggedIn" v-bind:useer="getU"></navbar>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navbar from "./components/elements/navbar";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    navbar
  },
  mounted () {
    this.$store.dispatch("updateUser");
},
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    getU: function() {
      return this.$store.getters.getUs;
    }
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: #1f1c2c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #928dab,
    #1f1c2c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #928dab,
    #1f1c2c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
