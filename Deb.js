const figures = document.querySelectorAll("figure");
const list = document.querySelectorAll("li");

list[0].addEventListener("click", () => {

    figures[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

list[1].addEventListener("click", () => {

    figures[4].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})

list[2].addEventListener("click", () => {

    figures[5].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})