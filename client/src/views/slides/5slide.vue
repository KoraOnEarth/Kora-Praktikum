<template>
    <Header/>
    <div class="mount">
    <div class="container">
      <div class="course">
        <div class="h2-header">
          <h2>Урок 5. Декораторы @classmethod и @staticmethod</h2>
        </div>
        <p>
          До сих пор мы объявляли методы просто как функции внутри класса.
          Но мы можем объявлять ещё статические методы и методы класса.
          Создадим класс Vector
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/fifthSlide/1.png" alt="">
        </div>
        <p>
          В наш класс мы добавим два атрибута - <strong>MIN_COORD = 0</strong> и <strong>MAX_COORD = 100</strong>.
          Теперь пишем декоратор <strong>@classmethod</strong> и создаем метод validate(), и в аргументы пишем cls. 
          Напоминаю, что <strong>cls - это ссылка на сам класс</strong> (в нашем случае - Vector).
          Так, наш метод работает только с атрибутами нашего класса. 
          И здесь мы можем провалидировать нашу переменную arg
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/fifthSlide/2.png" alt="">
        </div>
        <p>
          Но в этом методе мы не можем обращаться к локальным атрибутам экземпляров классов.
          Давайте воспользуемся этим методом для проверки корректности вводимых данных в наш конструктор класса, 
          который вызывается при создании экземпляра класса
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/fifthSlide/3.png" alt="">
        </div>
        <p>
          Настало время <strong>статических методов</strong>. 
          Такие методы <strong>не имеют доступ ни к атрибутам класса, ни к атрибутам его экземпляров</strong>. 
          Создается некоторая независимая функция, объявленная внутри класса. 
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/fifthSlide/4.png" alt="">
        </div>
        <p>
          Так мы можем удобно работать с данными, не трогая поля класса.
        </p>
        <div class="form-btns">
          <form action="/4slide">
            <button>Назад</button>
          </form>
          <form action="/6slide">
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