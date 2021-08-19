<template>
  <div id="app">
    <div id="nav"></div>
    <router-view />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
#app {
  font-family: Lato;
  /* max-width: 1440px;
  display: block;
  margin: auto; */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.white {
  color: #FAFAFF;
}
</style>
