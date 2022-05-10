<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#15c8d1">
    <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="navbar-brand ps-5" to="/">
            Home
            </router-link>
          </li>
        </ul>
    </div>
  </nav>
  <div class="container">
      <router-view/>
  </div>
   
</div>

</template>
<script>
export default {
  name:'App',
  data() {
    return {
      
    }
  },
  mounted(){
    console.log(name.Alert)
  }
}
</script>