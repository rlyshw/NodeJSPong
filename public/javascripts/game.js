$( document ).on("mousemove", function(event){
    $( "#leftPaddle" ).css({"top":event.pageY-200});
})