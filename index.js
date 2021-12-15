// anime_cards = document.querySelectorAll(".anime-card");

// anime_cards.forEach(function(anime_card) {
//     anime_card.addEventListener("mouseover", function(event) {
//         console.log("hovered on + " + anime_card)
//         this.classList.add("anime-card-mouseover");
//         console.log(this.classList)
//     })
// })

// anime_cards.forEach(function(anime_card) {
//     anime_card.addEventListener("mouseout", function(event) {
//         console.log("out from + " + event.target)
//         this.classList.add("anime-card-mouseout");

//         console.log("time start");
//         setTimeout(function() {
//             console.log("time end");
//             anime_card.classList.remove("anime-card-mouseover");
//             anime_card.classList.remove("anime-card-mouseout");
//             console.log(anime_card.classList)
//         }, 500);
//     })
// })


// navbar = document.getElementById("navbar");
// console.log(navbar.style)

download_icons = document.querySelectorAll(".fa-download")
download_icons.forEach(function(download_icon) {
    download_icon.addEventListener("click", function(event) {
        this.classList.add("download-icon-clicked");

        setTimeout(function() {
            download_icon.classList.remove("download-icon-clicked");
        }, 300);
    })
})
heart_icons = document.querySelectorAll(".fa-heart")

heart_icons.forEach(function(heart_icon) {
    heart_icon.addEventListener("click", function(event) {
        this.classList.toggle("fas");
        this.classList.toggle("far");

        this.classList.add("download-icon-clicked");

        setTimeout(function() {
            heart_icon.classList.remove("download-icon-clicked");
        }, 300);
    })
})

