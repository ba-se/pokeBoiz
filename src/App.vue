<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/pokemon/">Pokemon</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  font-family: 'Roboto Slab', serif;
}
</style>
