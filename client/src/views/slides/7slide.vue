<template>
    <Header/>
    <div class="mount">
    <div class="container">
      <div class="course">
        <div class="h2-header">
          <h2>Урок 7. Свойства property</h2>
        </div>
        <p>
          Здесь мы узнаем, как удобнее взаимодействовать с приватными атрибутами через специальный объект <strong>property</strong> (свойства).
        </p>
        <p>
          Представим, что разрабатываем класс для обработки данных о персонале, и у нас будет имя и возраст сотрудника.
          Создаем конструктор и геттер и сеттер.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/seventhSlide/1.png" alt="">
        </div>
        <p>
          Проблема здесь заключается в том, что для того, чтобы через геттеры и сеттеры взаимодействовать с данными, 
          нам понадобится геттер и сеттер на <strong>каждую</strong> переменную, и программисту придется это запоминать. 
          Решить эту проблему нам и позволит знание свойств (property)
        </p>
        <p>
          Для этого в классе Person мы создадим атрибут old, где пишем <strong>property(get_old, set_old)</strong>.
          Теперь мы можем просто обращаться к переменной old, и если мы просто пропишем p.old, то у нас сработает getter, 
          а если дадим новое значение переменной - у нас сработает setter.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/seventhSlide/2.png" alt="">
        </div>
        <div class="form-btns">
          <form action="/6slide">
            <button>Назад</button>
          </form>
          <form action="/8slide">
            <button>Далее</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    export default {
      name: 'CoursesView',
      components: {
          Header,
      },
    };
</script>

<style lang="scss" scoped>
@import "@/assets/css/slides.scss";
</style>