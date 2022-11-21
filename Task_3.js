let promise1 = new Promise((resolve, reject) => {
    let x = 3;
    x = x * 9
    if (x / 3 < 43) {
        resolve("The number is less than 2");
    }
    else {
        reject("I have entered wrong number");
    }
});

let promise2 = new Promise((resolve, reject) => {
    let string = "raza";
    resolve("String is " + string);
});


let promise3 = new Promise((resolve, reject) => {
    let gender = "female";
    if (gender != "male") {
        resolve("The person is not authorized");
    } else {
        reject("The person is authorized");
    }
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log("All promises worked:" + values);
}).catch((error) => {
    console.log(error);
});
