// for nav menu in mobile and tablet view
var bar = document.querySelector('.bar');
var nav = document.querySelector('.main-nav');
var links = document.querySelectorAll('.nav li');
// console.log(links);
bar.addEventListener('click',() => {
    nav.classList.toggle("open-nav");
    // console.log('hello nav');
    links.forEach(link => {
        link.classList.toggle("fade-li");
    } );
});

$(function()
{
    // for section1 form validation
    $('#form1').validate(
        {
            rules:{
                // key:values, here key=name
                people:{
                    required:true,
                    number:true,
                    min: 1,
                    max:6,
                },
                days:{
                    required:true,
                    number:true,
                    min: 1,
                    max:15,
                },
            },
        
            messages:{
                people:{
                    required:'Please Enter Number Of People',
                    number:'Please Enter Number Only',
                },
                days:{
                    required:'Please Enter Number Of Days',
                    number:'Please Enter Number Only',
                },

            },
            // this function refer list of errors
            highlight:function(el)
            {
                // console.log("hi");
                $(el).addClass('animated shake');
                // animated shake from anmate.css we have to clean up after one time
                $(el).one('animationend',function () {
                    $(this).removeClass('animated shake');
                });
            },

            submitHandler: function(form) {
                // console.log('hi there');
            }
        }
    );

});

$(function(){
    //=========== sticky menu (fixed menu) =========
    var menuOffsetTop = $('.menu-header').offset().top;
    $(document).on('scroll',function ()
    {
        var iScrollTop = $(document).scrollTop();
        // console.log(iScrollTop); 
        if (iScrollTop >= menuOffsetTop) 
        {
            //fixed menu
            $('.menu-header').addClass('header-fixed');
        }
        else
        {
            $('.menu-header').removeClass('header-fixed');
        }
    });

    // ======= high lighting the menu items (active class) =======
   
    
    var menuOffsetTop1 = $('.section1').offset().top;
    var menuOffsetTop2 = $('.section2').offset().top;
    var menuOffsetTop3 = $('.section3').offset().top;
    var menuOffsetTop4 = $('.section4').offset().top;
    var menuOffsetTop5 = $('.section5').offset().top;

    
// we used transition in our css so scrolltop give us deffent output but we want accurate scrolling number so wedelay time.
    setTimeout(function(){

            
        menuOffsetTop1 = $('.section1').offset().top;
        menuOffsetTop2 = $('.section2').offset().top;
        menuOffsetTop3 = $('.section3').offset().top;
        menuOffsetTop4 = $('.section4').offset().top;
        menuOffsetTop5 = $('.section5').offset().top;

        // console.log("menuOffsetTop1=" + menuOffsetTop1); 
        // console.log("menuOffsetTop2=" + menuOffsetTop2);
        // console.log("menuOffsetTop3=" + menuOffsetTop3);
        // console.log("menuOffsetTop4=" + menuOffsetTop4);
    },4000);
    
    $(document).on('scroll',function ()
    {
        var iScrollTop = $(document).scrollTop();
        // console.log("iScrollTop" + iScrollTop);
        
        var activeA;
        if (iScrollTop >=  menuOffsetTop1 && iScrollTop < menuOffsetTop2) 
        {
            activeA = $('ul>li:nth-child(1)>a');
        }
        if ((iScrollTop) >=  menuOffsetTop2 && iScrollTop < menuOffsetTop3) 
        {
            activeA = $('ul>li:nth-child(2)>a');
        }
        if ((iScrollTop) >=  menuOffsetTop3 && iScrollTop < menuOffsetTop4) 
        {
            activeA = $('ul>li:nth-child(3)>a');
           
        }
        if ((iScrollTop) >=  menuOffsetTop4 && iScrollTop < menuOffsetTop5) 
        {
            activeA = $('ul>li:nth-child(4)>a');
            
        }
        if ((iScrollTop) >=  menuOffsetTop5) 
        {
            activeA = $('ul>li:nth-child(5)>a');
           
        }

        activeA.addClass('active-a');
        $('ul>li>a').not(activeA).removeClass('active-a');
    });

    // smooth scrolling
    $('[data-to]').on('click',function (e) 
    {
        e.preventDefault();
       var sSection =  $(this).data('to');
       var sectionOffset = $(sSection).offset().top + 7 ;
       $('html,body').animate({scrollTop:sectionOffset},1000);
    });

});

