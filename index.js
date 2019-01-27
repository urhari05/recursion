class Super{
    constructor() {
        this.name = 'harish';
        //console.log('i am super constructor');
    }

    superFoo() {
        console.log('I am superfoo');
    }
}


class Base extends Super {
    constructor() {
        super();
        this.surname = 'sunkerikar';
        //console.log('i am base constructor')
    }

    baseFoo() {
        console.log('I am baseFoo');
    }
}

const testObject = new Base();
let widgetObject = {};
let count = 0;
function myself (obj) {
    let propertyNames = Object.getOwnPropertyNames(obj);
    for(obj1 of propertyNames) {
        if(obj1 !== 'constructor') {
            widgetObject[obj1] = obj[obj1];
        }
    }
    
    const objProto = Object.getPrototypeOf(obj);
 
        if(objProto instanceof Object) {
            return myself(objProto); 
        } else {
            return widgetObject;
        }
        
  
}

console.log(myself(testObject));