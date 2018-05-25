$(document).ready(function() {
	
	$('#digital,#resume_doc,.photo_slides,.artwork')  .transition({ display:'none',  });
	
    $('#graphics').click(function() {
         $('#digital')  .transition({ display:'block', });//show this
		 $('#intro,#resume_doc,.photo_slides,.artwork')  .transition({ display:'none' });//hide this
    });
	
	
	$('#overview').click(function() {
         $('#intro').transition({ display:'block'  });//show this
		 $('#digital,#resume_doc,.photo_slides,.artwork').transition({ display:'none' });//hide this
    });
	
	
	
	$('#photos').click(function() {
         $('.photo_slides').transition({ display:'block'  });//show this
		 $('#digital,#intro,#resume_doc,.artwork').transition({ display:'none' });//hide this
    });
	
	$('#art').click(function() {
         $('.artwork').transition({ display:'block'  });//show this
		 $('#digital,#intro,#resume_doc,.photo_slides').transition({ display:'none' });//hide this
    });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});