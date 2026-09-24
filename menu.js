//Search filter

const searchInput = document.querySelector(".search-container input");
searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase();

    const filteredItems = itemList.filter(item => {
        return item.name.toLowerCase().includes(searchText);
    });

    displayItems(filteredItems);

});


// Categories filter

const categories = document.querySelectorAll(".category");


// Menu items

const foodList = document.querySelector(".food-list");

function displayItems(items) {

    foodList.innerHTML = "";

    items.forEach(item => {

        const foodCard = document.createElement("article");
        foodCard.classList.add("food-card");


        // Image

        const foodImage = document.createElement("img");

        foodImage.classList.add("food-image");

        foodImage.setAttribute("src", item.image);
        foodImage.setAttribute("alt", item.name);

        foodCard.appendChild(foodImage);


        // Food info

        const foodInfo = document.createElement("div");

        foodInfo.classList.add("food-info");

        foodCard.appendChild(foodInfo);


        // Title row

        const foodTitleRow = document.createElement("div");

        foodTitleRow.classList.add("food-title-row");

        foodInfo.appendChild(foodTitleRow);


        // Food title

        const foodTitle = document.createElement("h2");

        foodTitle.textContent = item.name;

        foodTitleRow.appendChild(foodTitle);


        // Rating

        const rating = document.createElement("span");

        rating.classList.add("rating");

        rating.textContent = "5.0";

        foodTitleRow.appendChild(rating);


        // Star

        const star = document.createElement("i");

        star.classList.add("fa-solid");
        star.classList.add("fa-star");

        rating.appendChild(star);


        // Price

        const price = document.createElement("div");

        price.classList.add("price");

        price.textContent = `₦${item.price.toLocaleString()}`;

        foodInfo.appendChild(price);


        // Description

        const description = document.createElement("p");

        description.classList.add("description");

        description.textContent = item.description;

        foodInfo.appendChild(description);


        // Add completed card to the page

        foodList.appendChild(foodCard);

    });
}


// Display all items when page loads

displayItems(itemList);


// Category click

categories.forEach(category => {

    category.addEventListener("click", () => {

        // Remove active from all categories
        categories.forEach(categoryItem => {
            categoryItem.classList.remove("active");
        });

        // Add active to the category we clicked
        category.classList.add("active");

        const categoryName = category.querySelector("span").textContent;

        const selectedCategory = categoryName.toLowerCase();

        const filteredItems = itemList.filter(item => {
            return item.category.includes(selectedCategory);
        });

        displayItems(filteredItems);

    });

});