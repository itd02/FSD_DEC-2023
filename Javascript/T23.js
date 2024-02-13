
// let json_data =`
//     [{
//       "id: 1,
//       "title: "iPhone 9",
//       "description: "An apple mobile which is nothing like apple",
//       "price: 549,
//       "discountPercentage: 12.96,
//       "rating: 4.69,
//       "stock: 94,
//       "brand: "Apple",
//       "category: "smartphones",
//       "thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//       "images: [
//         "https://cdn.dummyjson.com/product-images/1/1.jpg",
//         "https://cdn.dummyjson.com/product-images/1/2.jpg",
//         "https://cdn.dummyjson.com/product-images/1/3.jpg",
//         "https://cdn.dummyjson.com/product-images/1/4.jpg",
//         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
//       ]
//     },
//     {
//       "id: 2,
//       "title: "iPhone X",
//       "description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
//       "price: 899,
//       "discountPercentage: 17.94,
//       "rating: 4.44,
//       "stock: 34,
//       "brand: "Apple",
//       "category: "smartphones",
//       "thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
//       "images: [
//         "https://cdn.dummyjson.com/product-images/2/1.jpg",
//         "https://cdn.dummyjson.com/product-images/2/2.jpg",
//         "https://cdn.dummyjson.com/product-images/2/3.jpg",
//         "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
//       ]
//     }]`





let JS_Object_Data = JSON.parse(json_data)



let cricketers = [{
  first_name: "Virat",
  last_name:  "Kohli",
  age: 36,
  skills: "['Bowling', 'Fielding']"
},{
  first_name: "Rohit",
  last_name:  "Kohli",
  age: 38,
  skills: "['Batting', 'Fielding']"
},{
  first_name: "Hardik",
  last_name:  "Kohli",
  age: 34,
  skills: "['Batting', 'Bowling']"
}]



// console.log(cricketers[0].first_name)



let cricketers_json = JSON.stringify(cricketers,['first_name', 'age'], 4)


console.log(cricketers_json)


