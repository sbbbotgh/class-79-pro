menu_list_array = ["Veg Margherita Pizza",//add more items
"Farm House",
"Peppy Paneer",
"Mexican Green Wave",
"Deluxe Veggie",
"Veg Extravaganza",
"CHEESE N CORN"];



function getmenu(){
var htmldata;
//Complete the code
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
}
htmldata=htmldata+"<li>"
document.getElementById("display_menu").innerHTML = htmldata;
}


function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code
menu_list_array.sort();
htmldata="<section class='cards'>"
for(i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">'
    +'<img src="images/pizzaImg.png" style="width: 80px; height: 70px;"/'
    + menu_list_array[i] + '</div>'
}
htmldata=htmldata+"<section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}



function add_top(){
//Complete the code
var item = document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}