type Bilal = [string, number?]

let name1: Bilal = ["bils"]

function user(a: number, b=3) {

    if (b) {
        return a + b
    } else {
        return a
    }

}
user(2)
// let userINput:Function = function(a:number,b:number):number{
//     return a+b
// }
// userINput()