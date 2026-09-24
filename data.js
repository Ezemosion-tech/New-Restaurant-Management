const itemList = [

    // =========================
    // SNACKS
    // =========================

    {
        name: "Mexican Appetizer",
        price: 1000,
        description: "Crispy tortilla chips served with flavorful salsa and creamy guacamole.",
        image: "images/mexicanApphetizer.png",
        category: ["snacks"]
    },

    {
        name: "Pork Skewer",
        price: 500,
        description: "Tender pieces of seasoned pork grilled on skewers until juicy and flavorful.",
        image: "images/porkSkewer.png",
        category: ["snacks"]
    },

    

    {
        name: "Samosa",
        price: 800,
        description: "Crispy pastry filled with a flavorful savory filling.",
        image: "images/samosa.png",
        category: ["snacks"]
    },

    {
        name: "Spring Rolls",
        price: 900,
        description: "Crispy rolls filled with fresh vegetables and seasoning.",
        image: "images/springRolls.png",
        category: ["snacks"]
    },

    {
        name: "French Fries",
        price: 1000,
        description: "Crispy golden fries served as a delicious snack.",
        image: "images/frenchFries.png",
        category: ["snacks"]
    },

    {
        name: "Nachos",
        price: 1500,
        description: "Crispy tortilla chips served with flavorful toppings.",
        image: "images/nachos.png",
        category: ["snacks"]
    },


    // =========================
    // MEALS
    // =========================

    {
        name: "Bean Vegetable Burger",
        price: 2000,
        description: "A tasty bean patty layered with fresh vegetables in a soft burger bun.",
        image: "images/beanVegetableBurger.png",
        category: ["meal", "vegan"]
    },

    {
        name: "Broccoli Lasagna",
        price: 2500,
        description: "Layers of tender pasta, broccoli and creamy cheese baked to perfection.",
        image: "images/broccoliLasagna.png",
        category: ["meal"]
    },

    {
        name: "Chicken Curry",
        price: 3000,
        description: "Tender chicken simmered in a rich and flavorful curry sauce.",
        image: "images/ChickenCurry.png",
        category: ["meal"]
    },

    {
        name: "Fresh Prawn Ceviche",
        price: 3500,
        description: "Fresh prawns tossed with citrus, herbs and crisp vegetables for a refreshing taste.",
        image: "images/freshPrawnCeviche.png",
        category: ["meal"]
    },

    {
        name: "Mushroom Risotto",
        price: 1000,
        description: "Creamy Italian rice cooked with tender mushrooms and aromatic herbs.",
        image: "images/mushroomRositto.png",
        category: ["meal"]
    },

    {
        name: "Jollof Rice & Chicken",
        price: 3000,
        description: "Flavorful Nigerian jollof rice served with tender, well-seasoned chicken.",
        image: "images/jellofRiceChicken.png",
        category: ["meal"]
    },

    {
        name: "Grilled Chicken Rice",
        price: 3200,
        description: "Grilled chicken served with flavorful seasoned rice.",
        image: "images/grilledChickenRice.png",
        category: ["meal"]
    },

    {
        name: "Beef Pasta",
        price: 2800,
        description: "Tender beef combined with pasta in a rich flavorful sauce.",
        image: "images/beefPasta.png",
        category: ["meal"]
    },

    {
        name: "Chicken Shawarma",
        price: 2500,
        description: "Seasoned chicken wrapped with fresh vegetables and sauce.",
        image: "images/chickenShawarma.png",
        category: ["meal"]
    },

    {
        name: "Grilled Fish",
        price: 3500,
        description: "Fresh fish grilled with herbs and flavorful seasoning.",
        image: "images/grilledFish.png",
        category: ["meal"]
    },

    {
        name: "Spaghetti Bolognese",
        price: 2700,
        description: "Spaghetti served with a rich beef and tomato sauce.",
        image: "images/spaghettiBolognese.png",
        category: ["meal"]
    },


    // =========================
    // VEGAN
    // =========================

    {
        name: "Avocado Toast",
        price: 1500,
        description: "Crispy toast topped with creamy fresh avocado.",
        image: "images/avocadoToast.png",
        category: ["vegan"]
    },

    {
        name: "Vegetable Stir Fry",
        price: 2000,
        description: "Fresh vegetables stir-fried with flavorful herbs and spices.",
        image: "images/vegetableStirFry.png",
        category: ["vegan"]
    },

    {
        name: "Falafel Plate",
        price: 1800,
        description: "Crispy falafel served with fresh vegetables and flavorful sides.",
        image: "images/falafelPlate.png",
        category: ["vegan"]
    },

    {
        name: "Chickpea Salad",
        price: 1600,
        description: "Fresh chickpeas mixed with vegetables and a light dressing.",
        image: "images/chickpeaSalad.png",
        category: ["vegan"]
    },

    {
        name: "Vegetable Curry",
        price: 2200,
        description: "A flavorful curry made with fresh mixed vegetables.",
        image: "images/vegetableCurry.png",
        category: ["vegan"]
    },


    // =========================
    // DESSERTS
    // =========================

    {
        name: "Chocolate Brownie",
        price: 1500,
        description: "A rich and fudgy chocolate dessert with a deliciously soft center.",
        image: "images/chocolateBrownie.png",
        category: ["dessert"]
    },

    {
        name: "Strawberry Cheesecake",
        price: 2500,
        description: "Creamy cheesecake topped with sweet strawberries and a delicious fruit sauce.",
        image: "images/strawberryCheesecake.png",
        category: ["dessert"]
    },

    {
        name: "Red Velvet Cake",
        price: 5000,
        description: "Soft red velvet cake layered with smooth and creamy frosting.",
        image: "images/redVelvetCake.png",
        category: ["dessert"]
    },

    {
        name: "Vanilla Cake",
        price: 5000,
        description: "Light and fluffy vanilla cake covered with smooth creamy frosting.",
        image: "images/vanillaCake.png",
        category: ["dessert"]
    },

    {
        name: "Vanilla Ice Cream",
        price: 1000,
        description: "Smooth and creamy vanilla ice cream.",
        image: "images/vanillaIceCream.png",
        category: ["dessert"]
    },

    {
        name: "Chocolate Cake",
        price: 1800,
        description: "Rich chocolate cake with a soft and delicious texture.",
        image: "images/chocolateCake.png",
        category: ["dessert"]
    },

    {
        name: "Apple Pie",
        price: 1600,
        description: "Sweet apple filling baked inside a delicious pastry crust.",
        image: "images/applePie.png",
        category: ["dessert"]
    },

    {
        name: "Donut",
        price: 700,
        description: "Soft and sweet donut with a delicious topping.",
        image: "images/donut.png",
        category: ["dessert"]
    },

    {
        name: "Fruit Tart",
        price: 1700,
        description: "Sweet pastry topped with fresh fruits and creamy filling.",
        image: "images/fruitTart.png",
        category: ["dessert"]
    },


    // =========================
    // DRINKS
    // =========================

    {
        name: "Coffee Latte",
        price: 700,
        description: "Smooth espresso blended with steamed milk and topped with creamy foam.",
        image: "images/coffeeLatte.png",
        category: ["drinks"]
    },

    {
        name: "Creamy Milkshakes",
        price: 900,
        description: "A thick and creamy blended drink made with milk and sweet flavors.",
        image: "images/creamyMilkshakes.png",
        category: ["drinks"]
    },

    {
        name: "Iced Coffee",
        price: 600,
        description: "Chilled coffee served over ice with a smooth and refreshing finish.",
        image: "images/IcedCoffee.png",
        category: ["drinks"]
    },

    {
        name: "Mojito",
        price: 700,
        description: "A refreshing blend of lime, mint and sparkling water served over ice.",
        image: "images/mojito.png",
        category: ["drinks"]
    },

    {
        name: "Orange Juice",
        price: 800,
        description: "Fresh orange juice with a naturally sweet and refreshing citrus flavor.",
        image: "images/orangeJuice.png",
        category: ["drinks"]
    },

    {
        name: "Strawberry Smoothie",
        price: 1200,
        description: "A smooth and refreshing strawberry blended drink.",
        image: "images/strawberrySmoothie.png",
        category: ["drinks"]
    },

    {
        name: "Lemonade",
        price: 700,
        description: "Refreshing lemonade made with fresh lemon juice.",
        image: "images/lemonade.png",
        category: ["drinks"]
    },

    {
        name: "Mango Juice",
        price: 900,
        description: "Sweet and refreshing mango juice made from ripe mangoes.",
        image: "images/mangoJuice.png",
        category: ["drinks"]
    },

    {
        name: "Hot Chocolate",
        price: 1000,
        description: "Warm chocolate drink with a rich and comforting flavor.",
        image: "images/hotChocolate.png",
        category: ["drinks"]
    }

];