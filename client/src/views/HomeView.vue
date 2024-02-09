<template>
  <Header />
  <div class="mount">
    <div class="container">
      <p>{{ results.data }}</p>
      <p>{{ textFirst }}</p>
      <p>{{ textSecond }}</p>
      <p>{{ textThird }}</p>
      <p>{{ textFourth }}</p>
      <p>{{ textFifth }}</p>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import { homePageAboutInfo } from '@/_config';

  export default {
    name: 'HomeView',
    data() {
      return {
        results: {},
        textFirst: homePageAboutInfo.texts.textFirst,
        textSecond: homePageAboutInfo.texts.textSecond,
        textThird: homePageAboutInfo.texts.textThird,
        textFourth: homePageAboutInfo.texts.textFourth,
        textFifth: homePageAboutInfo.texts.textFifth,
      };
    },
    components: {
      Header,
    },
    methods: {
      getUser(){
        console.log(this.$store.getters.getUser);
      }
    },
    mounted() {
      
    },
  };
</script>

<style lang="scss" scoped>
@import "@/assets/css/slides.scss";

  .mount {
    margin: auto;
    margin-top: 50px;
    width: 65%;
  }

  p {
    font-family: 'Montserrat';
    font-weight: 400;
    margin-top: 2px;
    color: #fff;
  }
</style>
