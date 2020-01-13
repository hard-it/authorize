<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<style lang="scss">

  @import url('https://rsms.me/inter/inter.css');
  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }

*{
  outline:0;
  box-sizing:border-box
}

html, body{
  position:relative;
  width: 100%;
  height: 100%;
  overflow:hidden;
  margin: 0;
  background: #FAF3F3;
  font-family: Inter, sans-serif;
}

#app{
  width:100%;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

