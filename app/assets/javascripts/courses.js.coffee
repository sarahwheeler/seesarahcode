# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/


$.ajax({
  type: 'GET',
  url: 'http://teamtreehouse.com/sarahwheeler.json',
  data: { },
  success:function(data){
    // successful request; do something with the data
    $('#ajax-panel').empty();
    $(data).find('item').each(function(i){
     
    });
  }
});