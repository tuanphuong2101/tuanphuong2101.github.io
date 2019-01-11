 $(function(){
	 // var chieucaocuatim= $(window).width();
	 // $('img.img-responsive.anhtop6-1').css({'width':chieucaocuatim});

	 new WOW().init();
	 var hu=new TimelineMax();

	 // function chay(){
	 // 	hu.to($('.quatim'),0.4,{scale:0.9}); 
	 // 	hu.to($('.quatim'),0.4,{scale:1});
	 // 	chay();
	 // }
	 // chay();

	 // hu.to($('.tenck'),1,{x:-150});
	 // hu.to($('.tenvk'),1,{x:-135});
	 // 
	 // 
	 // TweenMax.staggerTo($('.tenck'),1,{x:-110,opacity:1},1);
	 // TweenMax.staggerTo($('.tenvk'),1,{x:-100,opacity:1},1)

	 // codecho responsive
	 
	 var manhinhdienthoai=$(window).width();
	 if (manhinhdienthoai<=400) {
	 	$('.col-lg-2.gachgiua.col-lg-push-1').addClass('xoagach');
	 }
	})

 



 