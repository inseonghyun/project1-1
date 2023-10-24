$('.main_fade li').hide().filter(':first').show();
setInterval(slideshow, 3000);
function slideshow() {
    $('.main_fade li:first-child').fadeOut('slow');
    $('.main_fade li:first-child').next().fadeIn('slow');
    $('.main_fade li:first-child').appendTo('.main_fade');
}

$(document).ready(function () {
    var $slides = $('.main_fade li'); // 슬라이드 이미지들
    var $buttons = $('.mainbanner .btn_list li a'); // 페이지 버튼

    // 초기 슬라이드를 첫 번째 슬라이드로 설정
    var currentSlide = 0;
    showSlide(currentSlide);

    // 페이지 버튼 클릭 이벤트 처리
    $buttons.click(function () {
        var index = $buttons.index(this);
        showSlide(index);
    });

    // 슬라이드 표시 함수
    function showSlide(index) {
        // 모든 슬라이드 숨기기
        $slides.hide();
        // 선택한 슬라이드 표시
        $slides.eq(index).show();
        // 페이지 버튼 활성화 상태 업데이트
        $buttons.css('background', 'rgba(255, 255, 255, 0.4');
        $buttons.eq(index).css('background', '#fff');
        // 현재 슬라이드 업데이트
        currentSlide = index;
    }
}); 


