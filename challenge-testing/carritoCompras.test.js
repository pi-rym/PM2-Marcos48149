


const carritoCompras = require('./index');


describe('clase CarritoCompras', () => {
    let carrito;
    beforeEach (() =>{
        carrito = new carritoCompras();
    })

    describe( 'sobre el constructor de la clase carritoCompras', ()=>{
        it('carritoCompra deberia ser una clase', ()=>{
            expect( typeof carrito.prototype.constructor).toBe('function')
        })

        it("deberia verificar que carrito es una instancia de carritoCompras", ()=>{
            expect(carrito instanceof carritoCompras).toBe(true)
        })
    })

   
    describe('metodos de la clase carritoCompras', ()=>{
        const producto1 ={
            id:1,
            nombre: 'papel',
            precio: 10,
            cantidad: 5 }
        
    
        const producto2 =  { 
            id:2,
            nombre: 'birome',
            precio: 100,
            cantidad: 5 }

            it('deberia tener un metodo llamado agrgarProducto ', ()=>{
                expect(typeof carrito.agregarProducto).toBe('function')
            })
            
            it('deberia tener un metodo llamado calcular total', ()=>{
                expect(typeof carrito.calcularTotal).toBe('function')
            })

            it('deberia tener un metodo llamado aplicarDescuento', ()=>{
                expect(typeof carrito.aplicarDescuento).toBe('function')
            })

            it('el metodo agregar producto deberia agregar un producto', ()=>{
                carrito.agregarProducto(producto1)
                expect(carrito.productos).toContain(producto1)
            })

            it('el metodo calcularTotal deberia calcular el total de la sumar el precio de los productos', ()=>{
                carrito.agregarProducto(producto1);
                carrito.agregarProducto(producto2);

                const totalExpec= producto1.precio * producto1.cantidad + producto2.precio * producto2.cantidad;

                const total= carrito.calcularTotal()
               
                expect(total).toBe(totalExpec)
            })

            
    });
});



            

    
   
    
  
// aca cierra




   /* it('Debería return 13 si Suma los números 8 y 5', () => {
        expect(mockSumar(8,5)).toBe(13)
    })

    it('Debería return 8 si Suma los números 5 y 3', () => {
        expect(mockSumar(5,3)).toBe(8)
    })

    it('Debería recibir correctamente los argumentos 10 y 15', () => {
        mockSumar(10,15)
        expect(mockSumar).toHaveBeenCalledWith(10,15)
    })*/




