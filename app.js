// FILTERING ITEMS !!!!!!!!!!!!!!!!!!!!!
// const buttons = document.querySelectorAll(".filter-btn");
// const items = document.querySelectorAll(".filter-items");

// // Function to filter items based on a condition
// function filterItems(button) {
//   for (let item of items) {
//     if (item.classList.contains(button.id)) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   }
//                                  // const filteredItems = items.filter((item) => item.class === category);
// }

// Example usage: Filter items by 'Category A'
// const filteredItems = filterItems("category-a");
// console.log(filteredItems);
// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     filterItems(button);
//   });
// }

/// API SECTION ////
const accessKey = "fjm7bPIzfPslfxU5UpFNPsoopaBeRiuoaDB3GLKNOD4";
const form = document.querySelector("form");
const input = document.querySelector("#search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.querySelector("#show-more-button");
const main = document.querySelector(".main");

let inputData = "";
let page = 1;
let url = "";
let newUrl = "";
let key = false;

async function searchImages() {
  inputData = input.value;
  if (key === true) {
    url = newUrl;
  } else {
    url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12`;
  }

  // !!! FIRST, I TRIED THAT USING FETCH, BUT I'D LIKE TO USE AXIOS MORE, SO I'M USING AXIOS!!!
  // const response = await fetch(url);
  // const data = await response.json();
  // const results= data.results;

  const response = await axios.get(url);
  const results = response.data.results;
  console.log(response);

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  if (results < 1) {
    const displayText = document.createElement("h3");
    displayText.textContent = "No results found, try something different!";
    displayText.style.textAlign = "center";
    searchResults.appendChild(displayText);
  }

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("searchResult");
    const imageDescription = document.createElement("div");
    imageDescription.classList.add("description");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    const imageText = document.createElement("p");
    imageText.textContent = "by";
    imageText.style.fontStyle = "italic";
    const imageOwner = document.createElement("p");
    imageOwner.textContent = `by ${result.user.name}`;
    imageOwner.style.fontStyle = "bold";
    const imageDownload = document.createElement("div");
    const downloadUrl = result.links.download;
    imageDownload.innerHTML = `<a target="_blank" href=${downloadUrl} download="downloaded_image.jpg" timeout="2s"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" id="downloadSVG">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
  </svg></a>
   `;
    imageDownload.classList.add("download-btn");
    imageDownload.style.height = "30px";
    imageDownload.style.width = "30px";
    imageWrapper.appendChild(image);
    imageDescription.appendChild(imageLink);
    // imageDescription.appendChild(imageText);
    imageDescription.appendChild(imageOwner);
    imageWrapper.appendChild(imageDescription);
    imageWrapper.appendChild(imageDownload);
    searchResults.appendChild(imageWrapper);
  });

  page++;
  main.style.display = "block";

  if (page > 1) {
    showMore.style.display = "block";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
showMore.addEventListener("click", () => {
  searchImages();
});

const blackBtn = document.querySelector(".filter-image.black");
const whiteBtn = document.querySelector(".filter-image.white");
const yellowBtn = document.querySelector(".filter-image.yellow");
const orangeBtn = document.querySelector(".filter-image.orange");
const redBtn = document.querySelector(".filter-image.red");
const purpleBtn = document.querySelector(".filter-image.purple");
const magentaBtn = document.querySelector(".filter-image.magenta");
const greenBtn = document.querySelector(".filter-image.green");
const tealBtn = document.querySelector(".filter-image.teal");
const blueBtn = document.querySelector(".filter-image.blue");

blackBtn.addEventListener("click", () => {
  key = true;
  newUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12&color=black`;
  page = 1;
  searchImages();
  key = false;
});
whiteBtn.addEventListener("click", () => {
  key = true;
  newUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12&color=white`;
  page = 1;
  searchImages();
  key = false;
});
yellowBtn.addEventListener("click", () => {
  key = true;
  newUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12&color=yellow`;
  page = 1;
  searchImages();
  key = false;
});
orangeBtn.addEventListener("click", () => {
  key = true;
  newUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12&color=orange`;
  page = 1;
  searchImages();
  key = false;
});
redBtn.addEventListener("click", () => {
  key = true;
  newUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12&color=red`;
  page = 1;
  searchImages();
  key = false;
});
purpleBtn.addEventListener("click", () => {
  key = true;
  newUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12&color=purple`;
  page = 1;
  searchImages();
  key = false;
});
magentaBtn.addEventListener("click", () => {
  key = true;
  newUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12&color=magenta`;
  page = 1;
  searchImages();
  key = false;
});
greenBtn.addEventListener("click", () => {
  key = true;
  newUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12&color=green`;
  page = 1;
  searchImages();
  key = false;
});
tealBtn.addEventListener("click", () => {
  key = true;
  newUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12&color=teal`;
  page = 1;
  searchImages();
  key = false;
});
blueBtn.addEventListener("click", () => {
  key = true;
  newUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12&color=blue`;
  page = 1;
  searchImages();
  key = false;
});
// NUMBERS SECTION

let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-value"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.innerText = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
