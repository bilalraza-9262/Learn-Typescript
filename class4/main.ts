let message: string = "my name is ";
let myName: string = "Bilal";

console.log(`${message} ${myName}`);


let ternory: string | boolean = myName ? "true" : message ? "true" : false;

console.log(ternory);

if (myName) {
    if (message) {
        console.log("true");
    } else {
        console.log(false);
    };
} else {
    console.log("false");
};

console.log("my na mes \rbilal");

// STRING METHOD IN TS

let my_message:string ="Hello World    ";

//strings are immutatable
//for length
console.log(my_message.length);

console.log(my_message.toLowerCase());

console.log(my_message.toUpperCase());

console.log(my_message.charAt(0));

console.log(my_message.startsWith("H"));

console.log(my_message.charCodeAt(0));

console.log(my_message.split(""));

 let my_copy:string = my_message.slice(-5)

 console.log(my_copy);
 console.log(my_message.length);
 
 console.log(my_message.trim().length);

 console.log(my_message.includes("h"));
 console.log(my_message.indexOf("H"));
 
 console.log(my_message.lastIndexOf("o"));
 
 console.log(my_message.replace("Hello","Hy"));

 let new_message:string = " Bilal";
 console.log(my_message.concat(new_message));
 console.log(my_message.repeat(2));
 
 let my_number=20
 let num2=30
 my_number.toString()
 console.log(num2 + my_number);
 