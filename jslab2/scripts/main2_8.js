function rpressed(){
    let stext1 = String(text2.value);
	alert(addBlackSpot(stext1));
}


function addBlackSpot(s){
    s[Symbol.for("blackSpot")] = true
    alert(s[Symbol.for("blackSpot")])
    return s;
}