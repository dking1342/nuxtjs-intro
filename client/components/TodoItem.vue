<template>
	<div :class="`task ${todo.done ? 'is-complete' : ''}`">
		<div class="content">{{ todo.content }}</div>
		<div class="buttons">
			<button @click="toggleDone">{{ todo.done ? 'Undo' : 'Done' }}</button>
			<button class="delete" @click="removeTodo">Delete</button>
		</div>
	</div>
</template>

<script>
import { MutationsEnum } from '../types/todo'
  export default {
    name:"TodoItem",
    // eslint-disable-next-line vue/require-prop-types
    props:["item"],
    data(){
      return {
        todo: this.item
      }
    },
    methods:{
      toggleDone(){
        this.$store.commit(MutationsEnum.TOGGLE_TODO, this.todo);
      },
      removeTodo(){
        this.$store.commit(MutationsEnum.REMOVE_TODO, this.todo);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>