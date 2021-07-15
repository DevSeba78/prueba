let cxp = 0; //variable de costo por producto
let precioFinal = 0; //variable costo por producto


let resultado = document.getElementById("resultado")
let cargar = confirm("Desea cargar prenda?")//variable de carga
//let consulta = confirm(`Desea buscar por alguna prenda?`)
class Prenda {
    constructor(tipo,marca, material, costo, stock, disponible){
        this.tipo = tipo,
        this.marca = marca,
        this.material = material,
        this.costo = costo,
        this.stock = stock,
        this.disponible = disponible
    }
  //Metodos dentro del objeto siempre
  //calcular costo x producto
costoxProducto(){
   cxp = this.costo / this.stock;
   
    return cxp.toFixed(2); 
}

SumarIva(){
    let precioFinal = cxp * 1.21;
    return precioFinal.toFixed(2);
}
    
}

const Producto = []


//localstorage
function saveLocal(){
    let aJson = JSON.stringify(Producto)
    localStorage.setItem("productos", aJson)
}



function cargarProducto() {
    let tipo = prompt("Ingresar Tipo de prenda: ");
    let marca = prompt("Ingrese marca: ");
    let mat = prompt("Ingresa material: ");
    let cost = Number(prompt("Ingresa costo: "));
    let stoc = Number(prompt("Ingresa stock: "))
    let dis = confirm("Prenda disponible?")
    let PrendaNueva = new Prenda(tipo, marca, mat, cost, stoc, dis)
    Producto.push(PrendaNueva)
    
}
//cargar nueva prenda

while (cargar==true) {   

    cargarProducto();
    cargar = confirm("Desea cargar otra prenda?")
  
    
}


//imprime productos del array
function imprimir(Producto) {
    ordenar()//ordeno el array antes de imprimir
    for (const Prenda of Producto) {
        
        resultado.innerHTML +=`<div class="card text-white bg-success mb-3 margin: 2.2rem" style="width: 18rem;">
        <div class="card-header">
          Tipo de Prenda: ${Prenda.tipo}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Marca: ${Prenda.marca}</li>
          <li class="list-group-item">Material: ${Prenda.material}</li>
          <li class="list-group-item">Costo x prenda: $${Prenda.costoxProducto()}</li>
          <li class="list-group-item">En Stock hay: ${Prenda.stock} unidades</li>
          <li class="list-group-item">Disponibilidad: ${Prenda.disponible}</li>
          <li class="list-group-item">Precio al Publico: $${Prenda.SumarIva()}</li>
        </ul>
      </div>`;
    }
    
}
imprimir(Producto);

//Ordenamos segun stock de menor a mayor
function ordenar (){
    let stockOrdenado =Producto.sort(function (a,b) {
        if (a.stock > b.stock) {
            return 1;
        }
        if (a.stock < b.stock) {
            return -1;
        }
        return 0;
    });
    //mostrar array ordenado
    //console.log(stockOrdenado);
}

//Filtro por prenda
function filtroTipo() {
    //removeAllChildNodes(resultado)
    let filtroxTipo = prompt("que tipo de prenda desea buscar?")
    let prendaxTipo = Producto.filter(Prenda => Prenda.tipo == filtroxTipo);
    imprimir(prendaxTipo)// aca agregue el llamado a la funcion pero me imprime todo de nuevo
    console.log(prendaxTipo);
    let filtro = document.getElementById("filtro")
    let titulo = document.createElement("h1")
    titulo.setAttribute('class', 'text-center mt-5')
    filtro.prepend(titulo)
    titulo.textContent=`Prenda Filtrada por tipo: ${filtroxTipo}`
    
    
}


//Funcion para borrar todos los nodos child (hijos) del elemento parent que le pase por el atributo. firstChild siempre me devuelve el primer child del nodo que especifique
/*function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}*/
if(cargar != true){
    filtroTipo()
}

  //console.log(vender());///control indefinida

//Recorrido del array de objetos
/*  for (let i = 0; i < Producto.length; i++) {
    const e  = Producto[i];
    console.table(e);
    
}*/


//console.log(saveLocal());







