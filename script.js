async function traerPerritos() {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const responseData = await response.json();
        const infoPerro = responseData.message;
        const container = document.querySelector("#container");

        Object.keys(infoPerro).forEach(async (raza) => {
            const div = document.createElement("div");
            const div_h1 = document.createElement("div");
            const h1 = document.createElement("h1");
            const div_img = document.createElement("div");
            const img = document.createElement("img");
            
            h1.innerText = raza;
            div_h1.appendChild(h1);
            div.appendChild(div_h1);
            div_h1.classList.add('col-span-1', 'mx-auto','h-16');
            h1.classList.add('font-open-sans','text-2xl', 'font-semibold');

            const imgDog = await fetch(`https://dog.ceo/api/breed/${raza}/images/random`);
            const imgResponse = await imgDog.json();
            const dogImg = imgResponse.message;

            img.src = dogImg;
            img.alt = raza;
            div_img.appendChild(img);
            div.appendChild(div_img);
            img.classList.add('rounded-lg')
            div_img.classList.add('col-span-1', 'w-auto', 'max-h-52','h-auto','flex', 'justify-center');

            container.appendChild(div);

            div.classList.add('col-span-1', 'grid', 'grid-cols-1','border','border-color-secondary','rounded-lg','shadow-lg');
        });
}

function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const divs = document.querySelectorAll("#container > div"); 

    divs.forEach(div => {
        const raza = div.querySelector("h1").innerText.toLowerCase(); 
        if (raza.includes(input) || input === "") { 
            div.style.display = "block"; 
        } else {
            div.style.display = "none";
        }
    });
}

document.getElementById("searchInput").addEventListener("input", search);

traerPerritos();
