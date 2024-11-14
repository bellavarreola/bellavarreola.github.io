let myData = {}

function fetchData() {
    comicNumber = Math.floor(Math.random() * 3000) +1;  // everytime you call myData, it changes because of the random element
    fetch(`https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`)  //replace number in URI with the dollar sign{name of variable 
    .then(res => {
        if(res.ok){                 //if data is okay, we pull the data from JSON through//
            return res.json();
        }
        else{                       // if data is not okay, return data that is wrong//
            console.log(res);
        }
} )

    .then(res => {
        myData = res;   //set myData equal to res
        console.log(myData);  //returns the data so we can see it
        
        // title
        document.getElementId("title").innerHTML = myData.title;  //use innerHTML for titles
        // image
        document.getElementId("comic").src = myData.img;   //use comic and img for images
        document.getElementId("comic").setAttribute("alt", myData.alt); // use comic and setAttribute
        // date
        let m = myData.month;      //define variables for each part of the date: use let element and then myData."part of date"
        let d = myData.day;
        let y = myData.year;

        document.getElementId("date").innerHTML = (m + "/" + d + "/" + y);  //use innerHTML for strings and use + to add the different parts of date
    }) //now all data is fetched

    .catch(error => {console.log(error)}); // catches errors if the response is rejected
}

fetchData();            //call the function above

document.getElementId("generate").addEventListener("click", e=> {fetchData();}) //when button is pressed, call function

// Returns a random integer from 0 to 99:
Math.floor(Math.random() * 100);