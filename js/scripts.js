$(document).ready(function() {

  $("form#grocery").submit(function(event) {
    event.preventDefault();
    debugger;
    var list = [];
    var product = $("input#produce").val();

    console.log(product);

    list.push($("input#produce").val());

  });
});
