// Check off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete item
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13) {
        //Get user input for new item
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add it to the list
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
    }
})

$("#ed").click(function(){
    $("input[type='text']").fadeToggle();
});