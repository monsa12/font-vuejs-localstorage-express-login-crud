<template>
  <div>
 <div class="text-white">

<h1>LOGIN</h1>
 </div>
      <b-container class="bv-example-row">
        <b-row class="justify-content-md-center">
          <!-- <b-col col lg="2">1 of 3</b-col> -->
          <b-col cols="12" md="auto">
            <b-form  @submit.prevent="login">
              <label class="sr-only" for="inline-form-input-name">Email</label>
              <b-input required v-model="email" id="inline-form-input-name" class="mt-3 mb-2 mr-sm-2 mb-sm-0" placeholder="Email"></b-input>

              <label class="sr-only" for="inline-form-input-username">Password</label>
              <b-input required v-model="password" id="inline-form-input-username" class="mt-3" type="password" placeholder="Password"></b-input>

              <b-button variant="primary" type="submit" class="mt-3">Login</b-button>
            </b-form>
          </b-col>
          <!-- <b-col col lg="2">3 of 3</b-col> -->
        </b-row>
      </b-container>


  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
