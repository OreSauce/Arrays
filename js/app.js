
let memberDetail = [
    
    {
        name: "Oreoluwa Oloyede",
        image: "img/oreoluwa.jpg",
        bestfood: "Egusi Soup/ Amala",
        track: "Front End",
        bestmovie: "None",
        complexion: "dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "26",
    },

    {
        name: "Adeyemi-Dada Tolulope",
        image: "img/tolu.jpg",
        bestfood: "Pounded Yam",
        track: "Front End",
        bestmovie: "The Irishman",
        complexion: "dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "28",
    },
    
    {
        name: "Chukwu Cynthia Oluchukwu",
        image: "img/cynthia.jpg",
        bestfood: "Spagetti",
        track: "Front End",
        bestmovie: "BBF",
        complexion: "Fair",
        learnt: "HTML, CSS, Bootstrap",
        age: "28",
    },    
    
    {
        name: "Balikis Ajoke Ekun",
        image: "img/adejoke.jpg",
        bestfood: "Spaghetti",
        track: "Front End",
        bestmovie: "Smart Money Woman",
        complexion: "Light Skinned",
        learnt: "HTML, CSS, Javascript",
        age: "28",
    },

    {
        name: "Adeleke Olalekan Daniel",
        image: "img/khalid.jpg",
        bestfood: "Marinated coochie",
        track: "Front End",
        bestmovie: "Queen of the damned",
        complexion: "dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "25",
    },

    {
        name: "Paul Nonso Ihejirika",
        image: "img/paul.jpg",
        bestfood: "Pounded Yam",
        track: "Front End",
        bestmovie: "The Irishman",
        complexion: "dark",
        learnt: "HTML, CSS, JS",
        age: "27",
    },
    
    {
        name: "Etinosa Oyema",
        image: "img/etinosa.jpg",
        bestfood: "Pounded Yam",
        track: "Front End",
        bestmovie: "The Irishman",
        complexion: "dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "28",
    },

    {
        name: "Tijani Idris",
        image: "img/tj.jpg",
        bestfood: "Spagetti/Okro",
        track: "Front End",
        bestmovie: "Game of Throne",
        complexion: "dark",
        learnt: "HTML, CSS, Bootstrap",
        age: "28",
    },
    
    {
        name: "Abdur-roheem Sherif-deen",
        image: "img/simple.jpg",
        bestfood: "Eba and Egusi",
        track: "Front End",
        bestmovie: "Hercules",
        complexion: "Chocolate",
        learnt: "HTML, CSS, Bootstrap",
        age: "28",
    },

    {
        name: "David Marvelous",
        image: "img/mavdavis.jpg",
        bestfood: "Rice",
        track: "Front End",
        bestmovie: "Teen Wolf",
        complexion: "dark",
        learnt: "HTML, CSS, JS",
        age: "22",
    },
]

         
let row = document.querySelector(".row");

for (let i = 0; i < memberDetail.length; i++) {
    let card = '<div class="col-lg-4 col-md-6 col-12">' +
                   '<div class="card">' +
                        '<img class="image-fluid" src="' + memberDetail[i].image + '" alt="" width="25%">' +
                        '<div class="card-body text-center">' +
                            '<h3 class="card-title text-dark">'+'Name: ' + memberDetail[i].name + '</h3>' +
                            '<p class="card-info text-dark">'+'Best Food: ' + memberDetail[i].bestfood + '</p>' +
                            '<p class="card-info text-dark">'+'Track: ' + memberDetail[i].track + '</p>' +
                            '<p class="card-info text-dark">'+'Best Movie: ' + memberDetail[i].bestmovie + '</p>' +
                            '<p class="card-info text-dark">'+'Complexion: ' + memberDetail[i].complexion + '</p>' +
                            '<p class="card-info text-dark">'+'Learning: ' + memberDetail[i].learnt + '</p>' +
                            '<p class="card-info text-dark">'+'Age: ' + memberDetail[i].age + '</p>' +
                            '<button onclick="clickMe(' + i + ')">Click Here</button>' +
                        '</div>' +
                    '</div>' +
                '</div>';

                

    row.innerHTML += card;
   
};
let alertMessage = "Thank you for always smiling,"

function clickMe(i) {
    
    alert(alertMessage + " " + memberDetail[i].name + " " + "It’s contagious");


}
