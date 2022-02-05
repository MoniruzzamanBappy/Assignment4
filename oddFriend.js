/* ============
Odd length Friend Name
============ */

function oddFriend(names) {
    let name = '';
    for (const nam of names) {
        if (typeof nam != "string") {
            return 'Input Error, Please Enter an Array of string'
        }
        else {
            if (nam.length % 2 != 0) {
                name = nam;
                return name;
            }
        }
    }
    return 'There is no name that have odd length';
}

const myFriend = ['bappy', 'aman', 'himel', 'sajib', 'opu'];
const myOdd = oddFriend(myFriend);
console.log('4:', myOdd);