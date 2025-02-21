// let buttons = document.getElementsByClassName("btn")
// let display = document.getElementById("display")
// let equals = document.getElementById("equals")
// let clear = document.getElementById("clear")

// for (var i = 0; i < buttons.length; i++){
//     buttons[i].addEventListener("click", (e) => {
//         display.value += e.target.innerText
//     })
// }


// equals.addEventListener ("click", () => {
//     let value = eval(display.value)
//     display.value = value
// })


// clear.addEventListener("click", () => {
//     display.value = "0"
// })






// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello")
// }, 4000);

// console.log("three");
// console.log("four");


// setTimeout(() => {
//     console.log("hello")
// }, 3000)

// function first() {
//     setTimeout(() => {
//         console.log("First step done");  
//     }, 1000);
// }

// function second() {
//     setTimeout(() => {
//         console.log("Second step done");
        
//     }, 1000);
// }

// function third() {
//     setTimeout(() => {
//         console.log("Third step done");
        
//     }, 1000);
// }

// first(() => {
//     second(() => {
//         second(() => {
//             second(() => {
//                 second();
//             });
//         });
//     });
// })




// let promise = new Promise((resolve, reject) => {
//     reject("error")
// })




    // function first1() {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //           console.log("First step done");  
    //           resolve("success")
    //       }, 5000);
    //      })
    //   }
    //   function first2() {
    //     return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //         console.log("second step done");  
    //           resolve("success")
    //       }, 5000);
    //      })
    //   }



    //   first1().then((res) => {
    //     first2().then((res) => {
    //         console.log("ok")
    //     })
    //   })

    // first1()
    // .then((res) => {
    //     return first2()
    // })
    // .then((res) => {
    //     console.log ("done")
    // })



    


    // let a = fetch("https://fakestoreapi.com/products")
    // a.then((data) => {
    //     return data.json()
    // }).then((res) => {
    //     console.log(res)
    // })


    
    // let inputvalue = document.getElementById("a")
    // let products = ["fridge", "machine", "fans", "microwave", "ac", "printer", "cooler"]


    // inputvalue.addEventListener ("keyup", (e) => {
    //     let a = products.find((value) => {
    //         return value.toLowerCase().includes(e.target.value.toLowerCase())
    //     })
    //     console.log(a);
    //     if (a) {
    //         ""
    //     }else{
    //         alert("No record found")
    //     }
    // })


    let inputvalue = document.getElementById("a")
let products = [
        {name: "laptop", price: 1500, category: "electronics" },
        { name: "phone", price: 5000, category: "electronics" },
        { name: "headphones", price: 200, category: "accessories" },
        { name: "game", price: 500, category: "gaming" },
        { name: "watch", price: 500, category: "accessories" },
        { name: "table", price: 800, category: "furniture" },
        { name: "chair", price: 1000, category: "furniture" },
        { name: "cloth", price: 1500, category: "fashion" },
        { name: "shoes", price: 1200, category: "fashion" },
        { name: "novel", price: 100, category: "books" }
]



inputvalue.addEventListener("keyup", (e) => {
    let filteredproduct = products.filter((value) => {
        return (
            value.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            value.category.toLowerCase().includes(e.target.value.toLowerCase())
            && value.price >= 100
        )
    })
    console.clear();
    console.log(filteredproduct);
})