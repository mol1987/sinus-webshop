<template>
  <div class="login">
    <div id="arrow"></div>
      <form>
        <input v-model="username" type="text" placeholder="username"/>
        <input v-model="password" type="password" placeholder="password"/>
      </form>
      <div id="btnDiv">
        <router-link to="/" tag="button">Register</router-link>
        <button>Login</button>
      </div>
  </div>
</template>

<script>
export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: ''
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
    background-color: white;
    width: 200px;
    height: 110px;
    box-shadow: 7px 2px 8px rgba(0, 0, 0, 0.33);

    form {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }
    #arrow {
        height: 1rem;
        width: 15px;
        background-color: white;
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
}
</style>