<template>
    <Header/>
    <div class="mount">
    <div class="container">
      <div class="course">
        <div class="h2-header">
          <h2>Урок 9. Функция issubclass(). Наследование от встроенных типов и от object</h2>
        </div>
        <p>
          Как мы уже говорили, <strong>все классы наследуются от класса object</strong>.
          Именно поэтому у нас уже есть все встроенные методы (такие как, например, __init__, хотя мы их не писали).
          И один из этих встроенных методов поможет нам определить, является ли класс подклассом кого-либо 
          (например, является ли Line наследником кого-либо).
          Этот метод называется <strong>issubclass()</strong>.
        </p>
        <p>
          Мы можем прописать <strong>print(issubclass(Line, Geom))</strong>, и в нашем случае выведется True, 
          потому что Line <strong>является наследником</strong> класса Geom.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/ninethSlide/1.png" alt="">
        </div>
        <p>
          Но если мы запишем наоборот, то бишь <strong>print(issubclass(Geom, Line))</strong>, то получим False, потому что Geom <strong>не наследуется</strong> от класса Line.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/ninethSlide/2.png" alt="">
        </div>
        <p>
          Но стоит помнить, что функция <strong>issubclass</strong> работает <strong>ТОЛЬКО С САМИМИ КЛАССАМИ</strong>. С экземплярами её использовать не получится.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/ninethSlide/3.png" alt="">
        </div>
        <p>
          Чтобы это сделать, нам нужно использовать другой метод - <strong>isinstance()</strong>.
        </p>
        <p>
          Интересный факт - все типы переменных (int, float, bool и т.п.) являются классами. 
          И мы можем легко это проверить, написав, например, <strong>print(issubclass(int, object))</strong>, и получим true, 
          поскольку класс int тоже наследуется от object.
        </p>
        <p>
          А что нам тогда мешает расширить класс int? Да, собственно, ничего!
          Давайте создадим класс <strong>Vector</strong>, который будет наследоваться от int, в нем создадим метод __str__, а в return выпишем вывод данных.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/ninethSlide/4.png" alt="">
        </div>
        <p>
          Таким образом мы подкорректировали поведение list (массив) под наши нужды, создав класс Vector.
        </p>
        <div class="form-btns">
          <form action="/8slide">
            <button>Назад</button>
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