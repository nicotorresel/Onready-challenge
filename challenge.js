const vehiculos = [
  {
    marca: 'Peugeot',
    modelo: '206',
    puertas: 4,
    precio: 200000
  },
  {
    marca: 'Honda',
    modelo: 'Titan',
    cilindrada: 125,
    precio: 60000
  },
  {
    marca: 'Peugeot',
    modelo: '208',
    puertas: 5,
    precio: 250000
  },
  {
    marca: 'Yamaha',
    modelo: 'YBR',
    cilindrada: 160,
    precio: 80500.50
  },
];

class Vehiculo {
  constructor(marca, modelo, precio) {
    this.marca = marca,
    this.modelo = modelo,
    this.precio = precio
  }

  nombre = () => {
    return `${this.marca} ${this.modelo}`;
  }

  nombreYPrecio = () => {
    return `${this.nombre()} $${this.precio}`
  }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, precio, puertas) {
      super (marca, modelo, precio);
      this.puertas = puertas
    }

    imprimir = () =>{
      console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${this.precio}`);
    }
}

class Moto extends Vehiculo {
  constructor(marca, modelo, precio, cilindrada) {
    super(marca, modelo, precio);
    this.cilindrada = cilindrada;
  }

  imprimir = () =>{
    console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada}cc // Precio: $${this.precio}`);
  }
}

//utilizo un factory para crear el tipo de vehiculo
class CreateVehiculo {
  static create(marca, modelo, puertas, cilindrada, precio) {

    if (puertas) {
      return new Auto (marca, modelo, precio, puertas);
    }
    if (cilindrada) {
      return new Moto (marca, modelo, precio, cilindrada);
    }
  }
}

// creo los objetos dependiendo si son autos o motos
const vehicles = vehiculos.map((element)=> {
  return CreateVehiculo.create(element.marca, element.modelo, element.puertas, element.cilindrada, element.precio);
});


// creo la funcion vehiculo mas caro
const masCaro = (allVehicles) => {
  let actual = allVehicles[0];
  allVehicles.forEach((item) => {
    if ( item.precio > actual.precio) {
      actual = item;
    }
  });
  return actual.nombre();
};

// creo la funcion vehiculo mas barato
const masBarato = (allVehicles) => {
  let actual = allVehicles[0];
  allVehicles.forEach((item) => {
    if ( item.precio < actual.precio) {
      actual = item;
    }
  });
  return actual.nombre();
};

// vehiculo que contiene en el modelo la letra Y
const contieneLetraY = (allVehicles) => {
  let lista = [];
  allVehicles.forEach((valor)=>{
    if (valor.modelo.indexOf('Y')>-1) {
      lista.push(valor.nombreYPrecio());
    }
  });
  return lista;
}

//Vehículos ordenados por precio de mayor a menor


// hago una funcion imprimir para todos los vehiculos
const impresion = vehicles.forEach((item)=>{
  item.imprimir();
});

// imprimo un separador
console.log('=============================');

//imprimo vehiculo mas caro:
console.log(`Vehículo más caro: ${masCaro(vehicles)}`);

//imprimo vehiculo mas barato:
console.log(`Vehículo más barato: ${masBarato(vehicles)}`);

//imprimo vehiculo que en el modelo incluye la letra Y
console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${contieneLetraY(vehicles)}`);

// imprimo un separador
console.log('=============================');

//imprimo los vehículos ordenados por precio de mayor a menor
let todosLosVehiculos = vehicles;
todosLosVehiculos.sort((a, b) =>{
  return b.precio - a.precio;
});

console.log(`Vehículos ordenados por precio de mayor a menor:`)
const ordenados = todosLosVehiculos.forEach((it)=>{
  console.log(it.nombre());
})


