$("#plot-header").hide();  
$("#imbd-header").hide(); 
$("#lang-header").hide(); 

 



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
"fifty shades of grey",
"shame",
"Ala Vaikunthapurramuloo",
"Middle Class Melodies",
"Saw",
"hostel",
"Swat",
"Big fish",
"Extraction",
"Ava",
"Hook",
"Goodfellas",
"God father",
"The Social Network",
"Master",
"world famous lover",
"tamasha",
"ae dil hai mushkil",
"Parasite",
"Titanic",
"The Devil Wears Prada",
"Dilwale Dulhania Le Jayenge",
"The Grand Budapest Hotel",
"Jaws",
"96",
"Oru Pakka Kathai",
"Paava Kadhaigal",
"Soorarai Pottru",
"Darbar",
"Schindler's List",
"The Shining",
"Pride and Prejudice",
"Anbe Sivam",
"Thevar Magan",
"Asuran",
"Iruvar",
"Thani Oruvan",
"Vada Chennai",
"Aruvi",
"Kuruthipunal",
"Thillu Mullu",
"Taare Zameen Par",
"3 Idiots",
"Aparajito",
"Vikram Vedha",
"Drishyam",
"Andhadhun",
"Premam",
"Dhuruvangal Pathinaaru",
"Jigarthanda",
"Kahaani"
]

var randName = Math.floor(Math.random() * (movieName.length));
var randomName = (movieName[randName]);
var url = $.get("https://www.omdbapi.com/?i=tt3896198&apikey=979395e0&t="+randomName)
  .then((response) => {
    console.log(response);
    document.getElementById("movie name").innerHTML = response.Title;
    document.getElementById("plot").innerHTML = response.Plot;
    document.getElementById("imdb").innerHTML = response.imdbRating;
    document.getElementById("lang").innerHTML = response.Language;
    $("#plot-header").show(); 
    $("#imbd-header").show(); 
    $("#lang-header").show();   
  });
  });


