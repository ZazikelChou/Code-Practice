'use strict';
var scrollEventHandler = function() {
  var mainPosition = document.querySelector('main').offsetTop;
  // 添加类名开始动画
  document.documentElement.classList.add('smooth-scroll');
  window.scroll(0, mainPosition - window.innerHeight * 0.08);
  window.removeEventListener('wheel', scrollEventHandler);
  
  // 动画结束后移除类名
  setTimeout(function() {
      document.documentElement.classList.remove('smooth-scroll');
  }, 1000);  // 这里的时间应该和CSS中的动画时间一致
}
window.addEventListener('wheel', scrollEventHandler);


console.clear();

gsap.registerPlugin(ScrollTrigger);

const additionalY = { val: 0 };
let additionalYAnim;
let offset = 0;
const cols = gsap.utils.toArray(".col");

cols.forEach((col, i) => {
  const images = col.childNodes;

  // DUPLICATE IMAGES FOR LOOP
  images.forEach((image) => {
    var clone = image.cloneNode(true);
    col.appendChild(clone);
  });

  // SET ANIMATION
  images.forEach((item) => {
    let columnHeight = item.parentElement.clientHeight;
    let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

    gsap.to(item, {
      y: direction + Number(columnHeight / 2),
      duration: 20,
      repeat: -1,
      ease: "none",
      modifiers: {
        y: gsap.utils.unitize((y) => {
          if (direction == "+=") {
            offset += additionalY.val;
            y = (parseFloat(y) - offset) % (columnHeight * 0.5);
          } else {
            offset += additionalY.val;
            y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
          }

          return y;
        })
      }
    });
  });
});

