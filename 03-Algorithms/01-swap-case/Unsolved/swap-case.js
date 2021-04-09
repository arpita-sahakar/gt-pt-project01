// Write code to create a function takes a string and returns the string with all of the letter cases swapped

// var swapCase = function(str) {};

const swapCase = str =>{
    let swap = "";
    for (i=0; i<str.length; i++){

        if(str[i].toLowerCase() === str[i]){
            swap = swap + str[i].toUpperCase()
        } else if( str[i].toUpperCase() === str[i]){
            swap = swap + str[i].toLowerCase()
        }
    }
    console.log(swap);
    return swap
};

const result = swapCase("ArpiTakar")
