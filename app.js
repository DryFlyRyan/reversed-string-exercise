var reverseInPlace = function (string) {
  var reversedString = string.split('').reverse().join('');
  console.log(reversedString);
};

var reverseByLoop = function (string) {
  var string = string.split('');
  var result = '';
  for (var i = string.length - 1; i >= 0; i--) {
    result += string[i]
  }
  console.log(result);
}

var reverseByUnshift = function (string) {
  var string = string.split('');
  var result = [];
  for (var i = 0; i < string.length; i++) {
    result.unshift(string[i]);
  }
  console.log(result.join(''));
}


reverseInPlace("Magnificent")
reverseByLoop("Magnificent")
reverseByUnshift("Magnificent")
