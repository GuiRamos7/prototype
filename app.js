Array.prototype.isEven = function()  {
  let array = this;
  let isNumber = array.some((e) => {
    return typeof e === "number"
  })
  let newArray = [];

  if (isNumber) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] % 2 === 0) {
        newArray.push(array[index]);
      }
      
    }
  }
  return newArray;
}

