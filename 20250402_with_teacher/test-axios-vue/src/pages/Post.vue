<template>
  <div>
    <h1>post(할 일 추가)</h1>
    <hr />
    <h3>할 일 추가</h3>

    <!-- form태그 내부에서 submit 이벤트가 발생하면 form태그의 기본 이벤트를 막고(prevent) addTodo를 호출 -->
    <form @submit.prevent="addTodo">
      <div>할 일 : <input type="text" v-model="state.todo.todo" /></div>
      <div>설명 : <input type="text" v-model="state.todo.desc" /></div>
      <button type="submit">추가</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'; //라우터 객체 (인스턴스)

const state = reactive({
  todo: { todo: '', desc: '', done: false },
});

const router = useRouter();

const addTodo = async () => {
  const url = '/api/todos';

  // axios.post(url,data객체)
  const response = await axios.post(url, state.todo);
  const result = response.data; //응답 확인
  const id = result.id;

  router.push(`/get/${id}`); //get/:id 페이지로 라우팅
};
</script>
