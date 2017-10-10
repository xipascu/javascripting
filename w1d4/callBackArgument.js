function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(arr[i], i, arr);   // execute callback
      //(element(item in array, index, and collection(whole array))
      //in callback, we have access to all elements
    }
  }
}

function actionWhenFound(valueName, index) {
//this is the found
//it gets called as actionWhenFound

  console.log("Found " + valueName + "at index!" + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);