/*
Title:  Compliment Generator
Author: Everlyn loza Leon
*/

var DescriptorA = [
    "beautiful ", "brilliant ", "bright ", "charming ", "clever ", "compassionate ", "considerate ", "confident ",
    "dazzling ", "dreamy ", "earnest ", "elegant ", "enchanting ", "exquisite ", "extraordinary ", "fabulous ",
    "fantastic ",
    "flourishing  ", "funny ", "fascinating  ", "fearless  ", "glamorous  ", "glowing  ", "graceful  ", "gorgeous  ",
    "heartwarming  ",
    "humble  ", "helpful  ", "hilarious ", "impressive  ", "innovative  ", "invincible  ", "inspiring  ", "joyous  ",
    "kind "
];

var DescriptorB = [
    "legendary ", "lovely ", "luminous ", "loving ", "marvelous ", "magnificent ", "magic ", "mesmerizing ",
    "majestic ", "noble ", "neat", "outstanding ",
    "phenomenal  ", "pleasant  ", "passionate ", "quirky ", "reliable  ", "remarkable  ", "resilient  ", "respectful  ",
    "stunning ",
    "superb  ", "splendid  ", "spectacular  ", "stellar  ", "terrific  ", "trusting  ", "thoughtful ", "victorious   ",
    "wholesome  ",
    "wonderful  ", "wondrous  ", "wholehearted  ", "wise "
];

var noun = [
    "Person ", "Human ", "Cutie ", "Individual ", "Hooman ", "Charmer ", "Good-looker ", "Head-turner "
];

var buttonClick = document.getElementById("generateCompliment");

var buttonResetClick = document.getElementById("resetCompliment");

buttonClick.onclick = function() {
    document.getElementById("complimentArea").innerHTML = " ";
    var randFirst = DescriptorA[Math.floor(Math.random() * DescriptorA.length)];

    var randSecond = DescriptorB[Math.floor(Math.random() * DescriptorB.length)];

    var randThird = noun[Math.floor(Math.random() * noun.length)];

    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    randFirstCap = randFirst.capitalize();

    var addCompliment = document.getElementById("complimentArea");

    var newMessage = "You're a \n" + randFirstCap + " and " + randSecond + " " + randThird + "!\n" + "";

    complimentArea.innerHTML = complimentArea.innerHTML + newMessage;

    buttonClick.innerHTML = "More compliments!!";

};

buttonResetClick.onclick = function resetCompliment() {
    document.getElementById("complimentArea").innerHTML = " ";
};