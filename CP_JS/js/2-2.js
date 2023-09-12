var btn = $('.tab-button')

// for(let i=0; i<$('.tab'); i++){
//     console.log("엘렐레");
//     $(btn).eq(i).on('click', function(){
//         console.log("누름!");
//         $(btn).removeClass("orange");
//         $('.tab-content').removeClass("show");
//         $(btn).eq(i).addClass("orange");
//         $('.tab-content').eq(i).addClass("show");
//     })
// }
// for (var i =0; i<3; i++){
//     console.log("안녕");
// }


function 탭열기(i){
    $(btn).removeClass("orange");
    $('.tab-content').removeClass("show");
    $(btn).eq(i).addClass("orange");
    $('.tab-content').eq(i).addClass("show");
}

// $('.list').click(function(e){
//     탭열기(e.target.dataset.id)
//   });


    $('.list').on("click", "li", function () {
        var dataSet = $(this).data("set");
        탭열기(dataSet);
        console.log('dataSet: ', dataSet);
    })