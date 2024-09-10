//MAKING VIVO MOBILE SECTION

const vivoMobs = [
    {
        pageLink: "../vivot3.html",
        img: "VIVO Img/Vivo-CosmicBlue_e076c715-323f-4ea6-ba5f-65dbc2ed34ed.webp",
        name: "Vivo T3x 5G 8GB Ram, 128GB Storage",
        price: " Rs. 16,499.00",
        orgprice: " Rs. 20,499.00",

    },

    {
        pageLink: "../vivot2.html",
        img: "VIVO Img/vivot2.webp",
        name: "Vivo T2 Pro 5G 8GB Ram, 256GB Storage",
        price: "Rs. 23,999.00 ",
        orgprice: "Rs. 27,999.00",

    },

    {
        pageLink: "../vivov30.html",
        img: "VIVO Img/VivoV30e5G-VelvetRed.webp",
        name: "Vivo T3x 5G 8GB Ram, 128GB Storage",
        price: "Rs. 16,499.00",
        orgprice: "Rs. 20,499.00",

    },
    {
        pageLink: "../vivot3x.html",
        img: "VIVO Img/VivoT3x5G.webp",
        name: "Vivo T3x 5G 8GB Ram, 128GB Storage",
        price: "Rs. 16,499.00 ",
        orgprice: "Rs. 20,499.00",

    },
    {
        pageLink: "y200e.html",
        img: "VIVO Img/y200e.webp",
        name: "Vivo Y200e 5G 8GB Ram, 128GB Storage",
        price: "Rs. 20,999.00",
        orgprice: "Rs. 25,999.00",

    },
    {
        pageLink: "",
        img: "VIVO Img/VivoY200Pro5G-SilkGreen.webp",
        name: "Vivo Y200 Pro 5G 8GB Ram, 128GB Storage",
        price: "Rs. 24,999.00",
        orgprice: "Rs.29,999.00",

    },
    {
        pageLink: "",
        img: "",
        name: "",
        price: "",
        orgprice: "",

    },

]

const makeMobileCard = vivoMobs => {
    return `<div class="mobilebox">
            <a href="${vivoMobs.pageLink}">
                <img src="${vivoMobs.img}">
                <p>${vivoMobs.name}<br>
                ${vivoMobs.price}
                    <s style="font-size: x-small;">${vivoMobs.orgprice}</s>
                </p>
            </a>
        </div>`
}
const mobileContainer = document.querySelector('.mobilecontainer');

// mobileContainer.innerHTML =vivoMobs.map(vivoMobs => makeMobileCard(vivoMobs));

mobileContainer.innerHTML = vivoMobs.map(data => makeMobileCard(data));

