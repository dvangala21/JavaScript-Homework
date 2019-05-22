// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {
      // Append a cell to the row for each value
      // in the weather report object
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  
  var filter = d3.select("#filter-btn"); 

  filter.on("click", function(){
      d3.event.preventDefault(); 
      tbody.html(' '); 
      var inputElement = d3.select("#datetime"); 
      var inputValue = inputElement.property("value"); 
      var filteredData = tableData.filter(row => row.datetime == inputValue); 
      console.log(filteredData); 
      
      filteredData.forEach(function(row){
        console.log(row)
        var row = tbody.append("tr"); 
        Object.entries(filteredAlien).forEach(function([key, value]) {
          var cell = tbody.append("td");
          cell.text(value);
        }); 
      }); 

  }); 