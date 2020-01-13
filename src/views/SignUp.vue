<template>
  <div class="sign-up">
    <SignUp title="Sign Up"/>
  </div>
</template>

<style scoped lang="scss">
  .sign-up{
    width: 100%;
    height: 100%;
  }
</style>

<script>
// @ is an alias to /src
import SignUp from '@/components/SignUp.vue'

export default {
  components: {
    SignUp
  }
}
</script>
