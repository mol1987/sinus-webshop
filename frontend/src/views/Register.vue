<template>
  <div class="register">
      <Nav />
    <div class="skate-img"></div>
    <div class="register-fields">
      <form>
        <h3>Register</h3>
        <label for="fname">Full name:</label><br>
        <input type="text" id="fname" name="fname" v-model="userData.name"><br>
        <label for="lname">Email:</label><br>
        <input type="text" id="email" name="email"  v-model="userData.email"><br>
        <label for="lname">Password:</label><br>
        <input type="password" id="password" name="password"  v-model="userData.password"><br>
        <label for="lname">Confirm password:</label><br>
        <input type="password" id="confirmPass" name="confirmPass"  v-model="userData.repeatPassword"><hr>
        <div id="adress-fields">
            <label for="adress">Adress: </label>
            <div id="adress-info">
                <input type="text" name="street" placeholder="street"  v-model="userData.adress.street">
                <input type="number" name="zip" placeholder="zip"  v-model="userData.adress.zip">
                <input type="text" name="city" placeholder="city"  v-model="userData.adress.city">
            </div>
        </div>
        <hr>
        <!-- <div id="payment-fields">
          <p>Payment information: </p>
          <input type="text" id="card-owner" v-model="userData.payment.cardOwner" placeholder="card owner">
          <input type="text" id="card-number" v-model="userData.payment.cardNumber" placeholder="card number">
          <input type="text" id="expire-date" v-model="userData.payment.validUntil" placeholder="expire date">
          <input type="text" id="cvv" v-model="userData.payment.cvv" placeholder="cvv">
        </div> -->
      </form>
      <div id="btn-div">
          <button @click="registerUser">Register</button>
          <button @click="cancel">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'Register',
  components: {
    Nav
  },
  data() {
    return {
      userData: {
        email: '',
        password: '',
        repeatPassword: '',
        name: '',
        role: 'customer',
        adress: {
            street: '',
            zip: '',
            city: ''
          },
        // payment: {
        //     cardOwner: '',
        //     cardNumber: '',
        //     validUntil: '',
        //     cvv: ''
        // },
        }, 
        // *** This data is just to reset input fields when cancel button is clicked.
        initialState: {
          email: '',
        password: '',
        repeatPassword: '',
        name: '',
        role: 'customer',
        adress: {
            street: '',
            zip: '',
            city: ''
          },
        // payment: {
        //   cardOwner: '"Johan Kivi"',
        //   cardNumber: '',
        //   validUntil: '',
        //   cvv: ''
        // },
        }
      }
    },
  methods: {
    registerUser() {
      this.$store.dispatch('RegisterUser', this.userData)
      alert('You have been registered! Thank you!')
      this.userData = this.initialState
    },
    cancel() {
      this.userData = this.initialState
    }
  },
}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  .register-fields {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 80px;
      #adress-fields {
          display: flex;
          margin-top: 5px;
          justify-content: center;
          label {
            margin-right: 20px;
          }
          #adress-info {
            display: flex;
            flex-direction: column;
          }
      }
      h4 {
          margin-top: 5px;
      }
      button {
          margin-top: 15px;
          margin-right: 15px;
          background-color: black;
          color: white;
          height: 25px;
          width: 75px;
          border-radius: 50px;
      }
  }
}
.skate-img {
  background: url('../assets/skate-hero-1.jpg');
  background-size: cover;
  background-position: center;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2rem rgba(0,0,0,.2);
}
</style>
