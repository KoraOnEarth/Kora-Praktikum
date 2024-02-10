<template>
    <Header/>
    <div class="mount">
    <div class="container">
      <div class="course">
        <div class="h2-header">
          <h2>Урок 2. Self</h2>
        </div>
        <p>
          Как мы уже говорили, у классов есть свойства (данные). 
          Но в классе мы также можем использовать функции для того, чтобы как-то обрабатывать данные. 
          Такие функции внутри класса в ООП называют методами. Причем обычно их называют какими-либо глаголами, 
          объясняющими что делает тот или иной метод (функция). 
          Так, например, можно встретить методы с названиями <strong>“set_value”, “get_param”, “start”, “stop”</strong> и другие.
        </p>
        <p>
          Для примера, давайте объявим новый метод <strong>set_coords</strong>, и в теле этого методамы вызовем функцию print() с текстом “вызов метода set_coords”.
          Теперь мы можем обратиться к методу, который мы только что написали, через точку. Но если мы сейчас напишем set_coords(), 
          то возникнет ошибка, говорящая о том, что функция принимает 0 аргументов, но 1 был указан. 
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/secondSlide/1.png" alt="">
        </div>
        <p>
          Казалось бы, странно, ведь мы ничего не указывали функции. Но на самом деле, все правильно. 
          Когда мы писали функцию, мы должны были в её аргументы передать <strong>self</strong>. 
          Это ссылка на экземпляр, в котором была вызвана функция. 
          Так функция будет всегда понимать, с каким конкретно объектом ей нужно работать.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/secondSlide/2.png" alt="">
        </div>
        <p>
          Нужно учесть, что теперь мы <strong>не сможем</strong> спокойно вызвать функцию из класса, поскольку self не будет понимать, 
          с каким объектом ей взаимодействовать и в результате выкинет исключение. 
          Тем не менее, если мы пропишем вызов функции из самого класса Point и в аргументы передадим экземпляр нашего класса, 
          то все отработает правильно.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/secondSlide/3.png" alt="">
        </div>
        <p>
          Но для чего нам вообще нужно было создавать эту функцию? Так мы сможем удобно задавать значения нашим точкам. 
          Давайте обновим сигнатуру нашей функции, 
          теперь она выглядит как <strong>def set_coords(self, x,y)</strong>, и 
          через self.x и self.y присвоим значения в x и y.
        </p>
        <p>
          Теперь, если мы в экземпляре класса вызовем метод set_coords и передадим туда данные, то у нас все подставится. 
          И самый класс в том, что теперь это можно делать <strong>С ЛЮБЫМ</strong> экземпляром нашего класса Point, 
          не переписывая наши строчки, отвечающие за установку координат.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/secondSlide/4.png" alt="">
        </div>
        <p>
          Теперь давайте создадим ещё один метод, в котором мы будем возвращать наши координаты объекта.
          И если мы в этот раз у экземпляра класса вызовем метод <strong>get_coords()</strong>, то он нам вернет данные в виде кортежа.
        </p>
        <div class="div__img__center">
            <img class="img__center" src="@/assets/img/secondSlide/5.png" alt="">
        </div>
        <div class="form-btns">
          <form action="/1slide">
            <button>Назад</button>
          </form>
          <form action="/3slide">
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