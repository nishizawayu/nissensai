// スクロールトップボタン
scrollTop('page_top', 300); // 遅すぎるとガクガクになるので注意

function scrollTop(el, duration) {
  const target = document.getElementById(el);
  target.addEventListener('click', function() {
    let currentY = window.pageYOffset; // 現在のスクロール位置を取得
    let step = duration/currentY > 1 ? 10 : 100; // 三項演算子
    let timeStep = duration/currentY * step; // スクロール時間
    let intervalId = setInterval(scrollUp, timeStep);
    // timeStepの間隔でscrollUpを繰り返す。
    // clearItervalのために返り値intervalIdを定義する。

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0) {
          clearInterval(intervalId); // ページ最上部に来たら終了
      } else {
          scrollBy( 0, -step ); // step分上へスクロール
      }
    }
  });
}


// モーダル
let modal_btn = document.querySelector('.next__btn_open');
let modal_move = document.querySelector('.next__btn');

const messege = document.querySelector('.modal');
  // ボタンを押したらスクロールするように設定
  modal_btn.addEventListener('click', function() {
    messege.classList.add('act');
  });

  // modal_move.addEventListener('click',function(){
  //   window.scrollTo({
  //     top: Top.top < 0  ? Top.top*-1 + targetPosition : Top.top + targetPosition,
  //     behavior: 'smooth'
  //   });
  // });

function move(){
  const Top = document.querySelector('body').getBoundingClientRect();
  const targetRect = messege.getBoundingClientRect();
  const targetPosition = targetRect.top;
  console.log(targetRect);
  console.log(targetPosition);  

  window.scrollTo({
    top:Top.top < 0  ? Top.top*-1 + targetPosition : Top.top + targetPosition,
    behavior: 'smooth'
  });
}

modal_move.addEventListener('click',move);

//タブ
const tab_btn1 = document.querySelector('.sec3__btn-second');
const tab_btn2 = document.querySelector('.sec3__btn-first');
const second = document.querySelector('.sec3__second');
const first = document.querySelector('.sec3__first');
const tab_color = document.querySelector('.sec3__flex');

function tab1(){
  second.classList.add('act1');
  first.classList.add('act1');
  second.classList.remove('active');
  first.classList.remove('active');
  tab_color.classList.add('active');
  tab_color.classList.remove('act1');
}

function tab2(){
  second.classList.add('active');
  first.classList.add('active');
  second.classList.remove('act1');
  first.classList.remove('act1');
  tab_color.classList.add('act1');
  tab_color.classList.remove('active');
}



tab_btn1.addEventListener('click',tab1);
tab_btn2.addEventListener('click',tab2);


//スライダー
try{
  let getTranslate;
  let slideWidth;
  let size = window.outerWidth;
  console.log(size);

  if(size<=450){
    let mySwiper = new Swiper('.swiper-container', {
      speed: 3000, 
      slidesPerView: 1.5,
      loop: true,
      freeMode: true,
      freeModeMomentum: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      on: {
        touchEnd: () => {
            getTranslate = mySwiper.getTranslate(); // スライドの現在位置を取得
            slideWidth = document.querySelector('.swiper-slide-active').offsetWidth; //スライドの横幅を取得
            mySwiper.setTranslate(getTranslate - slideWidth); // translateを更新
            mySwiper.setTransition(14000); //transitonを更新
        },
      }
    })
  }

  else{
    let mySwiper = new Swiper('.swiper-container', {
      speed: 3000, 
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      freeModeMomentum: false,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      on: {
        touchEnd: () => {
            getTranslate = mySwiper.getTranslate(); // スライドの現在位置を取得
            slideWidth = document.querySelector('.swiper-slide-active').offsetWidth; //スライドの横幅を取得
            mySwiper.setTranslate(getTranslate - slideWidth); // translateを更新
            mySwiper.setTransition(14000); //transitonを更新
        },
      }
    })
  }
  
} catch(e) {
  console.log('no swiper')
}

const made_by="大森・高野・野中・伊藤・梅原・河野・髙橋・堤・西澤・長谷川・三輪";