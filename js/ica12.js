let myData = {};  

// function declaration for producing a fact every time button is clicked //
function getFact(){
fetch('https://catfact.ninja/fact') //fetches from the API; fetch returns a random quote //
    .then(res =>{                   // if the resolved is good, return the json info //
        if(res.ok){
            return res.json();
        }else{                     // if resolved is bad, return whole response // 
            console.log(res);
        }
    }).then(res => {                // if response is resolved, myData; specifically the id under "fact" in HTML //
        myData = res;
        console.log(myData);
        document.getElementById("fact").innerHTML = myData.fact;
    })
    .catch(error => {console.log(error)})   // if response is rejected, generate error code //
}

getFact();  // produces a fact when website opened without having to press button //

//Event listener for button clicked// 
document.getElementById("generate").addEventListener("click", e=> {getFact();})

console.log(myData);

function displayRes(){
    console.log(myData);
}
