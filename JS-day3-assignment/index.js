//functions


// function doSomething(name,surname)
// {
//     console.log("My name is ", name, surname);

//     // return "Sakshi";
// }

// //  let data=doSomething();
// //  console.log(data);


// doSomething("Sakshi","Sawarkar")




// function dream(){
//     console.log("Hii, I am Sakshi");
// }



// console.log(document.getElementById('one').innerText="Hii Everyone"); 


// document.getElementById('one') 




// console.log(document.getElementById('two').innerText="Hii Guys"); 
// console.log(document.getElementById('two').innerHTML="<h1>Hii Guys</h1>");




// alert("Battery is Low")




// function tricks(){
// console.log(document.getElementById('two').innerHTML="<h1>Hii Guys</h1>"); 

// }


// function getName(){
//     let data=document.getElementById('inp').value;
//     console.log(data);
// }




function getName(){
    let data=document.getElementById('inp').value;
    // document.getElementById('two').innerHTML=data;

    // document.getElementById('two').innerHTML=`<h2>${data}</h2>`;

    // document.getElementById('two').innerHTML=
    // document.getElementById('two').innerHTML+`<h2>${data}</h2>`;


    document.getElementById('two').innerHTML=
    document.getElementById('two').innerHTML+`<h2 class='Teddy'>${data}</h2>`;
    document.getElementById('inp').value="";


    
}


function ChangeColor(){
    document.getElementById('two').style.backgroundColor="darkblue";

}
