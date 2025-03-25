<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem
          v-for="todo in todolist"
          :todoitem="todo"
          @toggle-completed="$emit('toggle-completed', $event)"
          @delete-todo="$emit('delete-todo', $event)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: { TodoListItem },
  //부모로 부터 전달 받은 데이터 수신 + 유효성 검사
  props: {
    //전달 받은 todolist는 배열 형태, 필수 데이터
    todolist: { type: Array, required: true },
  },
  emits: ['toggle-completed'],
};
</script>
