String.prototype.my_reverse = function (a) {
  return a.split('').reverse().join('')
}

var obj = new String()
var ans = obj.my_reverse('abcdefg')
console.log(ans)
