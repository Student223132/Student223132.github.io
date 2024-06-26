
const button = document.getElementById('readyb');
button.addEventListener('click', function() {
    let ftitle = String(title1.value);
    let fpubyear = + pubyear1.value;
    let fprice = + price1.value;
    let book = new Book(ftitle, fpubyear, fprice);
    book.show();


});

class Book {
    constructor(btitle, bpubyear, bprice) {
        this._title = btitle;
        this._pubyear = bpubyear;
        this._price = bprice;
        this.show = function () {
            console.log("Title: ", this._title);
            console.log("Price: ", this._price);
        };
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