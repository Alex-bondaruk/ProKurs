$(document).ready(function() {
    //   карусель
    $(".owl-carousel").owlCarousel({
    loop : true,
    responsiveClass : true,
    responsive : {
        0 : {
            items : 1,
            nav : true
        }
    },
    navText : ""
})
    //    параллакс
    $.stellar({
        responsive: true,
        horizontalOffset: 50
    });
    //resize для картинки
    function wResize() {
    $("header").css("min-height", $(window).height());
    };
    wResize();
    $(window).resize(function() {
        wResize()
    });
    //Кнопки табы
    $(".contacts__header .tab_item").not(":first").hide();
    $(".contacts__header .wrapper .tab").click(function() {
        $(".contacts__header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".contacts__header .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
     //Кнопки табы
    $(".discounts__header .tab_item").not(":first").hide();
    $(".discounts__header .wrapper .tab").click(function() {
        $(".discounts__header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".discounts__header .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
     //Кнопки табы
    $(".contacts .tab_item").not(":first").hide();
    $(".contacts__text .tab").click(function() {
        $(".contacts__text .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".contacts .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
      //Кнопки табы
    $("footer .tab_item").not(":first").hide();
    $("footer .wrapper .tab").click(function() {
        $("footer .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $("footer .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    
	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});

$(window).load(function() {
    $("h1").animated("fadeInLeft", "fadeOut");
    $(".discounts__header .wrapper").animated("bounce", "fadeOut");
    $(".proffesional__item").animated("fadeInRight", "fadeOut");
    $(".proffesional__form").animated("bounceIn", "fadeOut");
    $(".intensiv").animated("fadeInDown", "fadeOut");
    $("footer").animated("fadeInLeft", "fadeOut");
});