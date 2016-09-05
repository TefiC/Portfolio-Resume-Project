/*
*
JQUERY EFFECTS
*
*/
/*
HEADER
*/
/*Make Skills change background-color on mouse hover*/
$('.skill').hover(
    function() {
        $(this).addClass("skill-hover-background");
    },
    function() {
        $(this).removeClass("skill-hover-background");
    }
);


/*Contact info*/

/*Make Contact Type change background-color on mouse hover*/
$(".contactType").hover(
    function() {
        $(this).addClass("contactType-hover");
    },
    function() {
        $(this).removeClass("contactType-hover");
    }
);



/*Make Contact Data change background-color on mouse hover*/
$(".contactData").hover(
    function() {
        $(this).addClass("contactData-hover");
    },
    function() {
        $(this).removeClass("contactData-hover");
    }
);

/*Change Buttons background color on mouse hover*/
$(".button-text").hover(
    function() {
        $(this).addClass("button-hover");
    },
    function() {
        $(this).removeClass("button-hover");
    }
);


/*
SECTIONS
*/

/*Change titles color*/

/*Make Sections Titles change color on mouse hover*/
$(".section-title").hover(
    function() {
        $(this).addClass("section-title-hover");
    },
    function() {
        $(this).removeClass("section-title-hover");
    }
);


/*Make images round on mouse hover*/
$(".project-image").hover(
    function() {
        $(this).addClass("project-image-hover");
    },
    function() {
        $(this).removeClass("project-image-hover");
    }
);


/*Change entry's background color on mouse hover*/
$(".entry").hover(
    function() {
        $(this).addClass("entry-hover");
    },
    function() {
        $(this).removeClass("entry-hover");
    }
);


/*SCROLL ANIMATION*/

/*Arrows: When clicking on the arrow, the screen will scroll to the top */
$(".arrow").click(function() {

    $("html,body").animate({
        scrollTop: 0,
    });
});

/*Scroll projects section smoothly into view when the corresponding button is clicked*/

/*Work*/
$(".work-button").click(function() {

    var offset = $("#workExperience").offset();

    $("html, body").animate({
        scrollTop: offset.top - 10, //-10 so that the screen won't be exactly on top of the object
    });

});

/*Education*/
$(".education-button").click(function() {

    var offset = $("#education").offset();

    $("html, body").animate({
        scrollTop: offset.top - 10, //-10 so that the screen won't be exactly on top of the object
    });

});

/*Projects*/
$(".projects-button").click(function() {

    var offset = $("#projects").offset();

    $("html, body").animate({
        scrollTop: offset.top - 10, //-10 so that the screen won't be exactly on top of the object
    });

});

/*Map*/
$(".map-button").click(function() {

    var offset = $("#mapDiv").offset(); //

    $("html, body").animate({
        scrollTop: offset.top - 10, //-10 so that the screen won't be exactly on top of the object
    });

});
