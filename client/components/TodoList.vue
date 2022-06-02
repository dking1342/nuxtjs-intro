<template>
  <div>
    <div v-for="todo in todoList.todos" :key="todo.id" class="tasks">
        <todo-item :item="todo" />
    </div>
  </div>

</template>

<script>
import TodoItem from './TodoItem.vue'

  export default {
    name:"TodoList",
    components: { TodoItem },
    // eslint-disable-next-line vue/require-prop-types
    props:["todos"],
    data(){
      return{
        todoList: this.todos
      }
    }  
  }
</script>

<style lang="scss" scoped>

</style>