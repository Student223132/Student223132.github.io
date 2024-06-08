
let obj1 = {}
const button = document.getElementById('readyb');
const button2 = document.getElementById('propertycheck');
const button3 = document.getElementById('propertycheck1');

const symbolObj = {[Symbol()]: true};


button.addEventListener('click', function() {
    let ftitle = String(title1.value);
    let fpubyear = + pubyear1.value;
    let fprice = + price1.value;
    obj1 = new Book(ftitle, fpubyear, fprice);
    obj1.show(); 
});


button2.addEventListener('click', function() {
    alert(isEmpty(obj1));
    if (isEmpty(obj1)){
        alert('Вы не ввели свойства книги');
    }
});

button3.addEventListener('click', function() {
    alert(isEmpty(symbolObj));
});


class Book {
    constructor(btitle, bpubyear, bprice) {
        this._title = btitle;
        this._pubyear = bpubyear;
        this._price = bprice;
        this.show = function () {
            console.log("Title: ", this._title);
            console.log("Pub year", this._pubyear);
            console.log("Price: ", this._price);
        };
    }

    compare(obj){
        if (this._pubyear > obj._pubyear){
            return true;
        }
        else{
            return false;
        }
    }

    get title(){
        return this._title;
    }

    set title(value) {
        if (value === ''){
            alert('Вы не ввели название книги');
        }
        else{
            this._title = value;
        }
    }
    
    get pubyear(){
        return this._pubyear;
    }

    set pubyear(value){
        if (value < 0){
            alert('Значение года меньше 0');
        }
        else{
            this._pubyear = value;
        }
    }

    get price(){
        return this._price;
    }

    set price(value){
        if (value < 0){
            alert('Цена меньше 0');
        }
        else{
            this._price = value;
        }
    }
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0;
  }