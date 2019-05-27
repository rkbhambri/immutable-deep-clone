const getDetails = {
    firstName: 'Ram',
    lastName: 'Krishan',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    address: {
        first: '1',
        second: {
            second1: '2'
        }
    }
};

function deepClone(from) {
    let to = {};
    for (let key of Object.keys(from)) {
        if (typeof (from[key]) === 'object') {
            to[key] = deepClone(from[key]);
        } else {
            to[key] = from[key];
        }
    }
    return to;
};

const newObj = deepClone(getDetails);

newObj.address.second.second1 = '21';

console.log('==poken==', getDetails);
console.log('===new==', newObj);