const imagesScrollerTrigger = ScrollTrigger.create({
  trigger: "section",
  start: "top 50%",
  end: "bottom 50%",
  onUpdate: function (self) {
    const velocity = self.getVelocity();
    if (velocity > 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 2000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
    if (velocity < 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 3000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
  }
});








// const courseContents = document.querySelectorAll('.courseinner');
// const courseBacks = document.querySelectorAll('.courseback');

// courseContents.forEach((courseContent, index) => {
//   courseContent.addEventListener('click', () => {
//     courseContent.classList.toggle('active');
//     courseBacks[index].classList.toggle('active');
//   });
// });

// courseBacks.forEach((courseBack, index) => {
//   courseBack.addEventListener('click', () => {
//     courseBack.classList.toggle('active');
//     courseContents[index].classList.toggle('active');
//   });
// });


// 获取所有的卡片元素
let courseContents = document.getElementsByClassName('coursecontent');

// 遍历每一张卡片
for (let i = 0; i < courseContents.length; i++) {
    let courseContent = courseContents[i];
    let courseInner = courseContent.getElementsByClassName('courseinner')[0];
    let courseBack = courseContent.getElementsByClassName('courseback')[0];
    
    // 为每张卡片添加点击事件
    courseInner.addEventListener('click', function(e) {
        e.stopPropagation();

        // 隐藏所有其他的卡片
        for (let j = 0; j < courseContents.length; j++) {
            if (j !== i) {
                courseContents[j].style.display = 'none';
            }
        }

        // 翻转当前卡片
        this.style.transform = 'rotateY(180deg)';
        courseBack.style.transform = 'rotateY(0deg)';
    });

    // 为每张卡片背面添加点击事件
    courseBack.addEventListener('click', function(e) {
        e.stopPropagation();

        // 翻转当前卡片回到原来的状态
        this.style.transform = 'rotateY(180deg)';
        courseInner.style.transform = 'rotateY(0deg)';

        // 在动画结束后显示所有的卡片
        setTimeout(function() {
            for (let j = 0; j < courseContents.length; j++) {
                courseContents[j].style.display = 'grid';
            }
        }, 300);
    });
};

// // 获取所有的卡片元素
// let teacherContents = document.getElementsByClassName('teachercontent');

// // 遍历每一张卡片
// for (let i = 0; i < teacherContents.length; i++) {
//     let teacherContent = teacherContents[i];
//     let teacherInner = teacherContent.getElementsByClassName('teacherinner')[0];
//     let teacherBack = teacherContent.getElementsByClassName('teacherback')[0];
    
//     // 为每张卡片添加点击事件
//     teacherInner.addEventListener('click', function(e) {
//         e.stopPropagation();

//         // 隐藏所有其他的卡片
//         for (let j = 0; j < teacherContents.length; j++) {
//             if (j !== i) {
//                 teacherContents[j].style.display = 'none';
//             }
//         }

//         // 翻转当前卡片
//         this.style.transform = 'rotateY(180deg)';
//         teacherBack.style.transform = 'rotateY(0deg)';
//     });

//     // 为每张卡片背面添加点击事件
//     teacherBack.addEventListener('click', function(e) {
//         e.stopPropagation();

//         // 翻转当前卡片回到原来的状态
//         this.style.transform = 'rotateY(180deg)';
//         teacherInner.style.transform = 'rotateY(0deg)';

//         // 在动画结束后显示所有的卡片
//         setTimeout(function() {
//             for (let j = 0; j < teacherContents.length; j++) {
//                 teacherContents[j].style.display = 'grid';
//             }
//         }, 300);
//     });
// }




// 初始化标志为 false，表示卡片翻转前不隐藏垂直滚动条
let isCardFlipped = false;

// 获取所有的卡片元素
let teacherContents = document.getElementsByClassName('teachercontent');

// 遍历每一张卡片
for (let i = 0; i < teacherContents.length; i++) {
  let teacherContent = teacherContents[i];
  let teacherInner = teacherContent.getElementsByClassName('teacherinner')[0];
  let teacherBack = teacherContent.getElementsByClassName('teacherback')[0];

  // 为每张卡片添加点击事件
  teacherInner.addEventListener('click', function(e) {
    e.stopPropagation();

    // 隐藏所有其他的卡片
    for (let j = 0; j < teacherContents.length; j++) {
      if (j !== i) {
        teacherContents[j].style.display = 'none';
      }
    }

    // 翻转当前卡片
    this.style.transform = 'rotateY(180deg)';
    teacherBack.style.transform = 'rotateY(0deg)';

    // 设置标志为 true，表示卡片翻转后隐藏垂直滚动条
    isCardFlipped = true;

    // 移除容器的 overflow-y: hidden，显示垂直滚动条，并设置高度为 500px
    teacherCarousel.style.overflowY = 'visible';
    teacherCarousel.style.height = '500px';
  });

  // 为每张卡片背面添加点击事件
  teacherBack.addEventListener('click', function(e) {
    e.stopPropagation();

    // 翻转当前卡片回到原来的状态
    this.style.transform = 'rotateY(180deg)';
    teacherInner.style.transform = 'rotateY(0deg)';

    // 在动画结束后显示所有的卡片，并设置标志为 false，表示卡片翻转后显示垂直滚动条
    setTimeout(function() {
      for (let j = 0; j < teacherContents.length; j++) {
        teacherContents[j].style.display = 'grid';
      }
      isCardFlipped = false;

      // 如果翻转后需要隐藏垂直滚动条，则添加 overflow-y: hidden，并移除高度样式
      if (teacherCarousel.scrollHeight > teacherCarousel.clientHeight) {
        teacherCarousel.style.overflowY = 'hidden';
      }
      teacherCarousel.style.height = '';
    }, 300);
  });
}

// 添加滚动事件监听器
const teacherCarousel = document.querySelector('.teacher-carousel');

teacherCarousel.addEventListener('scroll', function() {
  // 根据标志 isCardFlipped 动态设置 overflow-y 属性
  this.style.overflowY = isCardFlipped ? 'visible' : 'hidden';
});





// 获取所有的卡片元素
let shigotoContents = document.getElementsByClassName('shigotocontent');

// 遍历每一张卡片
for (let i = 0; i < shigotoContents.length; i++) {
  let shigotoContent = shigotoContents[i];
  let shigotoInner = shigotoContent.getElementsByClassName('shigotoinner')[0];
  let shigotoBack = shigotoContent.getElementsByClassName('shigotoback')[0];

  // 为每张卡片添加点击事件
  shigotoInner.addEventListener('click', function (e) {
    e.stopPropagation();

    // 隐藏所有其他的卡片
    for (let j = 0; j < shigotoContents.length; j++) {
      if (j !== i) {
        shigotoContents[j].style.display = 'none';
      }
    }

    // 翻转当前卡片
    this.style.transform = 'rotateY(180deg)';
    shigotoBack.style.transform = 'rotateY(0deg)';

    // 获取 shigotoback 下的所有 <p> 和 <h3> 标签，并为它们添加动画 class
    let cardContentElements = shigotoBack.querySelectorAll('.shigotoback p, .shigotoback h3');
    for (let k = 0; k < cardContentElements.length; k++) {
      cardContentElements[k].classList.add('animate__animated', 'animate__fadeInDown');
    }

    // 修改 .shigoto-carousel 的高度样式为 60vh
    let shigotoCarousel = document.querySelector('.shigoto-carousel');
    shigotoCarousel.style.height = '60vh';
  });

  // 为每张卡片背面添加点击事件
  shigotoBack.addEventListener('click', function (e) {
    e.stopPropagation();

    // 翻转当前卡片回到原来的状态
    this.style.transform = 'rotateY(180deg)';
    shigotoInner.style.transform = 'rotateY(0deg)';

    // 获取 shigotoback 下的所有 <p> 和 <h3> 标签，并移除动画 class
    let cardContentElements = shigotoBack.querySelectorAll('.shigotoback p, .shigotoback h3');
    for (let k = 0; k < cardContentElements.length; k++) {
      cardContentElements[k].classList.remove('animate__animated', 'animate__fadeInDown');
    }

    // 在动画结束后显示所有的卡片
    setTimeout(function () {
      for (let j = 0; j < shigotoContents.length; j++) {
        shigotoContents[j].style.display = 'grid';
      }
    }, 300);

    // 修改 .shigoto-carousel 的高度样式为 30vh（恢复默认高度）
    let shigotoCarousel = document.querySelector('.shigoto-carousel');
    shigotoCarousel.style.height = '30vh';
  });
}



