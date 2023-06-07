//cssで.image-list内のli要素を一律非表示にしてしまっているので最初の要素だけ.active-imgを付与する処理
//DomContentLoadedとはHTMLファイルが読み込まれてブラウザが表示させたときを意味します。
document.addEventListener('DOMContentLoaded', () => {
  imageList[0].classList.add('active-img');
});

//表示させる画像の順番を管理する値
let countNum = 0;
let arr = [`beach`,`flower`,`sky`];
const imageList = document.querySelectorAll('.img-list li')
for(
  let countNum = 0;countNum<imageList.length;countNum++
){
  const text = `<img src="img/${arr[countNum]}.jpg">`;
  imageList[countNum].innerHTML = text;
};



//ボタンを押したらli要素の表示の切り替えを実現する処理
const btn = document.querySelector('button').addEventListener('click', () => {
  if (countNum === imageList.length - 1) {
    countNum = 0;
    imageList[countNum].classList.toggle('active-img');
    imageList[imageList.length - 1].classList.toggle('active-img');
  } else {
    countNum++;
    imageList[countNum].classList.toggle('active-img');
    imageList[countNum - 1].classList.toggle('active-img');
  }
});


// const array = document.querySelectorAll('li');
// // let array2 = [0,1,2,3,4];
// for(let i = 0; i<array.length;i++){
//     const text = `テキスト（${i + 1}）`; 
//     array[i].innerHTML = text; 
// }