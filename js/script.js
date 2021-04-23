$('.feat').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    items:1,
    responsive:{

        320:{
           items:1
        },
        768:{
            items:3
        },
        994:{
            items:3
        }
    }
});
$('.first').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    autoplay:true,
    items:1,
    responsive:{

        320:{
           items:1
        },
        768:{
            items:2
        },
        994:{
            items:3
        }
    }
});
$(document).ready(function(){
    $("#2020").click(function(){
        $("#mgg").show();
    });
});
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }