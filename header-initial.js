$(function(){
	var hLogo = $('.header').outerHeight();
	var hTopo = $('header').outerHeight();
	var ofertas = $('.promo .ofertas-periodicas').length;
	
	$('body').css("padding-top", hTopo );
	
	let position = $(window).scrollTop();
	$(window).scroll(function () {
		if ($(window).scrollTop() >= hLogo) {
			$('header').addClass('scroll');
		} else {
			$('header').removeClass('scroll');
		}
	});
	$(".search-btn").click(function(){
		if($("#searchMobile").hasClass('open')){
			$("#searchMobile").removeClass('open');
			$('.menu-cover').css({'opacity' : '0', 'visibility' : 'hidden'});
		}else{
			$('.menu-cover').css({'opacity' : '.875', 'visibility' : 'visible'});
			$("#searchMobile").addClass('open');
		}
	});
	$('.menu-cover').click(function() {
		if($("#searchMobile").hasClass('open')){
			$("#searchMobile").removeClass('open');
		}
	});
	totalItensCarrinho.registerListener(function(qtd){
		$('.opencart .sup').text(qtd);
		$.post('load-widget.php',{widget:'widgets/float_cart.html'},function(d){
			$('.opencart .float_cart').html(d)
		})
	});
});

$(function fullwindowpopup() {
	$(".rastreio").click(function () {
		var numerosro = document.getElementById("OrderTracking").value;
		var w = 650;
		var h = 650;
		var left = Number(screen.width / 2 - w / 2);
		var tops = Number(screen.height / 3 - h / 3);
		return window.open(
			"https://www.linkcorreios.com.br/" + numerosro,
			"",
			"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
			w +
			", height=" +
			h +
			", top=" +
			tops +
			", left=" +
			left
		);
	});
});
$('.openmenu').click(function() {
	$('.menumobile').css({'left' : '0',	'opacity' : '1', 'visibility' : 'visible'});
	$('.menu-cover').css({'opacity' : '.7', 'visibility' : 'visible'});
});

$('.btn-closemenu, .menu-cover').click(function() {
	$('.menumobile').css({'left' : '-90vw',	'opacity' : '0', 'visibility' : 'hidden'});
	$('.menu-cover').css({'opacity' : '0', 'visibility' : 'hidden'});
	$('body').removeClass('no-scroll');
});

$('.menumobile .cats').click(function(){
	$('.menumobile .cats').children('ul').not($(this).attr('href')).hide();
	$($(this).attr('href')).show('fade');
});

$('.menumobile .cats a[onclick]').click(function(){
	var _th = $(this);

	_th.find('span').toggleClass(function(){
		if($(this).hasClass('toggleplus')){
			return 'toggleminus';
		}
		return 'toggleplus';
	});

	_th.parent('li').children('.sub').slideToggle(400);
});
$('.ofertasmobile').owlCarousel({
	loop:true,
	nav:false,
	items: 1,
	touchDrag: true,
	autoplay: true,
	autoplayTimeout: 2500,
	autoplaySpeed: 500,
})

$(function(){
	var lastScrollPosition;
	var headerHeight;
	$(".openmenu_main").click(function () {
		if($(".searchsecundario").is(":visible")) {
			$('.searchsecundario').fadeOut('fast');
			$('.mega-menu').addClass('open');
			$('.mega-menu').fadeIn('fast');
		}
	});
});
