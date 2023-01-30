export function minBy(array, cb) {
    let minValue = Infinity;
    let minElement;
    for (let i = 0; i < array.length; i++) {
      const value = cb(array[i]);
      if (value < minValue) {
        minValue = value;
        minElement = array[i];
      }
    }
    return minElement;
  }
  
  export function maxBy(array, cb) {
    let maxValue = -Infinity;
    let maxElement;
    for (let i = 0; i < array.length; i++) {
      const value = cb(array[i]);
      if (value > maxValue) {
        maxValue = value;
        maxElement = array[i];
      }
    }
    return maxElement;
  }