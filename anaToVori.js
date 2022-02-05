/* ============
Ana to Vori
============ */
function anaToVori(ana) {
    if (typeof ana != 'number' || ana < 0) {
        return 'Input Error, Please Enter a Number';
    }
    else {
        const vori = ana / 16;
        return vori;
    }
}

const myAna = anaToVori(-5);
console.log('1:', myAna);
