let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function onload() {
   for (let i = 0; i < arr.length; i++) {
      let num = document.createTextNode(arr[i]);
      let elem = document.createElement("div");

      elem.setAttribute('id', arr[i]);
      elem.setAttribute('class', 'cell-item cell-' + arr[i]);
      elem.appendChild(num);
      document.getElementById('mainDiv').appendChild(elem);
   }
}

function shuffle() {
   for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];

      arr[i] = arr[j];
      arr[j] = temp;

   }

   updateCards();
   onload();
}

function sort() {
   arr.sort((a, b) => a-b);

   updateCards();
   onload();
}

function updateCards () {
   for (let i = 0; i < arr.length; i++) {
      document.getElementById(arr[i]).remove();
   }
}

onload();