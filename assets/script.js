/* function helloWorld() {
    console.log("Hello, world, I am a function!")
}
*/

const topics = ['HTML', 'CSS', 'GIT', 'JavaScript',];
const randomTopic = topics[Math.floor(Math.random() * topics.concat.length)];
function listTopics(){

for (let x = 0; x < topics.length; x++){
    console.log(topics[x]);
}
}

function selectTopic(){

if (randomTopic === 'HTML') { 
console.log("Let's study HTML!");

} else if (randomTopic === 'CSS') {
console.log("Let's study CSS!");

} else if (randomTopic === 'GIT') {
    console.log("Let's study GIT!");

} else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
} else {
    console.log('Please try again!');
}
}
console.log('Here are the topics we learned through Prework:')
listTopics();
console.log('Which topic should we study first?');
selectTopic();