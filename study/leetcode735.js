var asteroidCollision = function (asteroids) {
  const len = asteroids.length;
  const stack = [];
  outer: for (let i = 0; i < len; i++) {
    if (stack.length > 0) {
      while (asteroids[i] < 0 && stack[stack.length - 1] > 0) {
        let compare = Math.abs(asteroids[i]);
        if (stack[stack.length - 1] < compare) {
          stack.pop();
        } else if (stack[stack.length - 1] === compare) {
          stack.pop();
          continue outer;
        } else {
          continue outer;
        }
      }
    }
    stack.push(asteroids[i]);
  }
  return stack;
};
