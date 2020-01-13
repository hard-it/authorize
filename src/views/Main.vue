<template>
  <div class="main">
    <Main/>
  </div>
</template>

<style scoped lang="scss">
  .main{
    width: 100%;
    height: 100%;
  }
</style>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'

export default {
  components: {
    Main
  }
}
</script>