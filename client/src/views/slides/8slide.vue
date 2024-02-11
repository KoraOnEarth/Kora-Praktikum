<template>
    <Header/>
    <div class="mount">
    <div class="container">
      <div class="course">
        <div class="h2-header">
          <h2>Урок 8. Наследование</h2>
        </div>
        <p>
          Создадим 2 независимых класса.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/eighthSlide/1.png" alt="">
        </div>
        <p>
          Если мы сейчас создаем экземпляр класса Geom, то можем спокойно обратиться к атрибуту “name” и отобразить его в консоли.
          Но понятное дело, что мы не можем вызвать метод draw(), потому что он принадлежит абсолютно другому классу. 
          Однако мы можем сделать так, чтобы класс Line <strong>наследовался</strong> от Geom
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/eighthSlide/2.png" alt="">
        </div>
        <p>
          Таким образом, в экземпляре класса Line мы можем спокойно получить доступ к атрибуту name класса Geom.
          Но <strong>зачем</strong> нам может понадобиться наследование?
        </p>
        <p>
          Давайте создадим у класса Line метод set_coords() и настроим его так, чтобы он выставлял координаты переменным x1,y1,x2,y2.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/eighthSlide/3.png" alt="">
        </div>
        <p>
          Теперь создадим новый класс Rect, который будет наследоваться от класса Geom.
          У него также будет метод set_coords, и точно те же переменные. 
          У нас возникнет дублирование кода, а это далеко не лучшая практика. 
          Хотя бы потому, что на это уходит больше времени как при написании кода, так и при чтении кода.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/eighthSlide/4.png" alt="">
        </div>
        <p>
          А если мы перенесем наш метод set_coords() в класс Geom, то нам <strong>не нужно будет</strong> писать этот же метод в дочерних классах, 
          потому что этот метод уже будет в родительском классе.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/eighthSlide/5.png" alt="">
        </div>
        <p>
          С точки зрения кода это работает так - если мы вызываем у экземпляра класса Line метод set_coords, 
          то интерпретатор ищет эту функцию <strong>сначала в классе Line</strong>, а затем в классе родителе, идя по иерархии наверх. 
          А self от класса родителя будет ссылаться не на родителя, а на сам <strong>экземпляр</strong>, из которого был вызван метод 
          (в нашем случае - класс Line). 
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/eighthSlide/6.png" alt="">
        </div>
        <div class="form-btns">
          <form action="/7slide">
            <button>Назад</button>
          </form>
          <form action="/9slide">
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