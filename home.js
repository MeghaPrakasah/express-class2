
//--05-01-2024

//promises example
//basic structure for promise

//const promise = new Promise((resolve,reject)=>{})
const names = fullName=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fullName === 'Megha') {
                resolve('Name is valid');
            }
            else {
                reject('Name is invaild');
            }
        }, 1000);
    })
}

const promise = names('Megha')
    .then((a) => { console.log(`Promise resolved : ${a}`) })
    .catch((b) => { console.log(`Promise rejected : ${b}`) });

console.log(promise);
