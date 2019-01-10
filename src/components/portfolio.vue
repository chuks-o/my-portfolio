<template>
  <transition name="fade">
    <div class="container">
      <div class="info">
        <h2 class="header">My Portfolio</h2>
        <p>My <router-link to="">Resume</router-link> is available for download.</p>
        <p>You can also find my works on <a href="https://www.github.com/chuks-o" target="_blank">Github </a>(<i class="fa fa-github"></i>)</p>
        <p>My newbie designs are available on <a href="https://www.behance.com" target="_blank">Behance </a>(<i class="fa fa-behance"></i>).
        &nbsp;<i class="fa fa-warning"></i> CAUTION: If you love your eyes and sanity, you should deeply consider skipping this. Thanks!</p>
      </div>

    </div>
  </transition>
</template>

<script>
import Card from "@/components/card.vue";
export default {
  components: { Card },
  data() {
    return {
      msg: ""
    };
  }
};                                                                                          
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  border: 1px solid orange;
  display: flex;
  width: 100%;
}

.header {
  color: #F2F2F2;                                                                                                         
  /* margin-bottom: 0px; */
}

.portfolio-cards {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 0 0 auto;
}

.info {
  color: #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@media screen and (max-width: 568px) {
  .info {
    padding: 0% 4%;
  }
  .header {
    font-size: 20px;
  }
}
</style>
