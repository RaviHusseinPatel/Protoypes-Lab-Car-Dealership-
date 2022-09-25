class Dealership {
    constructor(manufactuer, maxCars, stockCars) {
        this.manufactuer = manufactuer;
        this.maxCars = maxCars;
        this.stockCars = stockCars;
    }
}

Dealership.prototype.countCarStock= function(){
    
}

Dealership.prototype.addCarToStock= function(newCar){
    this.stockCars= newCar;
}

Dealership.prototype.allCarsManufacturer= function(){
    
}

Dealership.prototype.totalStockValue= function(){
    
}