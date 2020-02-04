<template>
  <div>

    <header>
      <div class="logo">
        <span>Form-Constructor | Admin Panel</span>
      </div>
      <nav>
        <div class="menu">
          <router-link to="/" class="link">Главная</router-link>
          <a href="" class="link">Выход</a>
        </div>
      </nav>
    </header>

    <div class="wrapper">

      <aside>
        <div class="block">
          <div class="block__header">
            <span>Меню 1</span>
          </div>
          <div class="block__body">
            <router-link to="/sectionsList" class="link">Секции</router-link>
          </div>
        </div>
      </aside>

      <main>
        <router-view></router-view>
      </main>

    </div>

  </div>


</template>

<script>
  export default {
    name: 'Home',
    props: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
