const express = require("express")

const app = express()

const PORT = 3001;
const HOSTNAME = 'localhost'

const menProduct =  [
      {
        "id": "1",
        "name": "Men's Classic White Shirt",
        "brand": "XYZ Clothing",
        "price": 39.99,
        "color": "White",
        "size": ["S", "M", "L", "XL"],
        "material": "Cotton",
        "description": "A classic white shirt for men, perfect for formal and casual occasions alike."
      },
      {
        "id": "2",
        "name": "Men's Slim Fit Jeans",
        "brand": "ABC Denim",
        "price": 49.99,
        "color": "Blue",
        "size": ["28", "30", "32", "34", "36"],
        "material": "Denim",
        "description": "Slim fit jeans crafted from high-quality denim for a stylish and comfortable fit."
      },
      {
        "id": "3",
        "name": "Men's Leather Belt",
        "brand": "LeatherCraft",
        "price": 29.99,
        "color": "Brown",
        "size": ["32", "34", "36", "38"],
        "material": "Genuine Leather",
        "description": "A durable and stylish leather belt, perfect for completing any outfit."
      },
      {
        "id": "4",
        "name": "Men's Sports Watch",
        "brand": "TimeMaster",
        "price": 79.99,
        "color": "Black",
        "size": null,
        "material": "Stainless Steel",
        "description": "A sleek and durable sports watch with various features like stopwatch and water resistance."
      },
      {
        "id": "5",
        "name": "Men's Running Shoes",
        "brand": "RunElite",
        "price": 69.99,
        "color": "Gray",
        "size": ["8", "9", "10", "11", "12"],
        "material": "Mesh and Synthetic",
        "description": "Lightweight and breathable running shoes designed for maximum comfort and performance."
      },
      {
        "id": "6",
        "name": "Men's Crew Neck Sweater",
        "brand": "WarmKnits",
        "price": 59.99,
        "color": "Navy",
        "size": ["S", "M", "L", "XL"],
        "material": "Wool Blend",
        "description": "A cozy and stylish sweater perfect for layering during colder weather."
      },
      {
        "id": "7",
        "name": "Men's Classic Aviator Sunglasses",
        "brand": "SunStyle",
        "price": 34.99,
        "color": "Black",
        "size": null,
        "material": "Metal Frame, Polarized Lenses",
        "description": "Iconic aviator sunglasses with polarized lenses for enhanced clarity and UV protection."
      },
      {
        "id": "8",
        "name": "Men's Leather Wallet",
        "brand": "LuxuryLeather",
        "price": 49.99,
        "color": "Black",
        "size": null,
        "material": "Genuine Leather",
        "description": "A stylish and practical leather wallet with multiple card slots and compartments."
      },
      {
        "id": "9",
        "name": "Men's Casual Chinos",
        "brand": "UrbanChic",
        "price": 44.99,
        "color": "Khaki",
        "size": ["30", "32", "34", "36"],
        "material": "Cotton Blend",
        "description": "Versatile and comfortable chinos suitable for both casual and semi-formal occasions."
      },
      {
        "id": "10",
        "name": "Men's Waterproof Jacket",
        "brand": "RainGuard",
        "price": 89.99,
        "color": "Black",
        "size": ["S", "M", "L", "XL"],
        "material": "Nylon",
        "description": "A durable and lightweight waterproof jacket, perfect for outdoor adventures."
      }
    ]

const womenProduct = [
    {
      "id": "1",
      "name": "Women's Floral Print Dress",
      "brand": "FlowerFashion",
      "price": 59.99,
      "color": "Blue Floral",
      "size": ["XS", "S", "M", "L", "XL"],
      "material": "Polyester",
      "description": "A beautiful floral print dress, perfect for spring and summer occasions."
    },
    {
      "id": "2",
      "name": "Women's Skinny Jeans",
      "brand": "SlimStyle",
      "price": 49.99,
      "color": "Black",
      "size": ["24", "26", "28", "30", "32"],
      "material": "Denim",
      "description": "Trendy skinny jeans designed for a flattering fit and all-day comfort."
    },
    {
      "id": "3",
      "name": "Women's Leather Handbag",
      "brand": "LuxuryLeather",
      "price": 89.99,
      "color": "Brown",
      "size": null,
      "material": "Genuine Leather",
      "description": "A stylish and spacious leather handbag, perfect for everyday use."
    },
    {
      "id": "4",
      "name": "Women's Athletic Sneakers",
      "brand": "ActiveWear",
      "price": 74.99,
      "color": "Pink",
      "size": ["6", "7", "8", "9", "10"],
      "material": "Mesh and Rubber",
      "description": "Comfortable and supportive athletic sneakers, ideal for workouts and casual wear."
    },
    {
      "id": "5",
      "name": "Women's Striped Blouse",
      "brand": "StripeStyle",
      "price": 39.99,
      "color": "White/Navy",
      "size": ["XS", "S", "M", "L"],
      "material": "Cotton",
      "description": "A chic striped blouse featuring a timeless design, perfect for office or weekend wear."
    },
    {
      "id": "6",
      "name": "Women's Classic Pumps",
      "brand": "ElegantSteps",
      "price": 64.99,
      "color": "Black",
      "size": ["5", "6", "7", "8", "9"],
      "material": "Faux Leather",
      "description": "Classic pumps with a sleek silhouette, ideal for formal occasions and everyday elegance."
    },
    {
      "id": "7",
      "name": "Women's Quartz Wristwatch",
      "brand": "Timeless",
      "price": 99.99,
      "color": "Rose Gold",
      "size": null,
      "material": "Stainless Steel",
      "description": "An elegant quartz wristwatch with a rose gold finish, perfect for adding a touch of sophistication to any outfit."
    },
    {
      "id": "8",
      "name": "Women's Wool Blend Coat",
      "brand": "CozyChic",
      "price": 129.99,
      "color": "Gray",
      "size": ["XS", "S", "M", "L"],
      "material": "Wool Blend",
      "description": "A stylish and cozy wool blend coat to keep you warm in colder weather."
    },
    {
      "id": "9",
      "name": "Women's Crossbody Bag",
      "brand": "CityChic",
      "price": 54.99,
      "color": "Black",
      "size": null,
      "material": "Faux Leather",
      "description": "A versatile crossbody bag with multiple compartments, perfect for on-the-go convenience."
    },
    {
      "id": "10",
      "name": "Women's Knit Sweater",
      "brand": "SoftKnits",
      "price": 49.99,
      "color": "Cream",
      "size": ["XS", "S", "M", "L"],
      "material": "Acrylic",
      "description": "A cozy knit sweater with a relaxed fit, ideal for layering during the cooler months."
    }
  ]

app.get("/", (req, res) => {
    res.send("Welcome to Men & Women Dummy Data")
})

app.get("/men", (req, res) => {
    res.send(menProduct)
})

app.get("/women", (req, res) => {
    res.send(womenProduct)
})

app.get("/other", (req, res) => {
    res.send("Page Not Found!")
})

app.listen(PORT, () => {
    console.log(`Server is running at ${HOSTNAME}: ${PORT}`);
})