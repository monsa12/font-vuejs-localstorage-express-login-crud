<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/">Profundizacion3/APP</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item v-if="loggedd" to="/notes">Notes</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav v-if="loggedd" class="ml-auto">
          <b-nav-form>
            <div class="text-center text-white mr-5">
              Bienvenido:
              <b-badge variant="success">{{ useer.nombre}}</b-badge>
            </div>&nbsp;
            <b-button variant="outline-danger" to="/" @click="logout">Logout</b-button>
          </b-nav-form>
        </b-navbar-nav>

        <b-navbar-nav v-if="!loggedd" class="ml-auto">
          <b-nav-form>
            <b-button variant="outline-success" to="/login">Login</b-button>
            &nbsp;
            <b-button variant="outline-success" to="/register">Register</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: ["useer", "loggedd"],
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },

  methods: {
    logout: function() {
      this.$emit("exit");
    }
  }
};
</script>

<style>
</style>
