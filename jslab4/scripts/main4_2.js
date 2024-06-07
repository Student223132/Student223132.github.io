
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
        this.title = btitle;
        this.pubyear = bpubyear;
        this.price = bprice;
        this.show = function () {
            console.log("Title: ", this.title);
            console.log("Price: ", this.price);
        };
    }

    set title(value) {
        if (value === ''){
            alert('Вы не ввели название книги');
        }
    }

    set pubyear(value){
        if (value < 0){
            alert('Значение года меньше 0');
        }
    }
    set price(value){
        if (value < 0){
            alert('Цена меньше 0');
        }
    }
}