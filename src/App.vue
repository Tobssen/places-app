<template>
  <div id="nav" class="nav-bar">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/places">Places</router-link>
  </div>


  <div class="window">

   <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #f2f3f3;
}


.nav-bar {
  z-index:2;
  position: fixed;
  overflow: hidden;
  width: 100%;
  background: linear-gradient(-90deg, #6ac8cf, #bfd16c);
  height: 35px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
}

.window{
  z-index:1;
  margin-top: 140px;
  position:relative;
  z-index:100px;
}

body {
  overflow-y: scroll;
  position: relative;
}
</style>
