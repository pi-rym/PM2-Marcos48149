
class carritoCompras{
        constructor(){
            this.productos= [];
        }

        calcularTotal(items){
           let total=0;
            this.carrito.push(items);
           for(const item of items ){

            total += item.precio * item.cantidad;

           }

            return  total;
           
        }

        agregarProducto(product){
            this.productos.push(product);
        }
        
        aplicarDescuento(porcentaje){
            const subtotal = this.calcularTotal()
            const descuento = this.calcularTotal * (porcentaje/100)
    
            return subtotal - descuento
        }
}



module.exports = carritoCompras;