let i = 0;
let arr = [];
let obj1 = {}
const button = document.getElementById('readyb');
const button2 = document.getElementById('cleararrb');

button.addEventListener('click', function() {
    let ftitle = String(title1.value);
    let fpubyear = + pubyear1.value;
    let fprice = + price1.value;

    if (i<3){
        arr.push(new Book(ftitle, fpubyear, fprice));
        arr[i].show();
        i = i+1;
    }

    if (i === 3){
        for(let k = 0; k < 2; k++){
            for(let j = 0; j< 2; j++){
                if(arr[j].compare(arr[j+1])){
                    obj1 = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = obj1;
                }
            }
        }
        for(let j = 0; j<3; j++){
            arr[j].show();
        }
    }
        
});


button2.addEventListener('click', function() {
    arr = [];
    i = 0;
});

if (i<3){
    alert('Введите элемент массива')
}


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