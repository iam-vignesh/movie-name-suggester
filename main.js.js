$("#plot-header").hide();  
$("#imbd-header").hide(); 
 



$("html").click(function(){

var movieName = ["Bad Boys for Life",	
"Sonic the Hedgehog",	
"Birds of Prey",
"Dolittle",
"The Invisible Man",
"The Call of the Wild",
"Onward",
"Tenet",
"The Croods: A New Age",
"Wonder Woman 1984",
"The Murder of Nicole Brown Simpson",
"The Grudge",
"The Invisible Man",
"All the Bright Places",
"Wendy",
"Guns Akimbo",
"The Call of the Wild",
"The Last Thing He Wanted",
"Pieces of a Woman",
"Inception",
"Departed",
"Friends",
"Prestige",
"Interstellar",
"kabir singh",
"Casino Royale",
"Sherlock Holmes",
"Django Unchained",
"365 days",
"Addicted",
"Kill Bill",
"Home Alone",
"Cast Away",
"Forrest Gump",
"Reservoir Dogs",
"Up",
"Rocky",
"Memento",
"Seven",
"Dunkirk",
"Swat",
"Big fish",
"Extraction",
"Ava",
"Hook",
"Goodfellas",
"God father",
"The Social Network"
]

var randName = Math.floor(Math.random() * (movieName.length));
var randomName = (movieName[randName]);
var url = $.get("https://www.omdbapi.com/?i=tt3896198&apikey=979395e0&t="+randomName)
  .then((response) => {
    console.log(response);
    document.getElementById("movie name").innerHTML = response.Title;
    document.getElementById("plot").innerHTML = response.Plot;
    document.getElementById("imdb").innerHTML = response.imdbRating;
    $("#plot-header").show(); 
    $("#imbd-header").show();    
  });
  });


