<template>
    <div class="profile-popup">
    <div id="arrow"></div>
      <div id="btnDiv">
        <router-link to="/Profile" tag="button">Go to profile</router-link>
        <button id="logout" @click="logout">Logout</button>
      </div>
  </div>
</template>

<script>
    export default {
        
        methods: {
            logout() {
                this.$store.commit('LogoutUser' )
                alert('You have been logged out')
            }
        },
    }
</script>

<style lang="scss" scoped>
.profile-popup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 120px;
    height: 110px;
    margin-right: 45px;
    box-shadow: 7px 2px 8px rgba(0, 0, 0, 0.33);

    #arrow {
        height: 1rem;
        width: 15px;
        background-color: white;
        transform: rotate(45deg);
        position: relative;
        bottom: 25%;
        right: 15%;
        }

    #btnDiv {
      justify-content: space-between;
      column-gap: 20px;
      #logout {
        background-color: black;
        color: white;
        border-radius: 50px;
        width: 80px;
        margin-top: 15px;
      }
    }
}
</style>
