// *** Login popup component. 

<template>
  <div class="login">
    <div id="arrow"></div>
      <form>
         <p id="errorMsg">{{loginStatus}}</p>
        <input v-model="email" type="text" placeholder="email"/>
        <p id="errorMsg" v-if="errors.email">Please enter valid email</p>
        <input v-model="password" type="password" placeholder="password"/>
         <p id="errorMsg" v-if="errors.password">Please enter valid password</p>
      </form>
      <div id="btnDiv">
        <router-link to="/Register" tag="button">Register</router-link>
        <button @click="login">Login</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: '',
        errors: {
          email: false,
          password: false,
          validation: ''
        }
      }
    },
    computed: {
      inloggedUser() {
            return this.$store.getters.inloggedUser
        },
      loginStatus() {
        return this.$store.state.loginValidation
      }
    },
    methods: {
      login() {
        if (this.email == '') {
          this.errors.email = true
        }else this.errors.email = false
        if (this.password == '') {
          this.errors.password = true
        }else this.errors.password = false

        this.$store.dispatch('AuthenticateUser', {email: this.email, password: this.password} )
      }
    },
}
</script>

<style lang="scss" scoped>
.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: beige;
    border-radius: 15px;
    width: 200px;
    height: 170px;
    box-shadow: 7px 2px 8px rgba(0, 0, 0, 0.33);

    form {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }
    #arrow {
        height: 1rem;
        width: 15px;
        background-color: beige;
        transform: rotate(45deg);
        position: relative;
        bottom: 12%;
        right: 20%;
        }
    #btnDiv {
      display: flex;
      justify-content: space-between;
      column-gap: 20px;
      button {
        background-color: black;
        color: white;
        border-radius: 50px;
        width: 80px;
        margin-top: 15px;
      }
    }
    #errorMsg {
      color: red;
    }
}
</style>