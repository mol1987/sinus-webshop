<template>
  <div class="register">
      <Nav />
    <div class="skate-img"></div>
    
    <div class="register-fields">
      <form>
        <h3>Register</h3>
        <label for="fname">Full name:</label><br>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Email:</label><br>
        <input type="text" id="lname" name="lname"><br>
        <label for="lname">Password:</label><br>
        <input type="password" id="password" name="password"><hr>
        <div id="adress-fields">
            <label for="adress">Adress: </label>
            <div id="adress-info">
                <input type="text" name="street" placeholder="street">
                <input type="number" name="zip" placeholder="zip">
                <input type="text" name="city" placeholder="city">
            </div>
        </div>
        <hr>
        <h4>Payment information</h4>
        <div id="payment-info">
            <input type="text" name="cardOwner" id="owner" placeholder="name on card">
            <input type="number" name="cardNumber" id="card-number" placeholder="card number">
            <input type="number" name="validUntil" id="valid-until" placeholder="expire date">
            <input type="number" name="cvv" id="cvv" placeholder="cvv">
        </div>
        <div id="btn-div">
            <button>Register</button>
            <button>Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'Register',
  components: {
    Nav
  }
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
      justify-content: center;
      margin-bottom: 80px;
      #adress-fields {
          display: flex;
          margin-top: 5px;
      }
      h4 {
          margin-top: 5px;
      }
      #payment-info {
          margin-top: 5px;
          display: grid;
          grid-template-columns: auto auto;
          grid-gap: 5px;
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
