const perimeter=(length,breadth)=>2*(length+breadth);

const rectangleSpread=[10,5];
const perimeterSpread=perimeter(...rectangleSpread);
console.log(`perimeter Spread:${perimeterSpread}`);

const rectangleRest=[8,6];
const perimeterRest=perimeter(...rectangleRest);
console.log(`perimeter Rest:${perimeterRest}`);