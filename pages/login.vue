<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-primary text-white text-center">
            <h3>Login</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  class="form-control"
                  v-model="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  v-model="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
          </div>
          <div class="card-footer text-center">
            <small class="text-muted">Don't have an account? Sign up!</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleLogin() {
        if (this.email && this.password) {
          console.log("Login successful with email:", this.email);
          // Implement your authentication logic here
          alert("Login successful!");
        } else {
          alert("Please fill in all fields.");
        }
      },
    },
  };
</script>

<style scoped>
  body {
    background-color: #f8f9fa;
  }
  .card {
    border-radius: 10px;
  }
</style>
