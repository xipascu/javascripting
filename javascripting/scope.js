var a = 1, b = 2, c = 3; //creating global var
(function firstFunct(){
  var b = 5, c = 6;
  (function secondFunct(){
    var b = 8;
    console.log("a: "+a+", b: "+b+", c: "+c);
    (function thirdFunct(){
      var a = 7, c = 9;
      (function fourthFunct(){
        var a = 1, c = 8;
      })();
    })();
  })();
})();
