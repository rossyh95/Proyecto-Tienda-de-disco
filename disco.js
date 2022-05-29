class disco{
    constructor(id,name,price,year){
        this.id= id;
        this.name= name;
        this.price= price;
        this.year= year;
    }
}

discId = []
for(let i=0;i<discId.length;i++);


function addRow(){
var discName = document.getElementById("name");
var discPrice = document.getElementById("price");
var discYear = document.getElementById("year");
var table = document.getElementById("tableDisc");


var rowCount = table.rows.length;
var row = table.insertRow (rowCount);


// function crearDisco(name){
// let iddisco = discId.length;
// var discos = new disco(iddisco,name);
// discId.push(discos);

// }


row.insertCell(0).innerHTML= discId.value;
row.insertCell(1).innerHTML= discName.value;
row.insertCell(2).innerHTML= discYear.value;
row.insertCell(3).innerHTML= discPrice.value;
row.insertCell(4).innerHTML= '<input type="button" value="Borrar" onClick="deleteRow(this)">';
}


//borrar
function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tableDisc");
    table.deleteRow(index);
}

//buscar
var busqueda = document.getElementById('searchTerm');
var table = document.getElementById("tableDisc").tBodies[0];

buscaTabla = function(){
    texto = busqueda.value.toLowerCase();
    var r=0;
    while(row = table.rows[r++])
    {
        if (row.innerText.toLowerCase().indexOf(texto) !== -1)
        row.style.display = null;
        else row.style.display = 'none';
    }
}

busqueda.addEventListener('keyup', buscaTabla);