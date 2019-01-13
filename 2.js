document.addEventListener("DOMContentLoaded",function(){
	var kick=document.getElementById('nutbam');
	var menuhienra=document.getElementById('mn');
	var hi=document.querySelectorAll('.tim');
	kick.onclick=function(){
		console.log('kichroi')
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
		else if (vitri>=149) {
			$('nav.navbar.navbar-default').addClass('menuhienra');

		}
		else if (vitri<=149) {
			$('nav.navbar.navbar-default').removeClass('menuhienra');
		}
		else if (vitri>=1096||vitri>=191.19) {
			$('img.img-responsive.anhtop4').addClass('anhtop4dc');
		}
		else if (vitri>=436||vitri>=0) {
			$('.anhtop3').addClass('swing');
		}

	});
},false)