// Write code to create a function that accepts a string and returns an acronym for the given string

// var acronymBuilder = function(str) {};

var acronymBuilder = (str) => {
    let splitString = str.split(" ");
    let acronym = "";
    for (i=0; i<splitString.length; i++){
        acronym = acronym + splitString[i][0];
        // acronym = acronym + splitString[i].slice(0,1);
    }
    console.log(acronym);

};

acronymBuilder("see you soon")
