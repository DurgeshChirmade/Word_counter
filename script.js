window.onload= function(){
let Textbox = document.getElementById("textbox");

Textbox.addEventListener("input", function(){
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();  //Remove space from front & end.
    let words = text.split(" ");
    let cleanList = words.filter(function(elm){
        return elm != "";
    });
    document.getElementById("word").innerHTML = cleanList.length;
});
}