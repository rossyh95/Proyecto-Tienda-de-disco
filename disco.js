class disco{
    constructor(id,name,price,year){
        this.id= id;
        this.name= name;
        this.price= price;
        this.year= year;
    }
}

function addRow(){
var discName = document.getElementById("name");
var discPrice = document.getElementById("price");
var discYear = document.getElementById("year");
var table = document.getElementById("tableDisc");
//var discId
//for (var i = 0; i < discId.length; i++) {
//        discId[i].innerHTML = (i+1)+".";
//    }

var rowCount = table.rows.length;
var row = table.insertRow (rowCount);

row.insertCell(0).innerHTML= //discId.value;
row.insertCell(1).innerHTML= discName.value;
row.insertCell(2).innerHTML= discYear.value;
row.insertCell(3).innerHTML= discPrice.value;
row.insertCell(4).innerHTML= '<input type="button" value="Borrar" onClick="deleteRow(this)">';
}

function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tableDisc");
    table.deleteRow(index);
}