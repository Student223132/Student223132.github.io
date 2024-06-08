
const button = document.getElementById('readyb');
const button1 = document.getElementById('deleteb');
const button3 = document.getElementById('showb');
const button4 = document.getElementById('convertb');
const button5 = document.getElementById('isequalb');

let jsonString = '';

let obj = {
    className: 'open menu',

    addClass: function (cls) {
        if (!this.className.includes(cls)) {
            this.className += ' ' + cls;
        }
        return this;
    },

    removeClass: function (cls) {
        this.className = this.className.replace(new RegExp('\\b' + cls + '\\b', 'g'), '').trim();
        return this;
    }
};

button.addEventListener('click', function () {
    let ftitle = String(string1.value);
    obj.addClass(ftitle);
});

button1.addEventListener('click', function () {
    let ftitle = String(string1.value);
    obj.removeClass(ftitle);
});

button3.addEventListener('click', function () {
    alert(obj.className);
});

button4.addEventListener('click', function () {
    jsonString = JSON.stringify(obj, null, 2);
    alert(jsonString);
});

button5.addEventListener('click', function () {
    let obj2 = JSON.parse(jsonString);
    alert(JSON.stringify(obj) === JSON.stringify(obj2));
});


