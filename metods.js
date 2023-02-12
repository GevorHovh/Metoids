let push = [1, 5 , 8 , 7 , 9 , 6];
let pu = push.push(5)
console.log(pu);

let pop = [4,5,5,8,4,2,2,5,4]
let po = pop.pop()
console.log(pop, po);

let shift = [5,7,8,1,3,4,6];
let shi = shift.shift();
console.log(shi, shift);

let unshift = [5,7,8,1,3,4,6];
let unshi = unshift.unshift(3);
console.log(unshi, unshift);

let char = "helloWorld";
let cha = char.charAt(4);
console.log(cha, char);
console.log(char.concat(cha));
console.log(char.includes("ll"));
console.log(char.indexOf("l"));
console.log(char.replace("ll", "dd"));
let spl = char.split("");
console.log(spl);
console.log(char.startsWith("h"));
console.log(char.toUpperCase());
let trim = "   bshbcsja  ";
console.log(trim.trim());
let num = [5,44,65,8];
console.log(num.reverse());
console.log(num.splice(0, 2));
let nums = [4, 7 , 5 , 2 , 6]
console.log(nums.join("/"));
const func = (elem, index, list)=> {
    console.log(elem, index, list);
}

nums.find(func);

let users = [
    {
        name: "Gevor",
        age: 18,
        surename: "Hovhannisyan"
    },
    {
        name: "Hrant",
        age: 20,
        surename: "Kirakosyan"
    },
    {
        name: "Hovo",
        age: 25,
        surename: "Darbinyan"
    }
]
/*
const getN = (el,index,list)=> {
    if(el.name == "Gevor" && el.age == 18) return true;
    return false;
}

console.log(users.find(getN));
*/
/*
console.log(users.findIndex((el, index, list) => {
   return el.age > 13 && el.age < 20
}));
*/;
/*
const f = users.filter((elem, index, list) => {
    return elem.age > 18 
})

console.log(f);
*/
/*
const h = users.map((el, index, list) => {
    return {
        name: el.name,
        age: el.age+20
    }
})
console.log(h);
*/
/*
function Tangaran(name, age) {
    this.name = name;
    this.age = age
}

const tangarans = ["M.Avetisyan", "M.Mkrtchyan", "Aslamazyanner", ];

const getTang = tangarans.map((el) => {
    return new Tangaran(el)
})
console.log(getTang);
*/

const red = users.reduce((acc, el, index, list) => {
    return acc + el.age;
},0)

console.log(red);