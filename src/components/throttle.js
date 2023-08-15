// export const throttle = (fn, delay) => {
//   let previousTime = 0;
//   return function (...args) {
//     const nowTime = new Date().getTime();
//     console.log(nowTime);
//     if (nowTime - previousTime > delay) {
//       fn.apply(this, args);
//       console.log(nowTime);
//       console.log(previousTime);
//       previousTime = nowTime;
//     }
//   };
// };

export function throttle(fn, delay) {
  let previousTime = 0;
  return function (...args) {
    const nowTime = new Date().getTime();

    if (nowTime - previousTime > delay) {
      fn.apply(this, args);
      previousTime = nowTime;
    }
  };
}

// export function throttle(func, delay) {
//   let inThrottle = false;
//   let timeout = null;
//   return function () {
//     let context = this;
//     let args = arguments;
//     if (!inThrottle) {
//       // 輸入之後兩秒內都不回進入這邊
//       func.apply(context, args);
//       inThrottle = true;
//       clearTimeout(timeout);
//       timeout = setTimeout(function () {
//         inThrottle = false;
//       }, delay);
//     }
//   };
// }
