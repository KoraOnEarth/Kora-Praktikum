<template>
  <SecondHeader/>
    <div class="login-box">
      <h2>Регистрация</h2>
      <form @submit.prevent>
        <div class="user-box">
          <input type="text" v-model="nickname" required />
          <label>Ваш псевдоним<span class="small_text">*</span></label>
        </div>
        <div class="user-box">
          <input type="text" v-model="email" required />
          <label>Ваша почта<span class="small_text">*</span></label>
        </div>
        <div class="user-box">
          <input type="password" v-model="password" required />
          <label>Ваш пароль<span class="small_text">*</span></label>
        </div>
        <div class="display_center">
          <a @click="onRegistration">
            <span></span>
            <span></span>
            <span></span>
            <span></span>Отправить
          </a>
        </div>
      </form>
      <div class="display_center" style="margin-top: 20px">
        <p>Есть аккаунт? <router-link to="/login">Войти!</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
    import { registration } from '@/http/userAPI';
    import SecondHeader from "@/components/secondHeader.vue";
    export default {
    name: 'RegistrationFormView',
    data() {
      return {
        nickname: '',
        email: '',
        password: '',
      };
    },
    methods: {
      async onRegistration() {
        const result = await registration(
          this.nickname,
          this.email,
          this.password,
        );
        if (result.status == 201) {
          alert('Спасибо за регистрацию! \nТеперь вы имеете доступ к курсам');
        }
        console.warn(result);
      },
    },
    components: {
      SecondHeader
    }
  };
  </script>
  
  <style lang="scss" scoped>
    html {
      height: 100%;
    }
  
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background: linear-gradient(#141e30, #2a6c56);
    }
  
    .login-box {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 400px;
      padding: 40px;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.5);
      box-sizing: border-box;
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
      border-radius: 10px;
    }
  
    .login-box h2 {
      margin: 0 0 30px;
      padding: 0;
      color: #fff;
      text-align: center;
    }
  
    .small_text {
      font-size: 15px;
      vertical-align: 5px;
      color: red;
    }
  
    .display_center {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
    }
  
    .display_center p {
      color: white;
    }
  
    .display_center a {
      color: white;
      text-decoration: none;
      cursor: pointer;
    }
  
    .login-box .user-box {
      position: relative;
    }
  
    .login-box .user-box input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: #fff;
      margin-bottom: 30px;
      outline: none;
      background: transparent;
    }
  
    .login-box .user-box label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 5px;
      font-size: 16px;
      color: #fff;
      pointer-events: none;
      transition: 0.5s;
    }
  
    .login-box .user-box input:focus ~ label,
    .login-box .user-box input:valid ~ label {
      top: -35px;
      left: 0;
      color: #03f484;
      font-size: 12px;
    }
  
    .login-box form a {
      position: relative;
      display: inline-block;
      padding: 10px 20px;
      color: #03f484;
      font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      overflow: hidden;
      transition: 0.5s;
      margin-top: 20px;
      margin-left: auto;
      letter-spacing: 4px;
    }
  
    .login-box a:hover {
      background: #03f484;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #03f484, 0 0 25px #03f484, 0 0 50px #03f484,
        0 0 100px #03f484;
    }
  
    .login-box a span {
      position: absolute;
      display: block;
    }
  
    .login-box a span:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #03f484);
      animation: btn-anim1 1s linear infinite;
    }
  
    @keyframes btn-anim1 {
      0% {
        left: -100%;
      }
      50%,
      100% {
        left: 100%;
      }
    }
  
    .login-box a span:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, #03f484);
      animation: btn-anim2 1s linear infinite;
      animation-delay: 0.25s;
    }
  
    @keyframes btn-anim2 {
      0% {
        top: -100%;
      }
      50%,
      100% {
        top: 100%;
      }
    }
  
    .login-box a span:nth-child(3) {
      bottom: 0;
      right: 100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, transparent, #03f484);
      animation: btn-anim3 1s linear infinite;
      animation-delay: 0.5s;
    }
  
    @keyframes btn-anim3 {
      0% {
        right: -100%;
      }
      50%,
      100% {
        right: 100%;
      }
    }
  
    .login-box a span:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, #03f484);
      animation: btn-anim4 1s linear infinite;
      animation-delay: 0.75s;
    }
  
    @keyframes btn-anim4 {
      0% {
        bottom: -100%;
      }
      50%,
      100% {
        bottom: 100%;
      }
    }
  </style>
  