
function goFunc(wh,e){
    e.preventDefault();
    $.ajax({
        url: 'partial.'+wh+'.php'
     }).done(function(d){
         $('#container').hide().html(d).fadeIn(1000);
         bindEvents();
         $(location).attr('hash',wh);
     });
};

function eventFunc(e){
    goFunc("evenements",e);
};
function contactFunc(e){
    goFunc("contact",e);
};
function liensFunc(e){
    goFunc("liens",e);
};
function indexFunc(e){
    goFunc("index",e);
};
function bindEvents(){
    $('.evenementLink, .contactLink, .liensLink, .indexLink, [natureA]').off()
    $('.evenementLink').on('click',eventFunc);
    $('.contactLink').on('click',contactFunc);
    $('.liensLink').on('click',liensFunc);
    $('.indexLink').on('click',indexFunc);
    $('.mirage').delay(30000).fadeOut(500,function(){
        $('.mirageEnd').show();
    });
    $('[natureA]').each(function(at){
        console.log($(this).attr('naturea'));
        $(this).on('click',function(pp){
            console.log($(pp.target).attr('naturea'));
            $("[nature]").hide();
            $("[nature~="+$(pp.target).attr('naturea')+"]").show();

        });
    });
};

$(document).ready(function(){
    //alert("toto");
    var hash = $(location).attr('hash').replace('#','');
    
    
    if(hash){
        $.ajax({
            url: 'partial.'+hash+'.php'
        }).done(function(d){
             $('#container').hide().html(d).fadeIn(1000);
             bindEvents();
         });
    }else{
        $('#container').fadeIn(1000);
    }


    $('#global').change( function(){
        console.log('resized');
    });
    bindEvents();

    
    
    
    
});




