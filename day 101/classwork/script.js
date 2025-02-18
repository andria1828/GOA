let goa = {
    name: 'goa',
    courses: ['JavaScript', 'Python', 'HTML & CSS'],
    socialLink: 'htpsgoa',
    rev: {
      rv1: {
        name: 'John Doe',
        status: 'parent',
        review: 'Gredasds.'
      },
      scnd: {
        name: 'akhb',
        status: 'child',
        review: 'Lsda'
      },
      thrd: {
        name: 'Sam Brown',
        status: 'parent',
        review: 'Verhahdhdcturgded.'
      },
      fort: {
        name: 'Andria Kobaxa',
        status: 'child',
        review: 'Mgfgasaf'
      }
    }
};

console.log(Object.entries(goa));

console.log(Object.keys(goa));

console.log(Object.values(goa));


console.log(goa.hasOwnProperty('fsdf')); 
console.log(goa.hasOwnProperty('fsdsf'));

const ds = { member: 'Gold Member' };
const dasd = { ...goa, ...ds };
console.log(dasd);

Object.freeze(goa);

console.log(Object.isFrozen(goa)); 
