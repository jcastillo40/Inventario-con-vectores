class Producto {
    constructor(código, nombre, cantidad, costo) {
        this.código = código;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }

    info() {
        return `Código: ${this.código} Nombre: ${this.nombre} Cantidad: ${this.cantidad} Costo: $${this.costo}`;
    }
}

class Inventario {
    constructor() { 
        this.productos = [];
    }

    agregar(producto) {
        this.productos.push(producto);
    }

    agregarInicio(producto) {
        for (let i = this.productos.length; i > 0; i--) {
            this.productos[i] = this.productos[i - 1];
        }
        this.productos[0] = producto;
    }

    insertar(producto, posicion) {
        let index = posicion - 1;
        
        if (index < 0) index = 0;
        if (index > this.productos.length) index = this.productos.length;

        for (let i = this.productos.length; i > index; i--) {
            this.productos[i] = this.productos[i - 1];
        }
        this.productos[index] = producto;
    }


    eliminar(codigo) {
        let index = -1;


        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].código === codigo) {
                index = i;
                break;
            }
        }

        if (index === -1) return null;

        let productoEliminado = this.productos[index];

        for (let i = index; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }

        this.productos.pop();

        return productoEliminado;
    }

    buscar(codigo) {
        for (let i = 0; i < this.productos.length; i++) {
            if (this.productos[i].código === codigo) {
                return this.productos[i];
            }
        }
        return null;
    }

    listar() {
        if (this.productos.length === 0) {
            return "El inventario está vacío.";
        }

        let resultado = "";
        for (let i = 0; i < this.productos.length; i++) {
            resultado += this.productos[i].info();
        }
        return resultado;
    }

    extraerPrimero() {
        if (this.productos.length === 0) return null;

        let primero = this.productos[0];

        for (let i = 0; i < this.productos.length - 1; i++) {
            this.productos[i] = this.productos[i + 1];
        }

        this.productos.pop();

        return primero;
    }
}


let inventario=new Inventario();
let nuevo=new Producto(1,"Lapiz",100,10);
inventario.agregar(nuevo);
nuevo=new Producto(2,"Borrador",200,20); 
inventario.agregar(nuevo);
nuevo=new Producto(3,"Cuaderno",300,30);
inventario.agregar(nuevo);
nuevo=new Producto(4,"Clips",20,10); 
inventario.agregarInicio(nuevo);
nuevo=new Producto(5,"Sacapuntas",500,50); 
inventario.agregar(nuevo);

console.log(inventario.listar())

inventario.eliminar(3);

console.log(inventario.listar())

let res=inventario.buscar(10);
if (res==null)
  console.log("No existe");
else
  console.log("si existe");

res=inventario.buscar(4);
if (res==null)
  console.log("No existe");
else
  console.log(res.info());

res=inventario.extraerPrimero();
console.log("el primero es");
console.log(res.info());