
export function getDecimal(n){
    return Math.round((n % 1)*10000000)/10000000;
}

export function normalizeUrl(fstr){
    if (fstr.slice(0, 8) != 'https://'){
        if(fstr.slice(0, 7) == 'http://'){
            fstr.replace('http://', 'https://');
        }
       fstr = 'https://' + fstr;
    }
    if((fstr.slice(-4) != '.com')&&(fstr.slice(-4) != '.net')&&(fstr.slice(-3) != '.ru')&&(fstr.slice(-3) != '.su')){
        fstr = fstr + '.com'
            
    }
    return fstr;
        
}

export function checkSpam(fstr){
    let isspam = false;
    if(fstr.search(/xxx/i)!= -1){
        isspam = true;
    }
    else{
        if(fstr.search(/viagra/i)!= -1){
            isspam = true;        
        }
    }
    return isspam;
        
}
export function truncate(fstr, fnum){
    if (fstr.length > fnum){
        fstr = fstr.slice(0, fnum) + '...'; 
    }
    return fstr;
}