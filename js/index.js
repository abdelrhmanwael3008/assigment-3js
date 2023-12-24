

var inputname=document.getElementById("inputname");
var inputurl=document.getElementById("inputurl");
var sites;
var alert = document.getElementById("box")


list=[];

if(localStorage.getItem("products")!=null){
  list=JSON.parse(localStorage.getItem("products"));
    dispalydata();
}



function additem(){
if(validationurl()){
    
   var sites={
    name:inputname.value,
    url:inputurl.value

   }

   list.push(sites)
   clearitem()
   dispalydata(list)
    localStorage.setItem("products",JSON.stringify(list))
}
else{
    alert.classList.remove("d-none")
}
}

function clearitem(){
    inputname.value=""
    inputurl.value=""
    
}


function dispalydata(){
    
    var data="";
    for(i=0  ; i<list.length  ; i++  ){

        data+=` <tr>
        <td>${i}</td>
        <td>${list[i].name}</td>
       <td><a target="_blank" href="https://${list[i].url}/"><button class="btn btn-visit "><i class="fa-solid fa-eye pe-2 "></i>Vist </button> </a> </td>
       <td> <button onclick="deleteitem(${i})"  class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
        
    </tr>`
    
    }
    document.getElementById("tbody").innerHTML=data;
    // console.log(readitem);
}

function deleteitem(i){

list.splice(i,1)
localStorage.setItem("products",JSON.stringify(list))
    dispalydata()
}
// console.log(list);

// /^www\./

function validationname(){

   var text=inputname.value;
   var ragexname = /^[a-z]{3,10}$/i;

   if(ragexname.test(text)){
    inputname.classList.add("is-valid");
    inputname.classList.remove("is-invalid");
   }
   else{
    inputname.classList.add("is-invalid");
    inputname.classList.remove("is-valid");
   }
}
function validationurl(){

    var text=inputurl.value;
    var ragexurl = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/i;
 
    if(ragexurl.test(text)){
     inputurl.classList.add("is-valid");
     inputurl.classList.remove("is-invalid");
     return true;
    }
    else{
     inputurl.classList.add("is-invalid");
     inputurl.classList.remove("is-valid");
     return false;
    }
 }



 function closeAleret() {
    alert.classList.add("d-none")
 }