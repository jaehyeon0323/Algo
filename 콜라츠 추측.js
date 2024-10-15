// 콜라츠 추측
// function solution(num)  {
//   while (num !== 1){
//     if(num % 2 === 0){
//       num = num/2;
//     }
//     else{num = (num * 3) + 1;}
//   }
//   return num;
// }

function solution(num) {
  count = 0;

  while (num !== 1) {
    count += 1;
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  }
  return count > 500 ? -1 : count;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
