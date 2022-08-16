// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
const events = "surprise"
function writeCards(names, events) {
    let message = []
for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    message.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
}
return message;
}
writeCards(names, events);

let number = 10;
function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}