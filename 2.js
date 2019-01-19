document.addEventListener("DOMContentLoaded",function(){
	var kick=document.getElementById('nutbam');
	var menuhienra=document.getElementById('mn');
	var hi=document.querySelectorAll('.tim');
	var iconbam=document.querySelector('.iconlen');
	kick.onclick=function(){
		menuhienra.classList.toggle('menuphu');
	
	}
	$(window).scroll(function(event) {
		/* Act on the event */
		console.log('vitri');
		var vitri=$(window).scrollTop();
		console.log(vitri)
		if (vitri>=5235||vitri>=3848) {
			$('img.img-responsive.anhtop9').addClass('anhtdc')
		}
		else if(vitri>=100){
			$('.iconlen').addClass('iconhienra');

		}
		else if(vitri<=100){
			$('.iconlen').removeClass('iconhienra');

		}
		else if (vitri>=246) {
			$('img.img-responsive.anhtop4').addClass('anhtop4dc');
		}
		
		else if (vitri>=149) {
			$('nav.navbar.navbar-default').addClass('menuhienra');

		}
		else if (vitri<=149) {
			$('nav.navbar.navbar-default').removeClass('menuhienra');
		}
		
		
		
		else if (vitri>=436||vitri>=0) {
			$('.anhtop3').addClass('swing');
		}
		





	});



	var sapxepanhs=document.querySelector('#all');
	var sapxepanh1=document.querySelector('#hakodate1')
	console.log(sapxepanhs)
	sapxepanhs.click(function(event) {
		/* Act on the event */

		var danhmuc=$(this).data('anh');
		$('.sapxepanh.rowtop13-2').each(function() {
			if ($(this).hasClass('tatca')) {
				$(this).show(300);
			console.log('bam roi');
			}else{
				$(this).hide(300);
			}
		});
	});
	



	// click len top
	
	$('.iconlen').click(function(event) {
		/* Act on the event */
			$('html, body').animate({scrollTop:0},900);
			return false;
	});
	

},false)