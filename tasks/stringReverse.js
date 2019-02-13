//reverse a string
const string = 'abcd';

//1
const reversed = string.split('').reverse().join('');

//2
function reverse(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed += str[str.length - i - 1];
  }

  return reversed;
}