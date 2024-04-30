$(window).scroll(() => {
    let ws = $(this).scrollTop(); // 현재 스크롤 위치값
    let fixWrap = $('.website-list').offset().top; // 고정박스 위치
    let move = ws - fixWrap; // 이동하는 구간
    let end = $('.lists').width() - $(window).innerWidth(); // 끝지점

    // 이미지 회전을 위한 각도 계산
    let rotation = (move % 360); 

    if (ws > fixWrap && ws < fixWrap + end) {
        $('.lists').css('transform', `translateX(-${move}px)`);
    } else if (ws >= fixWrap + end) {
        $('.lists').css('transform', `translateX(-${end}px)`);
    }

    // 이미지 회전
    $('.menubar .point').css('transform', `rotate(${rotation}deg)`);
});