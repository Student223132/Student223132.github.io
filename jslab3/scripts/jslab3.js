
export function getDecimal(n){
    return Math.round((n % 1)*10000000)/10000000;
}

export function normalizeUrl(fstr){
    if (fstr.slice(0, 8) != 'https://'){
        if(fstr.slice(0, 7) == 'http://'){
            fstr = fstr.slice(-(fstr.length-7));
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

export function camelize(fstr){
    let char = ' ';
    let spart1 = ' ';
    let spart2 = ' ';

        for(let i = 0; i < fstr.length; i++){
        if(fstr[i] === '-'){
            char = fstr[i+1];
            spart1 = fstr.slice(0, i);
            spart2 = fstr.slice(-(fstr.length - i - 1));
            char = char.toUpperCase();
            fstr = spart1 + char + spart2;

        }
    }
    return fstr;
}