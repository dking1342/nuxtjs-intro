<template>
  <main>
    <h1>Todos Board</h1>
    <p>Create a list of todos</p>
    <div class="create-new">
      <input
        v-model="todo"
        type="text"
        placeholder="Add a new todo"
        @keypress.enter="addTodo"
      />
      <button @click="addTodo">Add</button>
    </div>
    <TodoList 
      :todos="$store.state" 
    />
  </main>
</template>

<script lang="ts">
import TodoList from '../components/TodoList.vue';
import { MutationsEnum } from "../types/todo";

export default {
  name: 'IndexPage',
  components: { TodoList },
  data(){
    return{
      todo:"",
      newTodo:{id:0,content:"",done:false}
    }
  },
  head() {
    return {
      title: 'Todo App - Taking Care of Business',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Get your todos done easily',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'todos, todo, app',
        },
      ],
    }
  },
  methods:{
    addTodo(){
      if(this.todo) {
        this.newTodo.content = this.todo;
        this.$store.commit(MutationsEnum.ADD_TODO, this.newTodo);
        this.todo = "";
      }
    }
  }
}
</script>
