// Map, set

let m = new Map();
m.set('a', 1);
m.set('b', 2);
m.set('c', 3);
console.log(m[Symbol.iterator])
console.log(m.entries())
console.log(m.keys())
console.log(m.values())


let s = new Set();
s.add(10);
s.add(20);
s.add(30);

const add = (a, b) => a + b;
console.log(_.reduce(add, s))

_.go(
    m,
    L.filter(([k, v]) => v % 2),
    _.takeAll,
    console.log
)

// Model, Collection

class Model{
    constructor(attrs = {}){
        this._attrs = attrs;
    }
    get(k){
        return this._attrs[k]
    }
    set(k, v){
        this._attrs[k] = v;
        return this
    }
}
class Collection {
    constructor(models = []){
        this._models = models;
    }
    at(idx){
        this._models[idx]
    }
    add(model){
        this._models.push(model);
        return this;
    }
    *[Symbol.iterator](){
        yield *this._models
        // for(const model of this._models){
            //     yield model;
            // }
    }
    
}

const coll = new Collection();
coll.add(new Model({id : 1, name : 'AA'}))
coll.add(new Model({id : 3, name : 'BB'}))
coll.add(new Model({id : 5, name : 'CC'}))
console.log(coll.at(2).get('name'));
console.log(coll.at(1).get('id'));

_.go(
    coll,
    L.map(m => m.get('name')),
    _.each(console.log)
)

_.go(
    coll,
    _.each(m => m.set('name', m.get('name').toLowerCase()))
)

//3.puduct, products

class Product extends Model{}
class Products extends Collection{
    getPrice(){
        return L.map(p => p.get('price'), this);
    }
    totalPrice(){
        return _.go(this,
            L.map(p => p.get('price')),
            _.reduce((a, b) => a + b));
        // let total = 0;
        // this._models.forEach(product =>{
        //     total += product.get('price')
        // })
        // return total
    }
}
const products = new Products();
products.add(new Product({ id : 1, price : 10000}));
console.log(products.totalPrice())
products.add(new Product({ id : 3, price : 25000}));
console.log(products.totalPrice())
products.add(new Product({ id : 5, price : 35000}));
console.log(products.totalPrice())