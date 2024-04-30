$(document).ready(()=>{
    //이미지 변경 함수 호출
    $(".folder-content").hover(function(){
        $(this).find('img').attr("src", "/img/folder2-pixel.png");
        $(this).find('.folder-skill h1').css("color","#fff")
        $(this).find('.folder-skill div').css("color","#fff")
    }, function(){
        $(this).find("img").attr("src", "/img/bg-white_folder.png");
        $(this).find('.folder-skill h1').css("color","#000")
        $(this).find('.folder-skill div').css("color","#000")

    })
    // changeIMG();
});


// function changeIMG(){
//     $(".hover-image").attr("src", "/img/folder2-pixel.png");
// }
 