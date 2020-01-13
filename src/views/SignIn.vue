<template>
  <div class="sign-in">
    <SignIn title="Sign In"/>
  </div>
</template>

<style scoped lang="scss">
  .sign-in{
    width: 100%;
    height: 100%;
  }
</style>

<script>
// @ is an alias to /src
import SignIn from '@/components/SignIn.vue'

export default {
  components: {
    SignIn
  }
}
</script>


   