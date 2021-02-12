<template>
  <div class="home">
      <Nav />
    <div class="skate-img"></div>
    
    <div class="under">
      <div class="text">
        <h3>Cowabunga</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga quasi nam, expedita architecto dolor est magni sequi doloribus dignissimos autem laboriosam corrupti, corporis voluptatem possimus ea quos fugiat quidem.</p><br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga quasi nam, expedita architecto dolor est magni sequi doloribus dignissimos autem laboriosam corrupti, corporis voluptatem possimus ea quos fugiat quidem.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Nav
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
.under {
  display: flex;
  .text {
    margin-bottom: 50px;
  }
}

</style>
