function myvalidation(){
				var name = document.forms ['contactForm']['name'].value;
				var email = document.forms ['contactForm']['email'].value;
				var message = document.forms ['contactForm']['message'].value;
				
				var error =[];
				if( name == '' || name.length<3 ){
					error[0]='Name Must be at least 3 Letters';
					
					document.getElementById('name-error').innerHTML = error[0];
				}else{
					document.getElementById('name-error').innerHTML ='';
				}
				if( email == '' || email.length<10 ){
					error[1]='Please Insert a Valid Email';
					
					document.getElementById('email-error').innerHTML = error[1];
				}else{
					document.getElementById('email-error').innerHTML ='';
				}
				
				if( message == '' || message.length<50 ){
					error[3]='Message should be in 50 letters';
					
					document.getElementById('message-error').innerHTML = error[3];
				}else{
					document.getElementById('message-error').innerHTML ='';
				}
				
				if(error.length>0){
					return false;
				}
			}
		
		









$(document).ready(function(){
	/* ==== Upper Button Scroll Start ===== */
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		if(x >1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
		
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop: 0},2000);
	});
});