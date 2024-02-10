<template>
    <Header/>
    <div class="mount">
    <div class="container">
      <div class="course">
        10 slide
        <div class="form-btns">
          <form action="/9slide">
            <button>Назад</button>
          </form>
          <form action="/11slide">
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