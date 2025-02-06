class Box 
{
    constructor(length, breadth, height) 
    {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
}

class Boxweight extends Box 
{
    constructor(length, breadth, height, weight) 
    {
        super(length, breadth, height);
        this.weight = weight; 
    }
}

class Boxcost extends Boxweight 
{
    constructor(length, breadth, height, weight, shipmentcost) 
    {
        super(length, breadth, height, weight);
        this.shipmentcost = shipmentcost;
    }
}

const myBoxcost = new Boxcost(10, 5, 3, 2, 20);
console.log("Length: ", myBoxcost.length);
console.log("Breadth: ", myBoxcost.breadth);
console.log("Height: ", myBoxcost.height);
console.log("Weight: ", myBoxcost.weight);
console.log("Shipment cost: ", myBoxcost.shipmentcost);