
class carritoCompras{
        constructor(){
            this.carrito= [];
        }

        calcularTotal(items){
           let total=0;
            this.carrito.push(items);
           for(const item of items ){

            total += item.precio * item.cantidad;

           }

            return  total;
           
        }
        
        aplicarDescuento(porcentaje){
          let  sumaTotal=this.ca;
           let descuento= sumaTotal * porcentaje /100;
           return descuento; // 100
        }
}



module.exports = carritoCompras;