/* ============
Panda Cost
============ */
function pandaCost(singara, somucha, jilapi) {
    let cost = 0;
    if (typeof singara != 'number' || typeof somucha != 'number' || typeof jilapi != 'number' || singara < 0 || somucha < 0 || jilapi < 0) {
        return 'Input Error, Please Enter Number of Items';
    }
    else {
        cost = (singara * 7) + (somucha * 10) + (jilapi * 15);
        return cost;
    }
}

const myCost = pandaCost(3, 3, 0);
console.log('2:', myCost);