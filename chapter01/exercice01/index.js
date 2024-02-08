
export function greetWorld() {
    return "Hey, world!"

}

export function greet(name) {
    return "hey, "+name+"!";
}


export function capitilizedGreet(name) {
 let capitilizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
 return "Hey, " + capitilizedName+"!"
}
