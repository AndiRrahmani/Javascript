$("#btnShow").click(function(){
    $('#hidden').show(5000);
});

$('#btnHide').click(function(){
    $('#hidden').hide();
});

$('#animation').click(function(){
    $(this).animate({
        "left" : "+=50px",
        "width" : "200px",
        "height" : "200px",
        "fontSize": "30px",
        "opacity" : "-=0.01"
    })
});