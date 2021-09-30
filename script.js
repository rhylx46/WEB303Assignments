// $(function(){
//     $.getJSON("team.json").done(function(data){
//         $.each(data.teammembers, function(index, value){
//             $('#team').append(`<h3>${value.name}</h3>
//                              <h4>${value.title}</h4>
//                              <p>${value.bio}</p>`);
//         });
//     });
// });

$(function(){
    $.ajax({
        url: 'team.json',
        type: "GET",
        dataType:"json",
        async: false,
        
        beforeSend:function() {
            $('#team').append('<p class="load">Loading...</p>');
            setTimeout(function(){$('.load').hide();},3000);
        },
        timeout: 5000,
        error: function(jqXHR, exception){
            if (jqXHR.status === 5000) {
                alert("Error");
            }
        },

        success:(function(data){            
            $.each(data.teammembers, function(index, value){                
                $('#team').append(`<h3>${value.name}</h3>
                                  <h4>${value.title}</h4>
                                  <p>${value.bio}</p>`);
            });
        })
    });

});