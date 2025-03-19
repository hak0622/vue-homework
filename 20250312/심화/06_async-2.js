const pizza = new Promise((resolve, reject) => {
  //let likePizza = true;
  let likePizza = false;

  if (likePizza) {
    //성공
    resolve('피자 주문 했습니다.');
  } else {
    //실패
    reject('피자를 주문하지 않습니다.');
  }
});

pizza
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
