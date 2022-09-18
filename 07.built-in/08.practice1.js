/*
    @ Practice 1
*/

const text = 'Hello!';

for (let index = 0; index < text.length; index++) {
  console.log(text[index]);
}

const userIds = 'userId1, userId2, userId3, userId4, userId5';
const arrayId = userIds.replaceAll(' ', '').split(','); // [ 'userId1', ' userId2', ' userId3', ' userId4', ' userId5' ]
console.log(arrayId);

setInterval(() => {
  const nowDate = new Date();
  console.log(nowDate.toUTCString().replace('GMT', '').trim());
}, 1000);
