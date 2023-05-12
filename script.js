// create a div element
let d = document.createElement("div");
d.setAttribute("class","container")
document.body.append(d);

//another div
let d1 = document.createElement("div");
d1.setAttribute("class","content")
document.body.append(d1);
d.append(d1)

//another div
let d2 = document.createElement("div");
d2.setAttribute("id","display")
document.body.append(d2);
d.append(d2)

//create hr
let hr = document.createElement("hr")


//create a unorderlist
let ul = document.createElement("ul");
ul.setAttribute("class","unorder-list");
ul.setAttribute("style","list-style-type:none");
d1.append(ul);


//get value and append input
function getvalue(){
  var value=document.getElementById("num").value;
  for(var i=1; i<=value; i++){
  ul.innerHTML+=`<li class="listitem"><input class="input" id="input`+i+`" type="button" value="`+i+`" onclick="book(`+i+`)"</li>`
}
}

// for(var i=2; i<=10; i++){
//   ul.innerHTML+=`<li class="listitem"><input class="input" id="input`+i+`" type="button" value="`+i+`" onclick="book(`+i+`)"</li>`
// }



//create br
let br = document.createElement("br");

        
//fetch api
   
async function book(id){
  //alert("hello")
  console.log(id)
    let url =  "https://anapioficeandfire.com/api/books/";
     try{
        let api = await fetch(`${url}${id}`);
        let data = await api.json();
        console.log(data);
        renderdata(data); 
    }
    catch(error){
      hiddeshow()
    }
}

//hidden
function hiddeshow(){
    let element = document.createElement("div");
    element.setAttribute("class","no-data")
    d.append(element)
    element.innerText="Something went wrong"
}


function renderdata(data=[]){

  d2.innerHTML = '';
  
  //create div
  let d3 = document.createElement("div")
  let d4 = document.createElement("div")
  let d5 = document.createElement("div")
  let d6 = document.createElement("div")
  let d7 = document.createElement("div")
  let d8 = document.createElement("div")
  let d9 = document.createElement("div")
  let d10 = document.createElement("div")
  // let d;
  // for(var j=3; j<=10; j++){
  //    d`j` = document.createElement("div");
  // }
  
  
  //give value to div
  d2.innerHTML+=`<br>`
  d3.innerText+=`Name: ${data.name}`;
  d4.innerText+=`Isbn: ${data.isbn}`;
  d5.innerText+=`No.Of.Pages: ${data.numberOfPages}`;
  d6.innerText+=`Author of the book: ${data.authors}`;
  d7.innerText+=`Publisher Name: ${data.publisher}`;
  d8.innerText+=`Released Date: ${data.released}`;
  d9.innerText+=`character :`;
  d10.innerText+=`Book: ${data.url}`;


  //append
  // for(var k=3; k<=8; k++){
  //   d2.innerHTML+=`<br>`;
  //   d2.append(dk)
  // }
  d2.append(d10)
  d2.innerHTML+=`<br>`
  d2.append(d3)
  d2.append(br)
  d2.append(d4)
  d2.innerHTML+=`<br>`
  d2.append(d5)
  d2.innerHTML+=`<br>`
  d2.append(d6)
  d2.innerHTML+=`<br>`
  d2.append(d7)
  d2.innerHTML+=`<br>`
  d2.append(d8)
  d2.innerHTML+=`<br>`
  d2.append(d9)
  for(var i=0; i<5; i++){
    d2.append(`${data.characters[i]}`)
    d2.innerHTML+=`<br>`
  }
  d2.innerHTML+=`<br>`
}
