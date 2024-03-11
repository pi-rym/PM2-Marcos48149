


const carritoCompras = require('./index');


describe('Carrito de Compras', () => {
    let carrito = new carritoCompras();

    it("deberia verificar que carrito es una instancia de carritoCompras", ()=>{
        expect(carrito instanceof carritoCompras).toBe(true)
    })
    it("deberia consultar si calculcar es funcion", ()=>{
        expect(typeof carrito.calcularTotal).toBe('function')
    })
   /* it("deberia verificar que el arreglo no este vacio", ()=>{
        expect(carrito.constructor.prototype).not.toBe([]);
    })*/



    it("deberia verificar que mi funcion calcularTotal esta retornando el valor correcto", ()=>{
        const productos = [
            { nombre: 'birome',
            precio: 10,
            cantidad: 5 }
        ]
    
        const productos2 = [
            { nombre: 'birome',
            precio: 100,
            cantidad: 5 }
        ]
       
        expect( carrito.calcularTotal(productos2)).toBe(500);
    })

    it("deberia verificar el deescunto", ()=>{
        const productos2 = [
            { nombre: 'birome',
            precio: 100,
            cantidad: 5 }
        ]

        const porcentaje=20;
        const sumTotal= carrito.calcularTotal(productos2);
        //const desc = sumTotal * 20/100;

        expect(carrito.aplicarDescuento(porcentaje)).toBe(sumTotal * 20/100);
    })
 
  
});




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




