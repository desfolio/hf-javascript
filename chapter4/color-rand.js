function colorRand() {
    var color = ["red", "blue", "yellow", "white", "green"];
    var num = [1, 5, 0, 8, 10, 20, 40, 99];

    var randColor = Math.floor(Math.random() * color.length);
    var randNum = Math.floor(Math.random() * num.length);
    
    alert(color[randColor] + num[randNum]);
}

colorRand();
colorRand();