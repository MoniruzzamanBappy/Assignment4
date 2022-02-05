/* ============
Picnic Budget
============ */
function picnicBudget(num) {
    let cost = 0;
    let members = 0;

    if (typeof num != 'number' || num < 0) {
        return 'Input Error, Please Enter a Number';
    }
    else {
        if (num <= 100) {
            cost = num * 5000;
            return cost;
        }
        else if (100 < num && num <= 200) {
            members = num - 100;
            cost = (members * 4000) + (100 * 5000);
            return cost;
        }
        else {
            members = num - 200;
            cost = (members * 3000) + (100 * 4000) + (100 * 5000);
            return cost;
        }
    }
}

const myNumber = picnicBudget(5);
console.log('3:', myNumber);