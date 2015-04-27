$.ajax({
  type: 'GET',
  url: 'http://teamtreehouse.com/sarahwheeler.json',
  data: {
      format: 'json'
   }
}).success(function(data) {
  console.log(data);
  var points = data["points"]["total"];
  console.log(points);
  $('#treehouse-pts').text(commaSeparatedNumber(points));
});

function commaSeparatedNumber(val){
  while (/(\d+)(\d{3})/.test(val.toString())){
    val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
  }
  return val;
}