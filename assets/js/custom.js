$(function(){
    imagesProgress(); //이미지 로딩 소스
    counter();            
});

var dot = $("#dot > ul > li");
var cont = $("#contents > section");
var menuBtn = $(".menu-button.wrap");

dot.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
});

//스크롤시 메뉴버튼 색변화
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= cont.eq(0).offset().top){
        menuBtn.removeClass("show");
    }
    if(wScroll >= cont.eq(1).offset().top -600){
        menuBtn.removeClass("show");
        menuBtn.eq(0).addClass("show");
    }
    if(wScroll >= cont.eq(2).offset().top -600){
        menuBtn.removeClass("show");
    }
    if(wScroll >= cont.eq(3).offset().top -600){
        menuBtn.removeClass("show");
        menuBtn.eq(0).addClass("show");
    }
    if(wScroll >= cont.eq(4).offset().top -600){
        menuBtn.removeClass("show");
    }
});

// 메인 버튼 클릭 시
$('a[href^="#"]').on("click",function(e){
    e.preventDefault();
    var target = $( $(this).attr("href") );

    if(target.length){
$("html, body").animate({ scrollTop: target.offset().top },600,"easeInOutExpo");
    }
});


function counter() {
    if ($('.about .count').size()) {
        $c = $('.about .count');

        $c.each(function () {
            var $this = $(this);
            $this.data('target', parseInt($this.html()));
            $this.data('counted', false);
            $this.html('0');
        });

        $(window).on('scroll', function () {
            var speed = 5000;

            $c.each(function (i) {
                var $t = $(this);
                if (!$t.data('counted') && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                    $t.data('counted', true);

                    $t.animate({
                        dummy: 1
                    }, {
                        duration: speed,
                        step: function (now) {
                            var $this = $(this);
                            var val = Math.round($this.data('target') * now);
                            $this.html(val);
                        },
                        easing: 'easeInOutQuart'
                    });

                    // easy pie
                    $('.pie').easyPieChart({
                        barColor: '#030303',
                        trackColor: '#030303',
                        scaleColor: '#030303',
                        scaleLength: 5,
                        lineWidth: 1,
                        size: 200,
                        lineCap: 'round',
                        animate: { duration: speed, enabled: true }
                    });
                }
            });
        }).triggerHandler('scroll');
    }
}

//imageProgress
function imagesProgress(){
    var $container = $("#progress"),
        $progressBar = $container.find(".bubble"),
        $progressText = $container.find(".progress-text"),
        imgLoad = imagesLoaded("body"),	
        imgTotal = imgLoad.images.length,	
        imgLoaded = 0,										
        current = 0,							
        progressTimer = setInterval(updateProgress, 1000 / 60);

    imgLoad.on("progress", function(){
        imgLoaded++;
    });

    function updateProgress(){
        var target = ( imgLoaded / imgTotal) * 100;

        current += ( target - current) * 0.1;
        $progressText.text( Math.floor(current) + '%' );

        if(current >= 100){
            clearInterval(progressTimer);
            //$container.addClass("progress-complete");
            $progressBar.add($progressText)
                .delay(500)
                .animate({opacity: 0},100,function(){
                    $container.animate({top: '-110%'},1000,'easeInOutQuint');
                });
            $("body").addClass("active");
        }
        if(current > 99.98){
            current = 100;
        }
    }	
}

//modal
    $(".ani1").click(function(){
    $("#modal.modal1").removeAttr("class").addClass("one").addClass("modal1");
});
    $(".close").click(function(){
    $("#modal.modal1").addClass("out");
});
    $(".ani2").click(function(){
    $("#modal.modal2").removeAttr("class").addClass("one").addClass("modal2");
});
    $(".close").click(function(){
    $("#modal.modal2").addClass("out");
});
    $(".ani3").click(function(){
    $("#modal.modal3").removeAttr("class").addClass("one").addClass("modal3");
});
    $(".close").click(function(){
    $("#modal.modal3").addClass("out");
});
    $(".ani4").click(function(){
    $("#modal.modal4").removeAttr("class").addClass("one").addClass("modal4");
});
    $(".close").click(function(){
    $("#modal.modal4").addClass("out");
});
    $(".ani5").click(function(){
    $("#modal.modal5").removeAttr("class").addClass("one").addClass("modal5");
});
    $(".close").click(function(){
    $("#modal.modal5").addClass("out");
});

