<template>
<div class="container">
  <nav>
    <span class="red-ellipse"></span>
    <span class="orange-ellipse"></span>
    <span class="green-ellipse"></span>
  </nav>
  <div id="app">
      <aside>
        <div class="aside-links">
          <router-link to="/" class="tooltip"><i class="fa fa-home"></i>
            <span class="tooltiptext">Home</span></router-link>
          <router-link to="/contact-me" class="tooltip"><i class="fa fa-envelope"></i>
           <span class="tooltiptext">Contact me</span>
          </router-link>
          <router-link to="/portfolio" class="tooltip"><i class="fa fa-briefcase"></i>
           <span class="tooltiptext">Portfolio</span></router-link>
        </div>
      </aside>

    <section class="content">
      <div class="main-body">
        <router-view/>
      </div>
        <div class="footer">
            <span>{{ date }} <sup>&copy;</sup> </span>
            <div class="social">
                <span>
                  <a href="https://twitter.com/commandline_"
                    target="_blank">
                    <i class="fa fa-twitter"></i>
                  </a>
                </span>
              <span >
                <a href="https://github.com/chuks-o"
                    target="_blank">
                  <i class="fa fa-github"></i>
                </a>
              </span>
              <span >
                <a href="https://medium.com/@okpalachuks"
                    target="_blank">
                  <i class="fa fa-medium"></i>
                </a>
              </span>
              <span >
                <a href="https://ng.linkedin.com/in/okpala-chukwualasu-10882712a"
                    target="_blank">
                  <i class="fa fa-linkedin"></i>
                </a>
              </span>
        </div>
  </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      date: new Date().getFullYear()
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 85px;
    font-size: 14px;
    background-color: #555;
    color: #F2F2F2;
    text-align: center;
    border-radius: 6px;
    padding: 1px 0;
    position: absolute;
    z-index: 1;
    bottom: -4px;
    left: 100%;
    margin-left: 14px;
    opacity: 0;
    transition: opacity 0.6s;
}
.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 37%;
    left: 0%;
    margin-left: -10px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
}
.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}


</style>
