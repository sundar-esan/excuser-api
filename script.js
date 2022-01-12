

async function getdata(){

let excuse=document.getElementById('field').value;
 console.log(excuse);

 let  res=await fetch(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`)
 let  result =await res.json();
 console.log(result);

 let cate=result[0].category;
 console.log(cate);

 let exc=result[0].excuse;
 console.log(exc);

 document.getElementById('category').innerHTML=`Category:${cate}`;
 document.getElementById('excuse').innerHTML=`Excuse:${exc}`;
}