$(function () 
{
    // for contact form
    $('input').focus(function(){
        $(this).parent().addClass('active');
        $('input').focusout(function(){
            if($(this).val() == '')
            {
                $(this).parent().removeClass('active');
            }
            else{
                $(this).parent().addClass('active');
            }
        });
    });


    // for section1 vehical best option
    var iPeople = 0;
    var iDays = 0;
    $('.search-form-mobile .search-btn').on('click',function(e){
        // e.preventDefault();
        // console.log('hello');
        iPeople = parseInt($('#people').val());

        iDays = parseInt($('#days').val());

        $('.vehical').removeClass('active');

        if(iPeople == 1 && iDays<=5){
            $('.moterbike').addClass('active');
            $('.moterbike').css({"opacity":"1"});
        }
        if((iPeople>= 1 && iPeople<=2) && iDays<=10){
            $('.smallCar').addClass('active');
            $('.smallCar').css({"opacity":"1"});
        }
        if((iPeople>= 1 && iPeople<=5) && (iDays>=3 && iDays<=10)){
            $('.peopleMover').addClass('active');
            $('.peopleMover').css({"opacity":"1"});
        }
        if((iPeople>= 2 && iPeople<=6) && (iDays>=2 && iDays<=15)){
            $('.moterhome').addClass('active');
            $('.moterhome').css({"opacity":"1"});
        }
    });

});
$(function () {
    // for section4 form validation(feedback form)
    $('#Feedback-form').validate(
        {
            rules:{
                // key:values, here key=name
                name:{
                    required:true,
                    minlength:3,
                },
                Email:{
                    required:true,
                    email:true,
                },
                Message:{
                    required:true,
                    minlength:10,
                },
            },
            messages:{
                people:{
                    name:'Please Enter Name',
                    minlength:'Please Enter Valid Name',
                },
                Email:{
                    required:'Please Enter Email',
                    minlength:'Please Enter Valid Email',
                },
                Message:{
                    required:'Please Enter Message/Query',
                },

            },
            // this function refer list of errors
            highlight:function(el)
            {
                // console.log("hi");
                $(el).addClass('animated shake');
                // animated shake from anmate.css we have to clean up after one time
                $(el).one('animationend',function () {
                    $(this).removeClass('animated shake');
                });
            },
        }
    ); 
});
$(function () {
     // for section3 form validation(contact form)
     $('#contact-form').validate(
        {
            rules:{
                // key:values, here key=name
                name:{
                    required:true,
                    minlength:3,
                },
                Email:{
                    required:true,
                    email:true,
                },
                Message:{
                    required:true,
                    minlength:10,
                },
            },
            messages:{
                people:{
                    name:'Please Enter Name',
                    minlength:'Please Enter Valid Name',
                },
                Email:{
                    required:'Please Enter Email',
                    minlength:'Please Enter Valid Email',
                },
                Message:{
                    required:'Please Enter Message/Query',
                },

            },
            // this function refer list of errors
            highlight:function(el)
            {
                console.log("hi");
                $(el).addClass('animated shake');
                // animated shake from anmate.css we have to clean up after one time
                $(el).one('animationend',function () {
                    $(this).removeClass('animated shake');
                });
            },
        }
    ); 
});
//for distance count
var distanceService;
var iDistance = 0;

function initMap(){
        distanceService = new google.maps.DistanceMatrixService();
}

$(function(){

    $('.search-btn').on('click',function(e){
        // e.preventDefault();


        var sFrom = $('#from').val();
        var sTo = $('#to').val();
        var iDistance_km = 0;

        if(sFrom=='pickup-location' || sTo=='destination-location')
        {
            iDistance_km = 0;
        }
        else
        {
            distanceService.getDistanceMatrix({
            origins: [sFrom + ' New Zealand'],
            destinations: [sTo  + ' New Zealand'],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.METRIC,
            durationInTraffic: true,
            avoidHighways: false,
            avoidTolls: false
            },
            function (response, status) {
                if (status !== google.maps.DistanceMatrixStatus.OK) {
                    console.log('Error:', status);
                } else {
    
                    //console.log(response);
    
                    iDistance = response.rows["0"].elements["0"].distance.value;
                    iDistance_km = iDistance/1000;

                    $('.vehicals .distance>span').html(iDistance_km);
                    
                }
            });
        }
        $('.vehicals .distance>span').html(iDistance_km);

       

    });

    // for fuel cost
    $('.vehicals .vehical').on('click',function (e) {

        // console.log('hi');
        e.preventDefault();
        var iFuel = $(this).data("fuel");
        // console.log(iFuel);
        var iNewFuel = (iFuel*iDistance/1000)/100;
        // console.log(iNewFuel);
        var iCost = (iNewFuel*1.6);
        // 1.6 cost for liter
        $('.travel-cost>span').html('$'+iCost);
        
    });
});


// ==== for section5 slider=====
$(function(){

    var tl3 = anime.timeline({
      easing: 'linear',
      autoplay:false,
  
    });
  
    tl3
    .add({
      targets: '.destination-booking:nth-child(-n+2)',
      translateX: ['200%',0],
      translateY: ['200%',0],
      opacity: [0,1],
      delay: anime.stagger(1000, {start: 0}),
      duration: 2000,
  
    })
    .add({
      targets: '.destination-booking:nth-child(-n+2)',
      translateX: [0,'-200%'],
      duration: 3000,
    })

    .add({
        targets: '.destination-booking:nth-child(n+3)',
        translateX: [0,'-200%'],
        translateY: ['200%',0],
        delay: anime.stagger(1000, {start: 0}),
        duration: 3000,
      },'-=3000')


    .add({
      targets: '.section5 .viewport',
      translateY: [0,'50vh'],
      duration: 3500,
    },3500);
    

    var offset3 = $('.section5').offset().top;
    var screenHeight = $(window).height();
    var halfScreen = screenHeight/2;
    $(document).on('scroll',function(){
		var scrollTop = $(document).scrollTop();
		var progress = (scrollTop-offset3 + halfScreen)/(screenHeight);
		tl3.seek(tl3.duration * (progress));
		

	});
});

