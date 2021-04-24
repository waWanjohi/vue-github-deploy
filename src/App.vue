<template>
  <nav>
    <div class="nav containerX">
      <ul>
        <li class="large-screen is-left">
          <router-link to="/">{| <img class="logo" src="https://pikdrive.com/images/logo.png"> |}</router-link>
        </li>
        <li class="small-screen">
          <router-link to="/"><img class="logo" src="https://pikdrive.com/images/logo.png"></router-link>
        </li>
        <li class="right">
          <router-link to="/products">Products</router-link>
        </li>
        |
        <li class="right">
          <router-link to="/suppliers">Suppliers</router-link>
        </li>
        |
        <li class="right">
          <router-link to="/orders">Orders</router-link>
        </li>
        |
        <li class="right">
          <router-link to="/product-suppliers">Product Suppliers</router-link>
        </li>
        |
        <li class="right">
          <router-link to="/">Top Sales</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <div class="clearfix"></div>
  <router-view/>

</template>

<script>
</script>


<style scoped>
* {
  margin: auto;
  padding: 0px;
}

.containerX {
  margin: 0 auto;
  width: 85%;
}

.clearfix {
  clear: both;
}


/*******************************/

/*********************HEADER*******************/


nav {
  text-align: center;
  width: 100%;
  background-color: white;
  border: 2px solid black;
}

nav ul {
  padding: 0;
  margin: 0;
}

nav li {
  color: black;
  display: inline-block;
  font-size: 30px;
  font-weight: 300;
  font-family: 'Sacramento', cursive;
  vertical-align: middle;
  margin: 16px 20px;
}


li a {
  text-decoration: none;
  color: black;
}

.logo {
  height: 100px;
}

.small-screen {
  display: none;
}

@media screen and (max-width: 768px) {
  nav li {
    display: block
  }

  .small-screen {
    display: block;
  }

  .large-screen {
    display: none;
  }
}
</style>
