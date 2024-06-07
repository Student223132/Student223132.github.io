
const button = document.getElementById('readyb');
button.addEventListener('click', function() {
    let ftitle = String(title1.value);
    let fpubyear = + pubyear1.value;
    let fprice = + price1.value;
    let book = new Book(ftitle, fpubyear, fprice);
    book.show();


});

function Book(btitle, bpubyear, bprice) {
    this.title = btitle;
    this.pubyear = bpubyear;
    this.price = bprice;
    this.show = function(){
        console.log("Title: ", this.title);
        console.log("Price: ", this.price);
    };
}