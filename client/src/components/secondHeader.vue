<template>
    <div class="header">
      <router-link class="logo" to="/">Kora Praktikum</router-link>
      <nav class="navbar">
        <router-link class="list-item" to="/">Главная</router-link>
        <router-link class="list-item" to="/courses">Курсы</router-link>
        <router-link class="list-item" to="/about">О проекте</router-link>
      </nav>
      <nav class="navbar">
        <router-link class="list-item" to="/login" @click="authorize">Вход</router-link>
        <router-link class="list-item" to="/registration"
          >Регистрация</router-link
        >
      </nav>
    </div>
  </template>
  
  <script>
  import { appTitle } from "@/_config";
  export default {
    name: "SecondHeader",
    data() {
      return {
        title: appTitle.title,
      };
    },
    methods: {
      authorize(){
        console.log(this.$store.commit('setIsAuth', true));
      }
    }
  };
  </script>
  
  <style lang="scss" scoped></style>
  