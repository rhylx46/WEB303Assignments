$(function(){
  $.getJSON("yurucamp.json").done(function(data){
    let $tableBody = $('<tbody id="test"></tbody>');
    let a1 = [];
    let a2 = [];    
    $.each(data.characters, function(index, value){     
      let $row = $('<tr></tr>');
      $row.append($('<td class="name"></td>').text(value.name));
      $row.append($('<td></td>').text(value.gender));
      $row.append($('<td></td>').text(value.Birthday));
      $row.append($('<td></td>').text(value.HairColor)); 
      $tableBody.append($row);
      
      if(data.characters[index].name.charAt(0) != 'S') {
        a1.push(data.characters[index]);
      } else {
        a2.push(data.characters[index]);
      }
    });

    $('thead').after($tableBody);

    let tagged1 = [];
    let $tds = $('.name');
    $.each($tds, function( index, value ) {
      tagged1.push({
        element: this,
        text: $tds[index].innerText.trim().toLowerCase()
      });
    });

    $('#button1').append(`A-M (${a1.length})`).addClass('active').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      $('td').hide();
        tagged1.forEach(function (td) {
          if ($(td.element).text().charAt(0) != 'S'){
            $(td.element).show();
            $(td.element).siblings().show();
          }
        });
    });

    $('#button2').append(`N-Z (${a2.length})`).addClass('active').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      $('td').hide();
      tagged1.forEach(function (td) {
        if ($(td.element).text().charAt(0) == 'S'){
          $(td.element).show();
          $(td.element).siblings().show();
        }
      });
    });

    let $search = $('#filter-search');
    let cache = [];
    
    $.each($tds, function( index, value ) {
      cache.push({
        element: this,
        text: $tds[index].innerText.trim().toLowerCase()
      });
     

    });
 
    function filter() {
      let query = this.value.trim().toLowerCase();
      
      if(query) {
        cache.forEach(function (td) {
          let index = 0;
          index = td.text.indexOf(query);
          if(index === -1){ 
            $(td.element).siblings().css("background-color", "") 
            $(td.element).css("background-color", "")   
          } else {
            $(td.element).siblings().css("background-color", "yellow")
            $(td.element).css("background-color", "yellow")
          } 
        });
      } 
      if(!query) {
        cache.forEach(function(td){
          td.element.style.backgroundColor = "";
          $(td.element).siblings().css("background-color", "")
        });

      }

    }
  
    if('oninput' in $search[0]) {
      $search.on('input', filter);
    } else {
     $search.on('keyup', filter);
    }
  });
});
