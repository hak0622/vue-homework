/* fetch(경로) 
- 비동기로 응답(response) 가져오기
- 결과로 Promise 반환
- 무조건 성공 (resolve() 실행 ->then()으로만 처리 가능)
  -> response.ok 등을 이용해서 응답 상태 코드 확인
*/

async function main() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // response.json(); //비동기
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

main();
