const body = document.body
const div = document.createElement("div")
body.append(div)

function myFunction() {
    let deckN = document.getElementById('dname').value;
    let deckT = document.getElementById('tname').value;
    let formatN = document.getElementById('fname').value;

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = deckN;
    cell2.innerHTML = deckT;
    cell3.innerHTML = formatN;
    
}
