

var myFullpage = new fullpage("#fullpage", {
  licenseKey: "B1D9FFF2-3CAB42B2-BC6DF7B0-59C13A34",
  //Navigation
  menu: "#myMenu",
  // lockAnchors: true,
  // anchors:['firstPage', 'secondPage'],
  anchors: ["home", "services", "whyus", "ourwork", "contact"],
  navigation: false,
  navigationPosition: "right",
  navigationTooltips: ["firstSlide", "secondSlide"],
  showActiveTooltip: false,
  parallax: true,
  slidesNavigation: true,
  slidesNavPosition: "bottom",

  //Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: "easeInOutCubic",
  easingcss3: "ease",
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: "#element1, .element2",
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  sectionsColor: ["#ccc", "#fff"],
  paddingTop: "8em",
  paddingBottom: "10px",
  // fixedElements: '#header, #footer',
  responsiveWidth: 1023,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
  dropEffect: false,
  dropEffectOptions: { speed: 2300, color: "#F82F4D", zIndex: 9999 },
  cards: false,
  cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

  //Custom selectors
  sectionSelector: ".section",
  slideSelector: ".slide",

  lazyLoading: true,

  //events
  onLeave: function(achor,index){
		document.getElementById('headPrimary').style.display="";
		document.getElementById('headSecondary').style.display="none";
	
	},
  afterLoad: function (anchor, index) {

    if(index.index==1 || index.index==3) {
			document.getElementById('headPrimary').style.display="none";
			document.getElementById('headSecondary').style.display="";
		}
    // var activeItem;
    // if(index == 0 || index == 1 || index == 2){
    //     activeItem = $('#menu').find('a').first()
    // }else{
    //      activeItem = $('#menu').find('a').last()
    // }
    // activeItem
    //     .addClas3s('active')
    //     // .siblings().removeClass('active');
    // console.log(index)
  },
  afterRender: function () {},
  afterResize: function (width, height) {},
  afterReBuild: function () {},
  afterResponsive: function (isResponsive) {},
  afterSlideLoad: function (section, origin, destination, direction) {},
  onSlideLeave: function (section, origin, destination, direction) {},
});

document.onreadystatechange = function () {
  var state = document.readyState;

  document.getElementById("fullpage").style.visibility = "hidden";
  if (state == "complete") {
    setTimeout(function () {
      document.getElementById("interactive");
      document.getElementById("fullpage").style.visibility = "";
      document.getElementById("load").style.visibility = "hidden";
    }, 500);
  }

  

  
};




(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        event.preventDefault();
        event.stopPropagation();
      }
      else if(form.checkValidity()) {
       
        var full_name = $("#form_full_name").val();
        var company_name = $("#form_companyname").val();
        var email = $("#form_email").val();
        var phone = $("#form_phone").val();
        var message = $("#form_message").val();

        var fd = new FormData(); 
        fd.append( 'full_name', full_name );
        fd.append( 'company_name', company_name );
        fd.append( 'email', email );
        fd.append( 'phone', phone );
        fd.append( 'message', message );
        $.ajax({
          url: 'https://api.founderbyte.com/mail',
          data: fd,
          processData: false,
          contentType: false,
          dataType : 'json',
          type: 'POST',
          success: function(data){
            
         var messageAlert = "alert-primary";
         var messageText =
           "Your message was sent, thank you. We will get back to you soon.";
   
         var alertBox =
           '<div class="alert ' +
           messageAlert +
           ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
           messageText +
           "</div>";
   
         if (messageAlert && messageText) {
           $("#messagebox").find(".messages").html(alertBox);
           form.classList.remove("was-validated");
           $('form :input').val('');
           
          setTimeout(()=> {
            $("#toast").slideUp(2000);
          },2500)
         
         }
          }
        });
        event.preventDefault();
        event.stopPropagation();
      }
    
   
    }, false);
  });
})();
