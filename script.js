var todayDate = moment().format("MMMM Do YYYY");
$("#date").text(todayDate);

var listItem = ["","","","","","","","",""];
var first = document.getElementById("list1");

renderlist();

function renderlist(){
    var list1 = localStorage.getItem("list1");
    
    if(list1 === null){
        return;
    }
    first.text = list1;
       
    }


$("#button-addon2").on("click",function(event){
    // event.preventDefault();
    var list1 = document.getElementById("list1").value;

    localStorage.setItem("list1",JSON.stringify(list1));

    renderlist();


});

