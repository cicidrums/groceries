$(document).ready(function() {

  $("form#grocery").submit(function(event) {
    event.preventDefault();

    //debugger;

    var labels = ["produce", "dairy", "protein", "bakery", "alcohol"];
    var groceries = [];

    labels.forEach(function(label) {
      groceries.push($("#" + label).val());
    });
    //groceries.push($("#produce").val(), $("#dairy").val(), $("#protein").val(), $("#bakery").val(), $("#alcohol").val());

    var sortedGroceries = groceries.slice();
    sortedGroceries.sort();
    //var sortedGroceries = groceries.map(function() {
    //  return groceries.sort();
    //});

    //console.log(groceries);
    //console.log(sortedGroceries);

    for (var index = 0; index <= sortedGroceries.length; index += 1) {
      $("." + index).text(sortedGroceries[index]);
    };
    //var listNumbers = [0, 1, 2, 3, 4];
    //listNumbers.forEach(function(listNumber) {
    //  $("." + listNumber).text(sortedGroceries[listNumber]);
    //});

    $("ul.sorted").show();
  });
});
