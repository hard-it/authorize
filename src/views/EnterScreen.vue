<template>
  <div class="enter-screen">
    <EnterScreen/>
  </div>
</template>

<style scoped lang="scss">
  .enter-screen{
    width: 100%;
    height: 100%;
  }
</style>

<script>
// @ is an alias to /src
import EnterScreen from '@/components/EnterScreen.vue'

export default {
  name: 'home',
  components: {
    EnterScreen
  }
}
</script>
