<template>
  <div class="row mb-3">
    <div class="col">
      <div class="input-group">
        <input
          id="msg"
          type="text"
          class="form-control"
          name="msg"
          placeholder="할일을 여기에 입력!"
          v-model.trim="todo"
          @keyup.enter="addTodoHandler"
        />

        <!-- 추가 버튼 클릭 시 작성된 할 일 내용을 todolist에 추가 -->
        <span class="btn btn-primary input-group-addon" @click="addTodoHandler"
          >추가</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    addTodoHandler() {
      //$emit(이벤트명,페이로드) : 이벤트 발신 메서드 ,방출
      if (this.todo.length >= 3) {
        this.$emit('add-todo', this.todo);
        this.todo = ''; //입력된 내용 삭제
      } else {
        alert('3글자는 적어라');
      }
    },
  },
};
</script>
