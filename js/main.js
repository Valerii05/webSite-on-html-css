jQuery(document).ready(function() {
    jQuery('.header__burger').click(function(){
        jQuery('.menu ,  .header__burger').toggleClass('active');
        jQuery('body').toggleClass('lock');
    });
});