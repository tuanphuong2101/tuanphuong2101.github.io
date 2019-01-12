 $(function(){
	 // var chieucaocuatim= $(window).width();
	 // $('img.img-responsive.anhtop6-1').css({'width':chieucaocuatim});

	 new WOW().init();
	 var hu=new TimelineMax();

	 // function chay(){
	 // 	hu.to($('.quatim.col-xs-3.tim'),0.4,{scale:0.9}); 
	 // 	hu.to($('.quatim.col-xs-3.tim'),0.4,{scale:1});
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
	


	 $('#yokohama1').click(function(event) {
	 	/* Act on the event */
	 	var danhmuc=$(this).data('anh');
	 		console.log(danhmuc)
	 	 	return false;
	 	 	$('.col-md-4.col-lg-4').each(function() {
	 	 		if ($(this).hasClass(danhmuc)) {
	 	 			$(this).show();
	 	 		}
	 	 	});
	 });
	})

 



 