/* ---- particles.js config ---- */



/**
 * typing
 * ***/ 
var typingBool = false;
var typingIdx = 0;
var typingTxt = $(".typing-txt").text();
typingTxt = typingTxt.split("");
var tyInt;

function typing() {
  if (typingIdx < typingTxt.length) {
    $(".typing").append(typingTxt[typingIdx]);
    typingIdx++;
  } else {
    clearInterval(tyInt);
    // typingIdx = 0;
    // $(".typing").html("");
    // setTimeout(function() {
    //   tyInt = setInterval(typing, 130); // 3초 후 타이핑 효과 다시 실행
    // }, 800);
  }
}

if (typingBool == false) {
  typingBool = true;
  tyInt = setInterval(typing, 100);
}



/**로딩 2-3초 후 오퍼시티 적용**/
window.addEventListener('load', function() {
    const pageTransition = document.querySelector('#test');
    pageTransition.style.display = 'block';
  
    setTimeout(function() {
      pageTransition.style.opacity = '0'; /*0으로 변경해야함**/
    //   pageTransition.style.transform = 'translateY(50px)';
    //   pageTransition.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
  
      setTimeout(function() {
        pageTransition.style.display = 'none';/*none 으로 수정 해야함**/
      }, 700);
    }, 5500);
  });



