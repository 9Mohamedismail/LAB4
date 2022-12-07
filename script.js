 function getData() {
    document.getElementById('createTable').style.visibility = "hidden";
    document.getElementById('update').style.visibility = "hidden";
    document.getElementById('add').style.visibility = "hidden";
    var requestedID = document.getElementById("squirrelIDBox").value
 
    fetch('http://localhost:3000/squirrels/' + requestedID)
       .then(res => res.json())
       .then(data => {
          console.log(data);
          makeDataTable(data)
       })
 }
 
 function deleteData() {
    document.getElementById('createTable').style.visibility = "hidden";
    document.getElementById('update').style.visibility = "hidden";
    document.getElementById('add').style.visibility = "hidden";
    var requestedID = document.getElementById("squirrelIDBox").value
    fetch('http://localhost:3000/squirrels/' + requestedID, {
          method: "DELETE"
       })
       .then(res => res.json())
       .then(data => {
          console.log(data);
          makeDataTable(data)
       })
 }
 
 async function addSquirrel() {
    var displayData = document.getElementById("dataTable");
    var row = displayData.insertRow(1);
 
    let headersList = {
       "Accept": "*/*",
       "Content-Type": "application/json"
    }
 
    let bodyContent = JSON.stringify({
       "squirrel_id": document.getElementById("squirrelIDBox").value,
       "time": document.getElementById("time").value,
       "date": document.getElementById("date").value,
       "age": document.getElementById("age").value,
       "primary_fur_color": document.getElementById("primaryColor").value,
       "highlight_fur_color": document.getElementById("highlightColor").value,
       "nearby_building": document.getElementById("nearbyBuilding").value,
       "above_ground": document.querySelector('input[name="aboveGround"]:checked').value
    });
 
    let response = await fetch("http://localhost:3000/squirrels/", {
       method: "POST",
       body: bodyContent,
       headers: headersList
    });
 
    let data = await response.text();
    row.innerHTML = "Squirrel with that ID has been created!"
    document.getElementById('createTable').style.visibility = "hidden";
    document.getElementById('add').style.visibility = "hidden";
 
 }
 
 async function updateSquirrel() {
    var displayData = document.getElementById("dataTable");
    var requestedID = document.getElementById("squirrelIDBox").value
    var row = displayData.insertRow(1);
 
    let headersList = {
       "Accept": "*/*",
       "Content-Type": "application/json"
    }
 
    let bodyContent = JSON.stringify({
       "squirrel_id": requestedID,
       "time": document.getElementById("time").value,
       "date": document.getElementById("date").value,
       "age": document.getElementById("age").value,
       "primary_fur_color": document.getElementById("primaryColor").value,
       "highlight_fur_color": document.getElementById("highlightColor").value,
       "nearby_building": document.getElementById("nearbyBuilding").value,
       "above_ground": document.querySelector('input[name="aboveGround"]:checked').value
    });
 
    let response = await fetch("http://localhost:3000/squirrels/" + requestedID, {
       method: "PUT",
       body: bodyContent,
       headers: headersList
    });
 
    let data = await response.text();
    row.innerHTML = "Squirrel with that ID has been updated!"
    document.getElementById('createTable').style.visibility = "hidden";
    document.getElementById('update').style.visibility = "hidden";
 
 }
 
 function showCreateTable() {
    document.getElementById('createTable').style.visibility = "visible";
    document.getElementById('update').style.visibility = "hidden";
    document.getElementById('add').style.visibility = "visible";
 }
 
 function showUpdateTable() {
    var requestedID = document.getElementById("squirrelIDBox").value
    document.getElementById('add').style.visibility = 'hidden';
    document.getElementById('update').style.visibility = 'visible';
 
    fetch('http://localhost:3000/squirrels/' + requestedID)
       .then(res => res.json())
       .then(data => {
          document.getElementById('createTable').style.visibility = "visible";
          document.getElementById("time").value = data[0].time;
          document.getElementById("date").value = data[0].date;
          document.getElementById("age").value = data[0].age;
          document.getElementById("primaryColor").value = data[0].primary_fur_color;
          document.getElementById("highlightColor").value = data[0].highlight_fur_color;
          document.getElementById("nearbyBuilding").value = data[0].nearby_building;
          document.getElementsByName("aboveGround").value = data[0].above_ground;
       })
 }
 
 function makeDataTable(data) {
    var displayData = document.getElementById("dataTable");
    var row = displayData.insertRow(1);
 
    if (data == '') {
       row.innerHTML = "Squirrel with that ID does not exist!"
       return;
    } else if (typeof data[0]?.squirrel_id === 'undefined') {
       row.innerHTML = "Squirrel with that ID has been deleted!";
       return;
    }
 
    row.insertCell().innerHTML = data[0].squirrel_id;
    row.insertCell().innerHTML = data[0].time;
    row.insertCell().innerHTML = data[0].date;
    row.insertCell().innerHTML = data[0].age;
    row.insertCell().innerHTML = data[0].primary_fur_color;
    row.insertCell().innerHTML = data[0].highlight_fur_color;
    row.insertCell().innerHTML = data[0].nearby_building;
    row.insertCell().innerHTML = data[0].above_ground;
 }