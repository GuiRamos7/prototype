Array.prototype.isEven = function()  {
  let array = this;
  let newArray = [];
  let isNumber = array.some((e) => {
    return typeof e === "number"
  })

  if (isNumber) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] % 2 === 0) {
        newArray.push(array[index]);
      }
      
    }
  }
  return newArray;
}

Array.prototype.isOdd = function() {
  let array = this;
  let newArray = [];
  let isNumber = array.some((e) => {
    return typeof e === "number"
  })

  if (isNumber) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] % 2 !== 0) {
        newArray.push(array[index]);
      }
      
    }
  }

  return newArray;
}

Array.prototype.bigger = function () {
  let array = this;
  let biggerNumber = 0;
  let isNumber = array.some((e) => {
    return typeof e === "number"
  });

  if (isNumber) {
    for (let index = 0; index < array.length; index++) {
      if (index === 0) {
        biggerNumber = array[index];
      }else {
        if (array[index] > biggerNumber) {
          biggerNumber = array[index]
        }
      }
      
    }
  }

  console.log(biggerNumber);
  return biggerNumber;

}

Array.prototype.smaller = function() {
  let array = this;
  let smallerNumber = 0;
  let isNumber = array.some((e) => {
    return typeof e === "number"
  });

  if (isNumber) {
    for (let index = 0; index < array.length; index++) {
      if (index === 0) {
        smallerNumber = array[index];
      }else {
        if (array[index] < smallerNumber) {
          smallerNumber = array[index]
        }
      }
      
    }
  }

  console.log(smallerNumber);
  return smallerNumber;
}

