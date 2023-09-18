//Cria um enum para as categorias dos carro
enum CarType {
    Sedan = "Sedan",
    SUV = "SUV",
    Hatchback = "Hatchback",
    Coupe = "Coupe"
}

//Classe para armazenar as caracteristicas dos carros
class Car {
    model;
    manufacturer;
    type;
    price;
    isAvailable;

    //Construtor da classe
    constructor(model: string, manufacturer: string, type: CarType, price: number, isAvailable = true) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.type = type;
        this.price = price;
        this.isAvailable = isAvailable;
    }
}

//Classe com todos os métodos disponíveis na concessionária
class Dealership {
    cars: Car[] = [];

    //Adiciona um carro no catalogo
    addCar(car: Car): void {
        this.cars.push(car);
    }

    //Remove um carro do catalogo
    removeCar(model: string): void {
        const index = this.cars.findIndex(car => car.model === model);
        if (index !== -1 && this.cars[index].isAvailable) {
            this.cars.splice(index, 1);
        } else {
            console.log("Não é possível remover, carro vendido ou inexistente");
        }
    }

    //Checa se o carro está disponível para a venda
    checkAvailability(model: string): boolean {
        const car = this.cars.find(car => car.model === model);
        return car ? car.isAvailable : false;
    }

    //Mostra todos os carros
    showCars(): void {
        this.cars.forEach((car) => {
            console.log(car);
        });
    }

    //Vende um carro
    sellCar(model: string, customer: string): void {
        const index = this.cars.findIndex(car => car.model === model);
        if (index !== -1 && this.cars[index].isAvailable) {
            this.cars[index].isAvailable = false;
            console.log(`O carro ${model} foi vendido para ${customer}`);
        } else {
            console.log("O carro já foi vendido ou não existe na concessionária.");
        }
    }

    //Procura os carros pelos fabricantes
    searchByManufacturer(manufacturer: string): Car[] {
        return this.cars.filter(car => car.manufacturer === manufacturer);
    }

    //Procura os carros pela categoria
    searchByType(type: CarType): Car[] {
        return this.cars.filter(car => car.type === type);
    }
}

const bmwM3 = new Car("M3", "BMW", CarType.Coupe, 70000);
const audiQ7 = new Car("Q7", "Audi", CarType.SUV, 80000);
const fordFocus = new Car("Focus", "Ford", CarType.Hatchback, 20000);

const dealership = new Dealership();

dealership.addCar(bmwM3);
dealership.addCar(audiQ7);
dealership.addCar(fordFocus);

console.log(dealership.checkAvailability("M3"));
console.log(dealership.checkAvailability("Q7"));
console.log(dealership.checkAvailability("Focus"));

dealership.showCars();

console.log(dealership.searchByManufacturer("BMW"));
console.log(dealership.searchByType(CarType.SUV));

dealership.sellCar("M3", "Gabriel Borges");
dealership.sellCar("Q7", "Luis Silva");
dealership.sellCar("dkajdkajsdkajsd", "Jorge");

dealership.showCars();
