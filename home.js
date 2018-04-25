/*
# ----------------------------------------------------------------------
# HOME: JAVASCRIPT
# ----------------------------------------------------------------------
*/

var base_url = $('#id-hidden-base-url').val();

function newsletter(){
   var newsletter  = $('#id-newsletter').val();
   var agree       = $('#id-newsletter-agree').is(':checked');
   var atpos  = newsletter.indexOf("@");
   var dotpos = newsletter.lastIndexOf(".");
   
   $('#id-row-newsletter').removeClass('has-error');
   
   if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= newsletter.length || newsletter == ''){
      $('#id-row-newsletter').addClass('has-error');
   }else if($('#id-newsletter-agree').is(':checked') === false){
      $('#id-alert-mailchimp').removeClass('hidden');
      $('#id-alert-mailchimp').html('<div class="alert alert-danger">Please check option [Yes, I would like to subscribe Benedict newsletter]</div>');
   }else{
	  var $btn = $('#btn-newsleter').button('loading');
   
      var ajx = $.ajax({
                   type: "POST",
				   url: base_url+"admin/custom/_mailchimp/api/inc/store-address.php",
				   data: {newsletter:newsletter},
				   error: function(jqXHR, textStatus, errorThrown) {
					   
					      }
						  
                   }).done(function(data){
				     
				      if(data == 'Success! Please check your email.'+newsletter){
						 $('#id-alert-mailchimp').removeClass('hidden');
						 $('#id-alert-mailchimp').html('<div class="alert alert-success">'+data+'</div>');
					  }else{
					     $('#id-alert-mailchimp').html('<div class="alert alert-danger">'+data+'</div>').removeClass('hidden');
					  }
					  
					  $('#id-row-newsletter').addClass('hidden');
					  
					  $('#id-newsletter').val('');
					  $btn.button('reset');
					  
				   });
				
   }
   
}


$(document).ready(function(e) {
   $('#btn-newsleter').on('click', function(){
      newsletter();
   });
   
   $('.carousel').carousel({
      interval: 3000
   });
});