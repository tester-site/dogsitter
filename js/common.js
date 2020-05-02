var Common = {
	init: function() {;
        Common.menu();
        Common.main();
	},

    menu: function() {
      
    },
    main: function() {
        
        setTimeout(function() {
            $('select').styler();
        }, 100)
        
        $('.input_data input').each(function() {
            $(this).datepicker('clearDates');
        });
        
        
        $('.filter_block-m_btn a').on('click',function(e){
            e.preventDefault();
            $('.filter_block-second').addClass('open');
            $('body').addClass('scroll_hidden');
        })
        
        $('.filter_block-second-close').on('click',function(e){
            e.preventDefault();
            $('.filter_block-second').removeClass('open');
            $('body').removeClass('scroll_hidden');
        })
        
        
        $('.btn_mob').on('click',function(e){
            e.preventDefault();
            $('.header_dd').slideToggle();
            $(this).toggleClass('open')
        })
        
        $(window).resize(function(){
   
                $('.header_dd').attr('style', 'none');
                $('.btn_mob').removeClass('open')
       
            profile_block_inHeight()
        })
        
        
        $('.profile_form-email_change').on('click',function(e){
            e.preventDefault();
            
            var a = 'изменить',
//                b = 'сохранить';
                b = 'изменить';
            
                if ($(this).text() != a && $(this).text() != b){
                    $(this).text(a);
//                    $(this).prev('input').attr('readonly','true');
                    $('.profile_form-email_new').slideUp()
                    
                }
                else
                if ($(this).text() == a){
                    $(this).text(b);
//                    $(this).prev('input').removeAttr('readonly');
                    $('.profile_form-email_new').slideDown()
                }
                else
                if ($(this).text() == b){
                    $(this).text(a);
//                    $(this).prev('input').attr('readonly','true');
                    $('.profile_form-email_new').slideDown()
                }

        })
        
        
        $('body').on('blur focusin click keydown keypress keyup','input.error',function(event){
            $(this).removeClass('error').css({'box-shadow':'none'})
        })
        
        
        function profile_block_inHeight() {
            $('.profile_block').css({
                'height': $('.profile_block .profile_block_in').eq($('.profile_top a.active').index()).find('.profile_content').height() + 60
            });
        };
        
        profile_block_inHeight()
        $('.form_next').on('click',function(e){
            console.log($('.profile_top a.active').next().index()+1)
            console.log($('.profile_top a').length)
            if($('.profile_top a.active').next().index()+1 <= $('.profile_top a').length) {
                e.preventDefault();
            }else {
                //ajax? или это будут button b form
            }

            
            if($('.profile_top a.active').length > 0) {
                
                
                
                var triger = false;
                
                $('.profile_block .profile_block_in:eq('+$('.profile_top a.active').index()+') input[required]').each(function(){
                    if($(this).val().length == 0 ) {
                        triger = false;
                        $(this).css({'box-shadow':'0 0 0 1px inset red'})
                        $(this).addClass('error');
                    }else {
                        $('this').removeClass('error');
                    }
                });
                
                
                if($('.profile_block .profile_block_in:eq('+$('.profile_top a.active').index()+') input[required].error').length == 0) {
                    triger = true;
                }
                
                
                if(triger == 1) {
                    $('.profile_top a.active').removeClass('active').next('a').addClass('active');
                    
                    $('.profile_block').css({
                        'margin-left':'-'+ (100 * ($('.profile_top a.active').index() ) )+'%'
                    });
                    profile_block_inHeight()
                    
                    $('html,body').animate({
                            scrollTop: $(".profile_top").offset().top - 35
                    }, 'slow');
                    
                    
                    
                }else {
                    if($(".error").length > 0) {
                        $('html,body').animate({
                            scrollTop: $(".error").first().offset().top - 35
                        }, 'slow');
                    }  
                }
                
                
            }else {
                //ну если чет не так
                $('.profile_top a').first().addClass('active');
            }
            
        })
        
        // MORE BTN
        
        $('.profile_q-more_btn').on('click',function(e){
            e.preventDefault();
            $(this).parents('.profile_q').next('.profile_q-more').slideToggle();
        });
        
        $('.profile_menu-btn div').on('click',function(e){
            $(this).toggleClass('open');
            $(this).parent('.profile_menu-btn').next('.flex').slideToggle()
        });
        
        $('.form_add-email .btn').on('click',function(e){
            e.preventDefault();
            $(this).parents('.form_add-email').find('input').last().after($(this).parents('.form_add-email').find('input').last().clone().val(' '))
            profile_block_inHeight()
        });
        
        
//        $('.form_add-dog .btn').on('click',function(e){
//            e.preventDefault();
//            
//            var a = $('.form_add-dog_main:first-child').clone().addClass('cloned'),
//                aRadio = a.find('[type="radio"]').attr('name');
//            
//            a.find('[type="radio"]')
//             .each(function(){
//                $(this).attr('name', Math.round(aRadio)+1);
//             })
//            
//            a.append('<a href="" class="remove_dog">x</a>');
//            
//            $('.form_add-dog_main').after('<div class="form_add-dog_main">'+$('.form_add-dog_main:first-child').html()+'</div>');
//            
//            
//            a = 0;
//            
//            
//            profile_block_inHeight()
//        });
        $('body').on('click','.remove_dog',function(e){
            e.preventDefault();
            $(this).parent('.form_add-dog_main').remove();
        })
        
        
        $('.select_day input').each(function(){
            if($(this).prop('checked') == 1) {
                $('.select_day-days span').eq($(this).parents('label').index()).addClass('vis')
            }else {
                $('.select_day-days span').eq($(this).parents('label').index()).removeClass('vis')
            }
        })
        if($('.select_day-days span.vis').length > 1) {
            $('.select_day-days span.vis').removeClass('last').last().addClass('last')
        }
        $('.select_day input').on('change',function(){
            if($(this).prop('checked') == 1) {
                $('.select_day-days span').eq($(this).parents('label').index()).addClass('vis')
            }else {
                $('.select_day-days span').eq($(this).parents('label').index()).removeClass('vis')
            }
            if($('.select_day-days span.vis').length > 1) {
                $('.select_day-days span.vis').removeClass('last').last().addClass('last')
            }
        });
        
        
        $('.client_photo_a, .profile_info-slider-nav > div').on('click',function(e){
            e.preventDefault();
            $.fancybox.open([
                {
                    src  : 'images/temp/10.png',
                    opts : {
                        caption : 'First caption',
                        thumb   : '1_s.jpg'
                    }
                },
                {
                    src  : 'images/temp/4.png',
                    opts : {
                        caption : 'Second caption',
                        thumb   : '2_s.jpg'
                    }
                },
                {
                    src  : 'images/temp/5.png',
                    opts : {
                        caption : 'Second caption',
                        thumb   : '2_s.jpg'
                    }
                }
                
            ], {
                loop : false
            });
        })
        
        
        
    },
};

$(function() {
	Common.init();
});