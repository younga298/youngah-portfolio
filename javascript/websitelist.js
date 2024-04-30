$(window).scroll(()=>{
    let ws =$(this).scrollTop(); //현재 스크롤 위치값
    let fixWrap = $('.website-list').offset().top;//고정박스 위치
    let move = ws -fixWrap;//이동하는 구간
    let end =$('.lists').width()-$(window).innerWidth();//끝지점


    if(ws > fixWrap && ws <fixWrap+end){
        $('.lists').css('transform',`translateX(-${move}px)`);
    }else if(ws >= fixWrap+end){
        $('.lists').css('transform',`translateX(-${end}px`);
    }
})

document.forms[0].id.focus();
document.forms[0].id.select();


setTimeout(()=>{
    $('#website-list').css("display","block"); /**block으로 수정 해야함*/
},5500)

setTimeout(() => {
    $('.website-list')
        .css({
            // transform: 'translateY(0px)',  // 시작 위치
            borderRadius: '80px',
            backgroundColor:"white",
            opacity: '0',  // 시작 투명도를 0

        })
        .animate({
            marginTop : 0,
            borderRadius: '0px',
            opacity: '1',
            width:'80%'

        }, {
            duration: 500,
            easing: 'swing',
            queue: false,  // 애니메이션 큐 사용 안 함
            width:'79.98%'
        })
        // .delay(100).animate({
        //     transform: 'translateY(100px)',  // 원래 위치로 되돌아옴
        // },200);
}, 5500);



 /****
    ***
    button click시 이미지,글자 변경
    ***/ 
   
