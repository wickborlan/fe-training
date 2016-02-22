
jQuery(function(){
	//has sub menu?
	jQuery('ul#main-menu li').each(function() {
		if(jQuery('.submenu',this).length) {
			jQuery('> a',this).addClass('toggle-subnav');
			jQuery('<i class="fa fa-angle-down"></i>').appendTo(jQuery('> a',this));
		}
	});	
	
	//toggling sub menu
	jQuery('a.toggle-subnav').on('click', function(e){
		e.preventDefault();
		jQuery('ul#main-menu li').not(jQuery(this).parents('li')).removeClass('drop');
		jQuery(this).closest('li').toggleClass('drop');
	});

	jQuery("#ctprop-result").tabs();
	   
});

