$(document).ready(()=>{
    //이미지 변경 함수 호출
    const skill_black =["img/html-blackbg.png","img/css-black.png","img/js-blackbg.png","img/psfigma-blackbg.png","img/ai-blackbg.png"]
    const skill_white =["img/html-whitebg.png","img/css-white.png","img/js-whitebg.png","img/psfigma-whitebg.png","img/ai-whitebg.png"]

    $(".folder-content").hover(function(){
        let idx=$(this).parent().index();
  
        $(this).find('.folder-img').attr("src", "img/folder2-pixel.png");
        $(this).find('.skillimg').attr("src", skill_black[idx]);
        $(this).find('.folder-skill h1').css("color","#fff")
        $(this).find('.folder-skill div').css("color","#fff")
    }, function(){
        let idx=$(this).parent().index();

        $(this).find(".folder-img").attr("src", "img/bg-white_folder.png");
        $(this).find(".skillimg").attr("src", skill_white[idx]);
        $(this).find('.folder-skill h1').css("color","#000")
        $(this).find('.folder-skill div').css("color","#000")

    })
    // changeIMG();
});


// function changeIMG(){
//     $(".hover-image").attr("src", "/img/folder2-pixel.png");
// }
 