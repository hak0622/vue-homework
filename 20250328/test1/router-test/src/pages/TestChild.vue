<template>
  <div class="card card-body">
    <h2>TestChild</h2>
    <h3>파라미터 num : {{ num }}</h3>
    <button class="btn btn-lg btn-secondary">닫기</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue'; //composition API 방식의 단일 값 proxy 래핑 객체

export default {
  name: 'TestChild',

  setup() {
    const currentRoute = useRoute(); //현재 라우트 정보

    const num = ref(currentRoute.params.num); //동적 라우트(:num)에 전달된 값 얻어와서 num 변수에 저장

    watchEffect(() => {
      //watchEffect : ref, reactive 변화가 감지되면 수행
      num.value = currentRoute.params.num; //num에 바뀐 파라미터 대입 -> 컴포넌트 다시 렌더링
    });

    const router = useRouter();
    const closeTest = () => {
      router.push('./test'); //test로 라우팅 -> 주소 변경 + 컴포넌트 변경
    };

    return { num, closeTest };
  },
};
</script>
