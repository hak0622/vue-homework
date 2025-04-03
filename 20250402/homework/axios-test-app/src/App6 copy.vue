<template>
  <div>
    <h2>콘솔을 확인합니다.</h2>
  </div>
</template>

<script setup>
import axios from 'axios';

const requestAPI = async () => {
  const url = '/api/todos/2';
  axios
    .get(url, { timeout: 900 })
    .then((response) => {
      console.log('응답객체:', response);
    })
    .catch((e) => {
      console.log('에러-----');
      console.log(e);
      if (e instanceof Error) console.log(e.message);
      else console.log(e);
    });

  let data = { todo: '윗몸일으키기 3세트', desc: '빠르지 않게' };
  const resp1 = await axios.post(url, data);
  console.log(resp1.data);
};
requestAPI();
</script>
