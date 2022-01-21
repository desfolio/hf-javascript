function colorRand() {
    var color = ["red", "blue", "yellow", "white", "green"];
    var num = [1, 5, 9, 8, 10, 20, 40, 99];

    randColor = Math.floor(Math.random * color.length);
    randNum = Math.floor(Math.random * randNum.length);
    
    console.log(randColor + " " + randNum);
}

colorRand() * 3;