<template>
  <div>  

    <div class="text-white">
      <h1>REGISTER</h1>
    </div>

    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <!-- <b-col col lg="2">1 of 3</b-col> -->
        <b-col cols="12" md="auto">
          <b-form  @submit.prevent="register">
            <label class="sr-only" for="inline-form-input-name">Name</label>
            <b-input
              required
              v-model="name"
              id="inline-form-input-name"
              class="mt-3 mb-2 mr-sm-2 mb-sm-0"
              placeholder="Name"
            ></b-input>

            <label class="sr-only" for="inline-form-input-name">Email</label>
            <b-input
              required
              v-model="email"
              id="inline-form-input-name"
              class="mt-3 mb-2 mr-sm-2 mb-sm-0"
              placeholder="Email"
            ></b-input>

            <label class="sr-only" for="inline-form-input-name">Password</label>
            <b-input
              required
              v-model="password"
              id="inline-form-input-name"
              class="mt-3 mb-2 mr-sm-2 mb-sm-0"
              placeholder="Password"
            ></b-input>

            <label class="sr-only" for="inline-form-input-name">Repeat password</label>
            <b-input
              required
              v-model="password_confirmation"
              id="inline-form-input-name"
              class="mt-3 mb-2 mr-sm-2 mb-sm-0"
              placeholder="Repeat pasword"
            ></b-input>

            <b-button variant="primary" type="submit" class="mt-3">Continue</b-button>
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
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    };
  },
  methods: {
    register: function() {
      let data = {
        nombre: this.name,
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>