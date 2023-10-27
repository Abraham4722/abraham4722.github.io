window.onload = ()=>{
    var data = [
        {
            id:1,
            name:"pozole rojo",
            price:49.00,
            img:"pozoles.jpg",
        },
        {
            id:2,
            name:"Tamal",
            price:30.00,
            img:"tamales.jpg",
        },
        {
            id:3,
            name:"Burritos",
            price:25.00,
            img:"burritos.jpg",
        },
        {
            id:4,
            name:"Lonches",
            price:35.00,
            img:"lonches.jpg",
        },
        {
            id:5,
            name:"Hamburguesas",
            price:45.00,
            img:"hamburguesas.jpg",
        },
        
]
var dataPedido = []
var lista = document.querySelector("#listaProductos")
var pedido = document.querySelector("#pedidos")

var todo = "";
data.forEach( (item)=>{
    todo+=`<div class="product">
    <div class="img">
        <img src="./img/${item.img}" alt="">
    </div>
    <div class="data">
        <h2>${item.name}</h2>
        <h6 class="price">$${item.price}</h6>
        <button class="btnComprar" data-index="${item.id-1}">Comprar</button>
    </div>

</div>`
})
lista.innerHTML = todo
var botones = document.querySelectorAll(".btnComprar")
botones.forEach((btn)=>btn.addEventListener('click',(evt)=>{
    let i=evt.target.dataset.index
    dataPedido.push(data[i])
    printPedido()
    
}))
let printPedido =()=>{
    todo=""
    let total=0
    dataPedido.forEach( (item)=>{
        todo+=`<div class="product">
        <div class="img">
            <img src="./img/${item.img}" alt="">
        </div>
        <div class="data">
            <h2>${item.name}</h2>
            <h6 class="price">$${item.price}</h6>
            <button class="btnComprar" data-index="${item.id-1}">Comprar</button>
        </div>
    
    </div>`
    total+=item.price
    })
    pedido.innerHTML = todo
    document.querySelector("#total").innerHTML="Total: $"+total.toFixed(2)
}


}//llave on load