//스크롤 시 애니메이션
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if(wScroll >= $(".sec2 .strapline").offset().top -$(window).height()/1.5){
        $(".sec2 .strapline").addClass("show");
    }else {
        $(".sec2 .strapline").removeClass("show");
    }
    if(wScroll >= $(".sec2 h3").offset().top -$(window).height()/1.5){
        $(".sec2 h3").addClass("show");
    }else {
        $(".sec2 h3").removeClass("show");
    }
    if(wScroll >= $(".sec2 .about_photo img").offset().top -$(window).height()/1.5){
        $(".sec2 .about_photo img").addClass("show");
    }else {
        $(".sec2 .about_photo img").removeClass("show");
    }
    if(wScroll >= $(".sec2 .about_name").offset().top -$(window).height()/1.3){
        $(".sec2 .about_name").addClass("show");
    }else {
        $(".sec2 .about_name").removeClass("show");
    }
    if(wScroll >= $(".sec2 .about_role").offset().top -$(window).height()/1.2){
        $(".sec2 .about_role").addClass("show");
    }else {
        $(".sec2 .about_role").removeClass("show");
    }
    
    //section4 animation
    if(wScroll >= $(".sec4 .strapline").offset().top -$(window).height()/1){
        $(".sec4 .strapline").addClass("show");
    }else {
        $(".sec4 .strapline").removeClass("show");
    }
    if(wScroll >= $(".sec4 h3").offset().top -$(window).height()/1){
        $(".sec4 h3").addClass("show");
    }else {
        $(".sec4 h3").removeClass("show");
    }
    if(wScroll >= $(".sec4 .ani_wrap").offset().top -$(window).height()/1){
        $(".sec4 .ani_wrap").addClass("show");
    }else {
        $(".sec4 .ani_wrap").removeClass("show");
    }
    
    //section5 animation
    if(wScroll >= $(".sec5 .strapline").offset().top -$(window).height()/1){
        $(".sec5 .strapline").addClass("show");
    }else {
        $(".sec5 .strapline").removeClass("show");
    }
    if(wScroll >= $(".sec5 h3").offset().top -$(window).height()/1){
        $(".sec5 h3").addClass("show");
    }else {
        $(".sec5 h3").removeClass("show");
    }
    if(wScroll >= $(".sec5 .namecard .sp1").offset().top -$(window).height()/1){
        $(".sec5 .namecard .sp1").addClass("show");
    }else {
        $(".sec5 .namecard .sp1").removeClass("show");
    }
    if(wScroll >= $(".sec5 .namecard .card").offset().top -$(window).height()/1){
        $(".sec5 .namecard .card").addClass("show");
    }else {
        $(".sec5 .namecard .card").removeClass("show");
    }
    if(wScroll >= $(".sec5 .namecard .sp2").offset().top -$(window).height()/1){
        $(".sec5 .namecard .sp2").addClass("show");
    }else {
        $(".sec5 .namecard .sp2").removeClass("show");
    }
});

$(function(){
	//햄버거 메뉴 
	var menuBtn = $(".menu-wrapper");

	$(".icon-wrap").click(function(){
		$("body").toggleClass("scroll");
	   $(".icon").toggleClass("animation");
	   $(".overlay").toggleClass("open");
	   $(".box-wrap").toggleClass("show");
	   $(".menu").toggleClass("show");
		menuBtn.find(".menu-button.wrap").toggleClass("show3");
	});

	$(".menu-right > a").click(function(){
		$(".icon").removeClass("animation");
	   $(".box-wrap").removeClass("show");
	   $(".menu").removeClass("show");
	   $("body").removeClass("scroll");
        menuBtn.find(".menu-button.wrap").removeClass("show3");
	});
});

// section1 - 배경 애니메이션
const bg = document.getElementById("bg");
const totalStars = 100;

for (let i = 0; i < totalStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDelay = `${Math.random() * 5}s`;

    bg.appendChild(star);

    // 잔잔한 감성 애니메이션
    gsap.to(star, {
        x: "+=" + (Math.random() * 30 - 15),  // ±15px 잔잔한 흔들림
        y: "+=" + (Math.random() * 30 - 15),
        opacity: Math.random() * 0.7 + 0.2,
        duration: Math.random() * 6 + 4,     // 4~10초 → 천천히 움직임
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
}


/* ===========================
   INTRO ANIMATION (jQuery)
=========================== */

$(function(){

    // 1. 배경 채우기
    $(".intro-bg").animate({
        height: "100%"
    }, 1000, "easeOutQuad", function(){

        // 2. 프로필 등장 (탄성 효과)
        $(".intro-profile")
            .delay(200)
            .animate({ 
                opacity: 1 
            }, 100);

        $(".intro-profile").delay(200).animate({
            transformScale: 1
        }, {
            duration: 800,
            step: function(now){
                $(this).css("transform", "translate(-50%, -50%) scale("+now+")");
            },
            easing: "easeOutElastic"
        });

        // 3. 버튼 등장
        $(".intro-btn").delay(600).animate({
            opacity: 1
        }, 100);

        $(".intro-btn").delay(600).animate({
            transformScale: 1
        }, {
            duration: 200,
            step: function(now){
                $(this).css("transform", "translate(-50%, -50%) scale("+now+")");
            },
            easing: "easeOutBack"
        });

    });

    // 4. 버튼 클릭 시 인트로 제거 → 메인 진입
    $(".intro-btn").click(function(){
        $("#intro").fadeOut(600);
        $("body").addClass("active"); // 기존 애니메이션 자연스럽게 실행
    });

});

/* ======================================
   GSAP – Section 3 Animation
====================================== */

gsap.registerPlugin(ScrollTrigger);

$(".project").each(function () {

    let container = $(this);
    let img = container.find(".project-img img");
    let text = container.find(".project-text");

    gsap.to(img, {
        scrollTrigger: {
            trigger: container[0],
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
    });

    gsap.to(text, {
        scrollTrigger: {
            trigger: container[0],
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power2.out",
        delay: 0.15
    });
});













