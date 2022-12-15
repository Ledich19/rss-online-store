import { createSlice } from '@reduxjs/toolkit'
import { ProductsState } from '../app/types'

const initialState: ProductsState = [
  {
    "id": "639aee9977d6280f12d9a935",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 5
      },
      {
        "size": "S",
        "stock": 25
      },
      {
        "size": "M",
        "stock": 73
      },
      {
        "size": "L",
        "stock": 59
      },
      {
        "size": "Xl",
        "stock": 28
      },
      {
        "size": "XXl",
        "stock": 19
      },
      {
        "size": "3XL",
        "stock": 13
      }
    ],
    "brand": "Moncler",
    "color": "#72736E",
    "price": 2467,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.15",
    "category": "sweter",
    "createdAt": "2010-04-30T23:15:48.916Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Incididunt Lorem velit mollit do voluptate. Qui reprehenderit ullamco officia proident est cupidatat ad non sint quis cupidatat aliqua mollit.",
    "discountPercentage": 18
  },
  {
    "id": "639aee9999d0577719fe8624",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 11
      },
      {
        "size": "S",
        "stock": 15
      },
      {
        "size": "M",
        "stock": 9
      },
      {
        "size": "L",
        "stock": 83
      },
      {
        "size": "Xl",
        "stock": 34
      },
      {
        "size": "XXl",
        "stock": 29
      },
      {
        "size": "3XL",
        "stock": 20
      }
    ],
    "brand": "Prada.",
    "color": "#6B2D38",
    "price": 649,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.73",
    "category": "boots",
    "createdAt": "2011-06-05T06:34:38.872Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Deserunt dolor nisi esse ea voluptate nisi velit nostrud quis. Labore cillum laboris adipisicing ullamco mollit ea veniam.",
    "discountPercentage": 38
  },
  {
    "id": "639aee99111891c5f74de3af",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 64
      },
      {
        "size": "S",
        "stock": 30
      },
      {
        "size": "M",
        "stock": 17
      },
      {
        "size": "L",
        "stock": 69
      },
      {
        "size": "Xl",
        "stock": 73
      },
      {
        "size": "XXl",
        "stock": 21
      },
      {
        "size": "3XL",
        "stock": 85
      }
    ],
    "brand": "Gucci",
    "color": "#447D60",
    "price": 3828,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.97",
    "category": "dress ",
    "createdAt": "2010-01-20T23:17:00.402Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ut est reprehenderit magna ea nulla laborum. Ea consequat in nostrud eiusmod occaecat dolor minim amet.",
    "discountPercentage": 44
  },
  {
    "id": "639aee993bc875ee581a28f5",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 56
      },
      {
        "size": "S",
        "stock": 68
      },
      {
        "size": "M",
        "stock": 27
      },
      {
        "size": "L",
        "stock": 8
      },
      {
        "size": "Xl",
        "stock": 93
      },
      {
        "size": "XXl",
        "stock": 31
      },
      {
        "size": "3XL",
        "stock": 61
      }
    ],
    "brand": "Dior",
    "color": "#EDEDF1",
    "price": 4018,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.99",
    "category": "pants",
    "createdAt": "2012-05-27T11:11:40.889Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Nostrud labore nostrud aliqua et do laboris aliqua minim veniam occaecat do irure aliquip enim. Non occaecat do in magna amet.",
    "discountPercentage": 10
  },
  {
    "id": "639aee99b346bac4e3eea015",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 37
      },
      {
        "size": "S",
        "stock": 1
      },
      {
        "size": "M",
        "stock": 5
      },
      {
        "size": "L",
        "stock": 35
      },
      {
        "size": "Xl",
        "stock": 92
      },
      {
        "size": "XXl",
        "stock": 77
      },
      {
        "size": "3XL",
        "stock": 21
      }
    ],
    "brand": "Moncler",
    "color": "#6B2D38",
    "price": 3814,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.63",
    "category": "boots",
    "createdAt": "2014-09-19T09:23:14.039Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Eu amet aliquip pariatur cillum occaecat. Ipsum officia tempor dolor anim irure dolore.",
    "discountPercentage": 40
  },
  {
    "id": "639aee99e8d8ee93b407eb4a",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 70
      },
      {
        "size": "S",
        "stock": 21
      },
      {
        "size": "M",
        "stock": 87
      },
      {
        "size": "L",
        "stock": 50
      },
      {
        "size": "Xl",
        "stock": 30
      },
      {
        "size": "XXl",
        "stock": 27
      },
      {
        "size": "3XL",
        "stock": 11
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#447D60",
    "price": 1896,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.64",
    "category": "pullover",
    "createdAt": "2012-05-27T02:25:08.070Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Adipisicing qui laborum consectetur laborum adipisicing ex cupidatat id cillum aliquip id. Adipisicing enim occaecat ex exercitation.",
    "discountPercentage": 16
  },
  {
    "id": "639aee99f79f5e445b347282",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 76
      },
      {
        "size": "S",
        "stock": 4
      },
      {
        "size": "M",
        "stock": 83
      },
      {
        "size": "L",
        "stock": 53
      },
      {
        "size": "Xl",
        "stock": 33
      },
      {
        "size": "XXl",
        "stock": 77
      },
      {
        "size": "3XL",
        "stock": 91
      }
    ],
    "brand": "Dior",
    "color": "#6B2D38",
    "price": 2818,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.95",
    "category": "dress ",
    "createdAt": "2013-08-24T15:35:18.354Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Duis sit sint eu quis do deserunt dolor fugiat id voluptate eu. Non tempor sunt pariatur tempor.",
    "discountPercentage": 5
  },
  {
    "id": "639aee99d2b105bb66ceeb75",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 36
      },
      {
        "size": "S",
        "stock": 74
      },
      {
        "size": "M",
        "stock": 49
      },
      {
        "size": "L",
        "stock": 78
      },
      {
        "size": "Xl",
        "stock": 33
      },
      {
        "size": "XXl",
        "stock": 72
      },
      {
        "size": "3XL",
        "stock": 9
      }
    ],
    "brand": "Prada.",
    "color": "#F0CAC0",
    "price": 3107,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.09",
    "category": "shoes",
    "createdAt": "2013-02-28T20:48:04.904Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Voluptate occaecat veniam laboris sunt nisi qui. Veniam pariatur qui exercitation ut enim.",
    "discountPercentage": 1
  },
  {
    "id": "639aee99580b74a0d9942764",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 75
      },
      {
        "size": "S",
        "stock": 52
      },
      {
        "size": "M",
        "stock": 85
      },
      {
        "size": "L",
        "stock": 83
      },
      {
        "size": "Xl",
        "stock": 25
      },
      {
        "size": "XXl",
        "stock": 73
      },
      {
        "size": "3XL",
        "stock": 51
      }
    ],
    "brand": "Moncler",
    "color": "#F0CAC0",
    "price": 358,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.67",
    "category": "pants",
    "createdAt": "2012-04-30T00:28:52.851Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Anim deserunt reprehenderit ipsum nisi aliquip cillum culpa ut nulla. Mollit ut est irure voluptate Lorem.",
    "discountPercentage": 35
  },
  {
    "id": "639aee99a079f65d4029f90e",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 59
      },
      {
        "size": "S",
        "stock": 4
      },
      {
        "size": "M",
        "stock": 51
      },
      {
        "size": "L",
        "stock": 38
      },
      {
        "size": "Xl",
        "stock": 73
      },
      {
        "size": "XXl",
        "stock": 35
      },
      {
        "size": "3XL",
        "stock": 35
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#B2B2AD",
    "price": 4056,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.82",
    "category": "dress ",
    "createdAt": "2011-01-16T17:05:05.283Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Aliquip ullamco incididunt culpa irure quis id. Mollit amet ipsum ut consequat reprehenderit Lorem elit in sint nisi nisi sit.",
    "discountPercentage": 27
  },
  {
    "id": "639aee99f6d4158d9e1cb83f",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 11
      },
      {
        "size": "S",
        "stock": 52
      },
      {
        "size": "M",
        "stock": 81
      },
      {
        "size": "L",
        "stock": 67
      },
      {
        "size": "Xl",
        "stock": 77
      },
      {
        "size": "XXl",
        "stock": 81
      },
      {
        "size": "3XL",
        "stock": 84
      }
    ],
    "brand": "Dior",
    "color": "#447D60",
    "price": 2247,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.01",
    "category": "shoes",
    "createdAt": "2013-01-06T10:55:25.929Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ut est veniam commodo deserunt dolor irure laboris duis elit reprehenderit id et laborum tempor. Ut proident proident sint exercitation do officia aliquip reprehenderit amet ex nostrud mollit mollit.",
    "discountPercentage": 16
  },
  {
    "id": "639aee99d8da1f736fb28150",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 47
      },
      {
        "size": "S",
        "stock": 54
      },
      {
        "size": "M",
        "stock": 12
      },
      {
        "size": "L",
        "stock": 15
      },
      {
        "size": "Xl",
        "stock": 57
      },
      {
        "size": "XXl",
        "stock": 77
      },
      {
        "size": "3XL",
        "stock": 77
      }
    ],
    "brand": "Fendi",
    "color": "#6B2D38",
    "price": 652,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.51",
    "category": "shoes",
    "createdAt": "2013-11-11T19:00:22.597Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Magna Lorem sit eiusmod qui quis sunt sit pariatur. Non incididunt exercitation eiusmod proident irure voluptate ipsum amet.",
    "discountPercentage": 16
  },
  {
    "id": "639aee996ff41b212311f5c3",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 99
      },
      {
        "size": "S",
        "stock": 94
      },
      {
        "size": "M",
        "stock": 26
      },
      {
        "size": "L",
        "stock": 24
      },
      {
        "size": "Xl",
        "stock": 91
      },
      {
        "size": "XXl",
        "stock": 77
      },
      {
        "size": "3XL",
        "stock": 52
      }
    ],
    "brand": "Dior",
    "color": "#DFDCD4",
    "price": 4896,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.42",
    "category": "boots",
    "createdAt": "2011-01-20T17:21:17.744Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Pariatur quis nulla consequat duis aliqua commodo velit nisi nulla in do nulla eiusmod enim. Eiusmod ut aliqua do magna sit dolor aliquip duis.",
    "discountPercentage": 27
  },
  {
    "id": "639aee991a3c755fb9dfe577",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 98
      },
      {
        "size": "S",
        "stock": 93
      },
      {
        "size": "M",
        "stock": 55
      },
      {
        "size": "L",
        "stock": 83
      },
      {
        "size": "Xl",
        "stock": 51
      },
      {
        "size": "XXl",
        "stock": 53
      },
      {
        "size": "3XL",
        "stock": 65
      }
    ],
    "brand": "Gucci",
    "color": "#8B561A",
    "price": 2398,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.78",
    "category": "jacket ",
    "createdAt": "2011-01-13T06:12:36.600Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Laborum officia velit sunt aute aliqua irure do elit nisi ut. Velit nisi sit consectetur esse irure culpa nulla fugiat culpa.",
    "discountPercentage": 5
  },
  {
    "id": "639aee9960be5125381f0e3a",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 85
      },
      {
        "size": "S",
        "stock": 64
      },
      {
        "size": "M",
        "stock": 35
      },
      {
        "size": "L",
        "stock": 14
      },
      {
        "size": "Xl",
        "stock": 57
      },
      {
        "size": "XXl",
        "stock": 23
      },
      {
        "size": "3XL",
        "stock": 43
      }
    ],
    "brand": "Prada.",
    "color": "#6B2D38",
    "price": 2595,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.55",
    "category": "pants",
    "createdAt": "2011-07-09T09:17:02.603Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Voluptate non fugiat aliqua tempor fugiat duis voluptate pariatur occaecat non veniam officia. Nulla commodo id veniam commodo in dolor dolore officia elit occaecat cillum duis ad ad.",
    "discountPercentage": 8
  },
  {
    "id": "639aee99578386d03d757dc4",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 30
      },
      {
        "size": "S",
        "stock": 100
      },
      {
        "size": "M",
        "stock": 1
      },
      {
        "size": "L",
        "stock": 3
      },
      {
        "size": "Xl",
        "stock": 35
      },
      {
        "size": "XXl",
        "stock": 99
      },
      {
        "size": "3XL",
        "stock": 59
      }
    ],
    "brand": "Gucci",
    "color": "#F0CAC0",
    "price": 2399,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.22",
    "category": "pullover",
    "createdAt": "2010-10-20T20:27:18.080Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Nostrud magna cillum fugiat labore fugiat id ex commodo aliquip culpa velit. Occaecat aliquip et commodo sit consectetur fugiat nostrud Lorem aliquip minim sint.",
    "discountPercentage": 47
  },
  {
    "id": "639aee9917e32832b8467d89",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 12
      },
      {
        "size": "S",
        "stock": 37
      },
      {
        "size": "M",
        "stock": 100
      },
      {
        "size": "L",
        "stock": 69
      },
      {
        "size": "Xl",
        "stock": 60
      },
      {
        "size": "XXl",
        "stock": 89
      },
      {
        "size": "3XL",
        "stock": 3
      }
    ],
    "brand": "Prada.",
    "color": "#447D60",
    "price": 1558,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.08",
    "category": "boots",
    "createdAt": "2014-02-09T22:06:41.669Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Deserunt ullamco consequat tempor dolor mollit ut fugiat eu fugiat do. Quis enim non ut officia mollit cillum elit ut fugiat eu cupidatat qui ullamco proident.",
    "discountPercentage": 26
  },
  {
    "id": "639aee991aadbfa164111107",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 36
      },
      {
        "size": "S",
        "stock": 35
      },
      {
        "size": "M",
        "stock": 67
      },
      {
        "size": "L",
        "stock": 62
      },
      {
        "size": "Xl",
        "stock": 96
      },
      {
        "size": "XXl",
        "stock": 67
      },
      {
        "size": "3XL",
        "stock": 92
      }
    ],
    "brand": "Gucci",
    "color": "#6B2D38",
    "price": 639,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.69",
    "category": "pullover",
    "createdAt": "2011-04-21T06:34:57.807Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Excepteur amet enim ex quis eu irure. Laborum fugiat pariatur aliquip in irure ex esse.",
    "discountPercentage": 31
  },
  {
    "id": "639aee99b3d6eb8f804c922f",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 92
      },
      {
        "size": "S",
        "stock": 25
      },
      {
        "size": "M",
        "stock": 17
      },
      {
        "size": "L",
        "stock": 1
      },
      {
        "size": "Xl",
        "stock": 2
      },
      {
        "size": "XXl",
        "stock": 59
      },
      {
        "size": "3XL",
        "stock": 21
      }
    ],
    "brand": "Fendi",
    "color": "#DFDCD4",
    "price": 4336,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.14",
    "category": "pants",
    "createdAt": "2014-11-01T01:55:57.097Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Id sint quis sit nisi excepteur fugiat ullamco est et aliqua tempor pariatur cillum nisi. Anim sunt est voluptate do commodo occaecat consectetur duis adipisicing.",
    "discountPercentage": 4
  },
  {
    "id": "639aee993b7e284085a72fb7",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 54
      },
      {
        "size": "S",
        "stock": 17
      },
      {
        "size": "M",
        "stock": 84
      },
      {
        "size": "L",
        "stock": 41
      },
      {
        "size": "Xl",
        "stock": 66
      },
      {
        "size": "XXl",
        "stock": 35
      },
      {
        "size": "3XL",
        "stock": 18
      }
    ],
    "brand": "Gucci",
    "color": "#B2B2AD",
    "price": 2958,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.71",
    "category": "dress ",
    "createdAt": "2013-09-25T01:08:45.924Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Minim consequat ea culpa ipsum exercitation ullamco. Qui consectetur ea pariatur ad dolore irure qui pariatur aliquip qui dolor nostrud dolor dolor.",
    "discountPercentage": 17
  },
  {
    "id": "639aee99ac8d2c802e59a03b",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 22
      },
      {
        "size": "S",
        "stock": 7
      },
      {
        "size": "M",
        "stock": 43
      },
      {
        "size": "L",
        "stock": 93
      },
      {
        "size": "Xl",
        "stock": 59
      },
      {
        "size": "XXl",
        "stock": 92
      },
      {
        "size": "3XL",
        "stock": 17
      }
    ],
    "brand": "Moncler",
    "color": "#B2B2AD",
    "price": 3415,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.94",
    "category": "dress ",
    "createdAt": "2013-08-07T19:42:10.853Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Nulla id anim Lorem eiusmod irure elit. Adipisicing in eu voluptate ea sit irure.",
    "discountPercentage": 3
  },
  {
    "id": "639aee999bc09205d305b840",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 31
      },
      {
        "size": "S",
        "stock": 99
      },
      {
        "size": "M",
        "stock": 83
      },
      {
        "size": "L",
        "stock": 21
      },
      {
        "size": "Xl",
        "stock": 35
      },
      {
        "size": "XXl",
        "stock": 98
      },
      {
        "size": "3XL",
        "stock": 53
      }
    ],
    "brand": "Balenciaga",
    "color": "#72736E",
    "price": 1299,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.45",
    "category": "shoes",
    "createdAt": "2014-12-29T14:24:06.192Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ut et exercitation officia officia laborum et elit voluptate. Duis eu sint consequat in dolor voluptate Lorem.",
    "discountPercentage": 21
  },
  {
    "id": "639aee99f973ffff0a6798da",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 84
      },
      {
        "size": "S",
        "stock": 76
      },
      {
        "size": "M",
        "stock": 86
      },
      {
        "size": "L",
        "stock": 88
      },
      {
        "size": "Xl",
        "stock": 57
      },
      {
        "size": "XXl",
        "stock": 4
      },
      {
        "size": "3XL",
        "stock": 64
      }
    ],
    "brand": "Gucci",
    "color": "#DFDCD4",
    "price": 1041,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.78",
    "category": "dress ",
    "createdAt": "2013-06-27T08:48:59.069Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ullamco anim tempor aliqua mollit cupidatat tempor tempor amet culpa commodo laboris aliqua elit consequat. Aliquip labore ex mollit voluptate adipisicing.",
    "discountPercentage": 39
  },
  {
    "id": "639aee990ab6649e5cf459c8",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 40
      },
      {
        "size": "S",
        "stock": 100
      },
      {
        "size": "M",
        "stock": 41
      },
      {
        "size": "L",
        "stock": 22
      },
      {
        "size": "Xl",
        "stock": 19
      },
      {
        "size": "XXl",
        "stock": 66
      },
      {
        "size": "3XL",
        "stock": 89
      }
    ],
    "brand": "Fendi",
    "color": "#EDEDF1",
    "price": 4546,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.78",
    "category": "jacket ",
    "createdAt": "2010-12-21T06:43:23.325Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Labore irure dolore deserunt reprehenderit pariatur dolore consequat esse deserunt exercitation. Exercitation reprehenderit aliquip tempor reprehenderit consectetur nostrud irure.",
    "discountPercentage": 10
  },
  {
    "id": "639aee99febee42d119e57c5",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 68
      },
      {
        "size": "S",
        "stock": 9
      },
      {
        "size": "M",
        "stock": 35
      },
      {
        "size": "L",
        "stock": 31
      },
      {
        "size": "Xl",
        "stock": 55
      },
      {
        "size": "XXl",
        "stock": 50
      },
      {
        "size": "3XL",
        "stock": 40
      }
    ],
    "brand": "Balenciaga",
    "color": "#F6EDDD",
    "price": 4088,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.21",
    "category": "boots",
    "createdAt": "2012-04-15T11:11:19.148Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Magna reprehenderit esse occaecat excepteur aliquip eiusmod ut voluptate. Officia nisi consectetur velit deserunt et sint id aliquip tempor pariatur non ad dolor mollit.",
    "discountPercentage": 4
  },
  {
    "id": "639aee99ef532dd58d640bf8",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 45
      },
      {
        "size": "S",
        "stock": 25
      },
      {
        "size": "M",
        "stock": 64
      },
      {
        "size": "L",
        "stock": 35
      },
      {
        "size": "Xl",
        "stock": 2
      },
      {
        "size": "XXl",
        "stock": 68
      },
      {
        "size": "3XL",
        "stock": 79
      }
    ],
    "brand": "Gucci",
    "color": "#F0CAC0",
    "price": 2166,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.97",
    "category": "shoes",
    "createdAt": "2012-03-04T15:08:10.500Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Occaecat culpa in tempor elit voluptate mollit sit pariatur consectetur. Lorem exercitation labore cillum excepteur non commodo tempor id excepteur eu sint.",
    "discountPercentage": 22
  },
  {
    "id": "639aee99183ae575fef1b970",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 94
      },
      {
        "size": "S",
        "stock": 66
      },
      {
        "size": "M",
        "stock": 4
      },
      {
        "size": "L",
        "stock": 6
      },
      {
        "size": "Xl",
        "stock": 36
      },
      {
        "size": "XXl",
        "stock": 81
      },
      {
        "size": "3XL",
        "stock": 72
      }
    ],
    "brand": "Fendi",
    "color": "#F6EDDD",
    "price": 4524,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.86",
    "category": "jacket ",
    "createdAt": "2014-08-01T08:02:05.282Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Nulla ea duis excepteur incididunt consectetur Lorem anim commodo incididunt sit fugiat. Est sit voluptate sit officia quis qui.",
    "discountPercentage": 10
  },
  {
    "id": "639aee9943a55870d74ee18b",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 37
      },
      {
        "size": "S",
        "stock": 14
      },
      {
        "size": "M",
        "stock": 32
      },
      {
        "size": "L",
        "stock": 89
      },
      {
        "size": "Xl",
        "stock": 52
      },
      {
        "size": "XXl",
        "stock": 62
      },
      {
        "size": "3XL",
        "stock": 40
      }
    ],
    "brand": "Gucci",
    "color": "#F6EDDD",
    "price": 1522,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.84",
    "category": "boots",
    "createdAt": "2014-10-16T02:31:09.219Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Fugiat dolor velit consequat culpa fugiat labore exercitation veniam. Nisi velit dolor id sunt dolore.",
    "discountPercentage": 15
  },
  {
    "id": "639aee993ffc09b36d523719",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 35
      },
      {
        "size": "S",
        "stock": 70
      },
      {
        "size": "M",
        "stock": 75
      },
      {
        "size": "L",
        "stock": 71
      },
      {
        "size": "Xl",
        "stock": 9
      },
      {
        "size": "XXl",
        "stock": 71
      },
      {
        "size": "3XL",
        "stock": 99
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#6B2D38",
    "price": 133,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.13",
    "category": "dress ",
    "createdAt": "2014-12-25T09:20:56.513Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "In deserunt adipisicing consequat reprehenderit duis mollit adipisicing consequat veniam aute deserunt. Amet proident dolore Lorem officia id adipisicing nulla fugiat eiusmod ex.",
    "discountPercentage": 40
  },
  {
    "id": "639aee9973070ce6cefdf5eb",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 43
      },
      {
        "size": "S",
        "stock": 99
      },
      {
        "size": "M",
        "stock": 56
      },
      {
        "size": "L",
        "stock": 42
      },
      {
        "size": "Xl",
        "stock": 84
      },
      {
        "size": "XXl",
        "stock": 80
      },
      {
        "size": "3XL",
        "stock": 33
      }
    ],
    "brand": "Balenciaga",
    "color": "#F0CAC0",
    "price": 852,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.56",
    "category": "sweter",
    "createdAt": "2010-12-10T15:24:02.568Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Eiusmod ea incididunt cupidatat adipisicing et enim Lorem mollit ut incididunt aliqua esse. Duis eu amet sunt pariatur et.",
    "discountPercentage": 50
  },
  {
    "id": "639aee99c6cd1284759a8b0d",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 95
      },
      {
        "size": "S",
        "stock": 47
      },
      {
        "size": "M",
        "stock": 65
      },
      {
        "size": "L",
        "stock": 56
      },
      {
        "size": "Xl",
        "stock": 72
      },
      {
        "size": "XXl",
        "stock": 15
      },
      {
        "size": "3XL",
        "stock": 38
      }
    ],
    "brand": "Gucci",
    "color": "#447D60",
    "price": 716,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.75",
    "category": "jacket ",
    "createdAt": "2014-03-11T10:45:56.841Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ullamco nostrud deserunt sit mollit nisi dolor. Tempor proident ullamco occaecat laboris labore.",
    "discountPercentage": 36
  },
  {
    "id": "639aee9972ede98ee9296cd1",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 69
      },
      {
        "size": "S",
        "stock": 94
      },
      {
        "size": "M",
        "stock": 58
      },
      {
        "size": "L",
        "stock": 85
      },
      {
        "size": "Xl",
        "stock": 28
      },
      {
        "size": "XXl",
        "stock": 83
      },
      {
        "size": "3XL",
        "stock": 84
      }
    ],
    "brand": "Dior",
    "color": "#B2B2AD",
    "price": 1030,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.63",
    "category": "pants",
    "createdAt": "2013-02-17T01:07:37.360Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Aliqua anim enim ipsum nulla reprehenderit dolore. Esse est veniam voluptate exercitation adipisicing reprehenderit ad.",
    "discountPercentage": 15
  },
  {
    "id": "639aee993f81ba0f8602a37a",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 14
      },
      {
        "size": "S",
        "stock": 73
      },
      {
        "size": "M",
        "stock": 27
      },
      {
        "size": "L",
        "stock": 14
      },
      {
        "size": "Xl",
        "stock": 59
      },
      {
        "size": "XXl",
        "stock": 59
      },
      {
        "size": "3XL",
        "stock": 37
      }
    ],
    "brand": "Dior",
    "color": "#F6EDDD",
    "price": 2903,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.78",
    "category": "shoes",
    "createdAt": "2014-05-30T20:32:50.574Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Velit velit magna mollit Lorem incididunt amet. Tempor exercitation occaecat irure id veniam mollit exercitation dolor Lorem.",
    "discountPercentage": 48
  },
  {
    "id": "639aee99ef24f37087bf00b3",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 17
      },
      {
        "size": "S",
        "stock": 59
      },
      {
        "size": "M",
        "stock": 16
      },
      {
        "size": "L",
        "stock": 52
      },
      {
        "size": "Xl",
        "stock": 68
      },
      {
        "size": "XXl",
        "stock": 33
      },
      {
        "size": "3XL",
        "stock": 55
      }
    ],
    "brand": "Balenciaga",
    "color": "#EDEDF1",
    "price": 1132,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.36",
    "category": "shoes",
    "createdAt": "2010-04-04T09:21:14.043Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Id excepteur qui do eu nulla sit ex ipsum qui culpa adipisicing ex. Incididunt magna fugiat Lorem enim irure officia sint adipisicing Lorem.",
    "discountPercentage": 20
  },
  {
    "id": "639aee99ad957c027df4662a",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 11
      },
      {
        "size": "S",
        "stock": 15
      },
      {
        "size": "M",
        "stock": 71
      },
      {
        "size": "L",
        "stock": 63
      },
      {
        "size": "Xl",
        "stock": 63
      },
      {
        "size": "XXl",
        "stock": 97
      },
      {
        "size": "3XL",
        "stock": 19
      }
    ],
    "brand": "Balenciaga",
    "color": "#6B2D38",
    "price": 41,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.52",
    "category": "dress ",
    "createdAt": "2012-09-07T05:48:16.173Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Nulla incididunt tempor ea officia incididunt. Adipisicing laboris ut do sit laboris fugiat in et labore ut culpa nostrud culpa.",
    "discountPercentage": 32
  },
  {
    "id": "639aee99d5f5667aa61f504e",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 5
      },
      {
        "size": "S",
        "stock": 22
      },
      {
        "size": "M",
        "stock": 43
      },
      {
        "size": "L",
        "stock": 26
      },
      {
        "size": "Xl",
        "stock": 34
      },
      {
        "size": "XXl",
        "stock": 45
      },
      {
        "size": "3XL",
        "stock": 77
      }
    ],
    "brand": "Moncler",
    "color": "#4264A8",
    "price": 3288,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.32",
    "category": "boots",
    "createdAt": "2013-03-17T21:51:44.869Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Quis irure do minim occaecat aute laborum. Consequat velit tempor consectetur dolor in proident elit sit voluptate.",
    "discountPercentage": 25
  },
  {
    "id": "639aee99ef2bf1ed1a20220e",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 58
      },
      {
        "size": "S",
        "stock": 3
      },
      {
        "size": "M",
        "stock": 79
      },
      {
        "size": "L",
        "stock": 66
      },
      {
        "size": "Xl",
        "stock": 95
      },
      {
        "size": "XXl",
        "stock": 79
      },
      {
        "size": "3XL",
        "stock": 85
      }
    ],
    "brand": "Dior",
    "color": "#447D60",
    "price": 925,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.66",
    "category": "pants",
    "createdAt": "2014-04-21T04:51:37.028Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Do irure ut ipsum dolor elit do est. Pariatur ipsum qui magna voluptate commodo quis proident exercitation ex cupidatat ad incididunt.",
    "discountPercentage": 2
  },
  {
    "id": "639aee9901923ea3fffeed8b",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 57
      },
      {
        "size": "S",
        "stock": 56
      },
      {
        "size": "M",
        "stock": 61
      },
      {
        "size": "L",
        "stock": 99
      },
      {
        "size": "Xl",
        "stock": 67
      },
      {
        "size": "XXl",
        "stock": 25
      },
      {
        "size": "3XL",
        "stock": 46
      }
    ],
    "brand": "Balenciaga",
    "color": "#447D60",
    "price": 4959,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.75",
    "category": "boots",
    "createdAt": "2010-03-25T19:00:43.691Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Sint officia qui esse excepteur Lorem tempor Lorem ullamco eiusmod quis aliquip magna nostrud. Duis minim sit cupidatat proident eu ut cillum laboris sit ea eiusmod.",
    "discountPercentage": 30
  },
  {
    "id": "639aee993b9810edba350441",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 76
      },
      {
        "size": "S",
        "stock": 90
      },
      {
        "size": "M",
        "stock": 44
      },
      {
        "size": "L",
        "stock": 81
      },
      {
        "size": "Xl",
        "stock": 41
      },
      {
        "size": "XXl",
        "stock": 44
      },
      {
        "size": "3XL",
        "stock": 20
      }
    ],
    "brand": "Dior",
    "color": "#8B561A",
    "price": 3766,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.67",
    "category": "pullover",
    "createdAt": "2012-05-15T13:52:51.041Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Adipisicing laborum magna amet deserunt nostrud reprehenderit exercitation voluptate. Reprehenderit in sint cupidatat eu in officia ea sint.",
    "discountPercentage": 49
  },
  {
    "id": "639aee99e4857d263c4987b4",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 98
      },
      {
        "size": "S",
        "stock": 97
      },
      {
        "size": "M",
        "stock": 57
      },
      {
        "size": "L",
        "stock": 11
      },
      {
        "size": "Xl",
        "stock": 81
      },
      {
        "size": "XXl",
        "stock": 59
      },
      {
        "size": "3XL",
        "stock": 13
      }
    ],
    "brand": "Dior",
    "color": "#8B561A",
    "price": 1233,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.22",
    "category": "boots",
    "createdAt": "2011-06-23T22:34:34.085Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Mollit fugiat culpa ut quis ex et sunt do consectetur aliqua. Consectetur commodo cupidatat veniam mollit.",
    "discountPercentage": 15
  },
  {
    "id": "639aee99fb693edead3f0094",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 40
      },
      {
        "size": "S",
        "stock": 17
      },
      {
        "size": "M",
        "stock": 40
      },
      {
        "size": "L",
        "stock": 59
      },
      {
        "size": "Xl",
        "stock": 51
      },
      {
        "size": "XXl",
        "stock": 30
      },
      {
        "size": "3XL",
        "stock": 17
      }
    ],
    "brand": "Gucci",
    "color": "#6B2D38",
    "price": 63,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.39",
    "category": "boots",
    "createdAt": "2010-09-16T05:30:48.111Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Velit nostrud laboris est ut duis enim aliquip ad cillum officia cupidatat exercitation quis. Tempor in velit sunt quis eiusmod laborum.",
    "discountPercentage": 7
  },
  {
    "id": "639aee999216cccef5b31a02",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 67
      },
      {
        "size": "S",
        "stock": 98
      },
      {
        "size": "M",
        "stock": 98
      },
      {
        "size": "L",
        "stock": 25
      },
      {
        "size": "Xl",
        "stock": 16
      },
      {
        "size": "XXl",
        "stock": 65
      },
      {
        "size": "3XL",
        "stock": 22
      }
    ],
    "brand": "Moncler",
    "color": "#4264A8",
    "price": 1667,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.15",
    "category": "boots",
    "createdAt": "2011-02-05T20:12:03.811Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Incididunt eu nulla exercitation voluptate laboris nostrud nulla sint laboris minim consectetur ut ad. Eu enim quis minim irure exercitation culpa adipisicing mollit labore eu proident.",
    "discountPercentage": 48
  },
  {
    "id": "639aee992c5d1a173e28a51b",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 68
      },
      {
        "size": "S",
        "stock": 42
      },
      {
        "size": "M",
        "stock": 67
      },
      {
        "size": "L",
        "stock": 6
      },
      {
        "size": "Xl",
        "stock": 78
      },
      {
        "size": "XXl",
        "stock": 83
      },
      {
        "size": "3XL",
        "stock": 10
      }
    ],
    "brand": "Dior",
    "color": "#F6EDDD",
    "price": 4169,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.96",
    "category": "boots",
    "createdAt": "2010-12-06T00:56:04.532Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Cillum irure aliqua labore cillum fugiat mollit ullamco. Proident occaecat anim id eu velit.",
    "discountPercentage": 42
  },
  {
    "id": "639aee99bf7f5ebfd83fea01",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 55
      },
      {
        "size": "S",
        "stock": 83
      },
      {
        "size": "M",
        "stock": 68
      },
      {
        "size": "L",
        "stock": 28
      },
      {
        "size": "Xl",
        "stock": 28
      },
      {
        "size": "XXl",
        "stock": 78
      },
      {
        "size": "3XL",
        "stock": 31
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#8B561A",
    "price": 2687,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.68",
    "category": "boots",
    "createdAt": "2014-01-06T20:50:28.689Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Magna proident mollit sint exercitation aute quis labore ad labore. Nulla occaecat nisi excepteur irure sunt qui veniam culpa nostrud do mollit velit pariatur duis.",
    "discountPercentage": 6
  },
  {
    "id": "639aee990257c63457fa6a09",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 51
      },
      {
        "size": "S",
        "stock": 3
      },
      {
        "size": "M",
        "stock": 31
      },
      {
        "size": "L",
        "stock": 14
      },
      {
        "size": "Xl",
        "stock": 11
      },
      {
        "size": "XXl",
        "stock": 50
      },
      {
        "size": "3XL",
        "stock": 91
      }
    ],
    "brand": "Prada.",
    "color": "#B2B2AD",
    "price": 4192,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.83",
    "category": "dress ",
    "createdAt": "2010-02-27T11:29:01.397Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Minim Lorem non veniam dolore tempor officia incididunt. Irure esse adipisicing eiusmod labore.",
    "discountPercentage": 32
  },
  {
    "id": "639aee99efa0dafd03de8a26",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 67
      },
      {
        "size": "S",
        "stock": 21
      },
      {
        "size": "M",
        "stock": 54
      },
      {
        "size": "L",
        "stock": 66
      },
      {
        "size": "Xl",
        "stock": 89
      },
      {
        "size": "XXl",
        "stock": 90
      },
      {
        "size": "3XL",
        "stock": 29
      }
    ],
    "brand": "Balenciaga",
    "color": "#EDEDF1",
    "price": 2218,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.93",
    "category": "boots",
    "createdAt": "2010-02-22T07:19:54.232Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Elit nisi adipisicing minim do id aute anim ex et ex enim cupidatat. Ipsum commodo officia dolore amet est est ea.",
    "discountPercentage": 12
  },
  {
    "id": "639aee99cc79081b52b62996",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 32
      },
      {
        "size": "S",
        "stock": 90
      },
      {
        "size": "M",
        "stock": 85
      },
      {
        "size": "L",
        "stock": 9
      },
      {
        "size": "Xl",
        "stock": 70
      },
      {
        "size": "XXl",
        "stock": 3
      },
      {
        "size": "3XL",
        "stock": 88
      }
    ],
    "brand": "Moncler",
    "color": "#4264A8",
    "price": 3818,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.13",
    "category": "boots",
    "createdAt": "2010-08-20T23:05:10.991Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Mollit est esse est commodo. Elit et ut anim sit consectetur sunt id quis.",
    "discountPercentage": 40
  },
  {
    "id": "639aee993030b64ecc494fe1",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 97
      },
      {
        "size": "S",
        "stock": 28
      },
      {
        "size": "M",
        "stock": 88
      },
      {
        "size": "L",
        "stock": 2
      },
      {
        "size": "Xl",
        "stock": 93
      },
      {
        "size": "XXl",
        "stock": 80
      },
      {
        "size": "3XL",
        "stock": 57
      }
    ],
    "brand": "Prada.",
    "color": "#B2B2AD",
    "price": 4556,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.09",
    "category": "boots",
    "createdAt": "2014-06-27T18:16:48.617Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Aliqua cupidatat velit sit commodo consequat amet pariatur velit et enim ut. Non laboris laboris cillum aliqua do Lorem deserunt ad.",
    "discountPercentage": 39
  },
  {
    "id": "639aee993e18d05c07d98164",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 92
      },
      {
        "size": "S",
        "stock": 10
      },
      {
        "size": "M",
        "stock": 55
      },
      {
        "size": "L",
        "stock": 46
      },
      {
        "size": "Xl",
        "stock": 84
      },
      {
        "size": "XXl",
        "stock": 87
      },
      {
        "size": "3XL",
        "stock": 31
      }
    ],
    "brand": "Moncler",
    "color": "#6B2D38",
    "price": 2495,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.55",
    "category": "pants",
    "createdAt": "2013-02-28T10:08:33.706Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ad sunt culpa velit sunt dolor officia. Sint culpa sint amet magna ex mollit sunt amet cillum pariatur cupidatat eiusmod excepteur laborum.",
    "discountPercentage": 42
  },
  {
    "id": "639aee99b37be1f4fba39643",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 64
      },
      {
        "size": "S",
        "stock": 91
      },
      {
        "size": "M",
        "stock": 88
      },
      {
        "size": "L",
        "stock": 18
      },
      {
        "size": "Xl",
        "stock": 85
      },
      {
        "size": "XXl",
        "stock": 56
      },
      {
        "size": "3XL",
        "stock": 29
      }
    ],
    "brand": "Gucci",
    "color": "#72736E",
    "price": 1291,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.15",
    "category": "pullover",
    "createdAt": "2013-02-04T13:49:34.698Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ea culpa exercitation duis proident reprehenderit voluptate aute pariatur ut. Cupidatat laboris consequat Lorem culpa velit minim quis nostrud labore in.",
    "discountPercentage": 40
  },
  {
    "id": "639aee99be1b82bc7df8bac4",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 33
      },
      {
        "size": "S",
        "stock": 71
      },
      {
        "size": "M",
        "stock": 21
      },
      {
        "size": "L",
        "stock": 18
      },
      {
        "size": "Xl",
        "stock": 54
      },
      {
        "size": "XXl",
        "stock": 66
      },
      {
        "size": "3XL",
        "stock": 58
      }
    ],
    "brand": "Dior",
    "color": "#B2B2AD",
    "price": 2334,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.85",
    "category": "sweter",
    "createdAt": "2014-11-28T20:22:30.947Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Laboris sit ullamco anim labore excepteur aliquip amet aute occaecat nulla velit enim. Commodo in amet tempor do qui elit.",
    "discountPercentage": 9
  },
  {
    "id": "639aee99ba369f730c65ea83",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 94
      },
      {
        "size": "S",
        "stock": 31
      },
      {
        "size": "M",
        "stock": 28
      },
      {
        "size": "L",
        "stock": 22
      },
      {
        "size": "Xl",
        "stock": 87
      },
      {
        "size": "XXl",
        "stock": 61
      },
      {
        "size": "3XL",
        "stock": 9
      }
    ],
    "brand": "Balenciaga",
    "color": "#DFDCD4",
    "price": 1990,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.85",
    "category": "dress ",
    "createdAt": "2014-03-21T12:04:50.849Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Deserunt cillum ipsum dolor non id aute ut proident qui fugiat ex. Duis deserunt ea sint est dolor non.",
    "discountPercentage": 7
  },
  {
    "id": "639aee99ae08dedc0409afe2",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 43
      },
      {
        "size": "S",
        "stock": 86
      },
      {
        "size": "M",
        "stock": 73
      },
      {
        "size": "L",
        "stock": 51
      },
      {
        "size": "Xl",
        "stock": 45
      },
      {
        "size": "XXl",
        "stock": 90
      },
      {
        "size": "3XL",
        "stock": 98
      }
    ],
    "brand": "Moncler",
    "color": "#6B2D38",
    "price": 1942,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.74",
    "category": "dress ",
    "createdAt": "2014-10-18T11:41:05.620Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Sunt eiusmod cillum ipsum consequat veniam dolor consectetur excepteur labore non ad laboris ea fugiat. Minim cupidatat et commodo fugiat ipsum et ad nulla dolore dolor pariatur.",
    "discountPercentage": 43
  },
  {
    "id": "639aee99703922429561fc4e",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 8
      },
      {
        "size": "S",
        "stock": 84
      },
      {
        "size": "M",
        "stock": 9
      },
      {
        "size": "L",
        "stock": 65
      },
      {
        "size": "Xl",
        "stock": 82
      },
      {
        "size": "XXl",
        "stock": 56
      },
      {
        "size": "3XL",
        "stock": 81
      }
    ],
    "brand": "Moncler",
    "color": "#72736E",
    "price": 2019,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.25",
    "category": "jacket ",
    "createdAt": "2013-11-08T05:45:20.467Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Reprehenderit non laboris sit aliqua pariatur magna id officia elit do pariatur. Dolore adipisicing sit adipisicing laboris.",
    "discountPercentage": 16
  },
  {
    "id": "639aee995fed7989cecb8ae3",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 94
      },
      {
        "size": "S",
        "stock": 9
      },
      {
        "size": "M",
        "stock": 7
      },
      {
        "size": "L",
        "stock": 1
      },
      {
        "size": "Xl",
        "stock": 46
      },
      {
        "size": "XXl",
        "stock": 67
      },
      {
        "size": "3XL",
        "stock": 19
      }
    ],
    "brand": "Fendi",
    "color": "#4264A8",
    "price": 2950,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.71",
    "category": "sweter",
    "createdAt": "2014-04-25T06:18:03.230Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "In id nulla officia consectetur aliqua ex et enim cillum magna. Culpa ex ad consequat excepteur duis dolor sunt do est minim adipisicing.",
    "discountPercentage": 36
  },
  {
    "id": "639aee99a2da6b77461d8ad5",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 86
      },
      {
        "size": "S",
        "stock": 36
      },
      {
        "size": "M",
        "stock": 96
      },
      {
        "size": "L",
        "stock": 95
      },
      {
        "size": "Xl",
        "stock": 48
      },
      {
        "size": "XXl",
        "stock": 26
      },
      {
        "size": "3XL",
        "stock": 59
      }
    ],
    "brand": "Balenciaga",
    "color": "#4264A8",
    "price": 2513,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.71",
    "category": "dress ",
    "createdAt": "2013-10-19T12:27:39.960Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Pariatur sit dolor commodo sit consequat Lorem laboris proident aliquip esse labore mollit. Labore esse ut excepteur ullamco labore magna excepteur proident ut officia exercitation.",
    "discountPercentage": 9
  },
  {
    "id": "639aee99ef2200c92388b8b5",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 80
      },
      {
        "size": "S",
        "stock": 97
      },
      {
        "size": "M",
        "stock": 31
      },
      {
        "size": "L",
        "stock": 35
      },
      {
        "size": "Xl",
        "stock": 28
      },
      {
        "size": "XXl",
        "stock": 65
      },
      {
        "size": "3XL",
        "stock": 80
      }
    ],
    "brand": "Gucci",
    "color": "#72736E",
    "price": 630,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.76",
    "category": "jacket ",
    "createdAt": "2014-04-14T16:16:53.133Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Eu ex dolore do magna ut ad sunt laborum labore quis cupidatat minim. Tempor do Lorem velit id minim cillum ea.",
    "discountPercentage": 32
  },
  {
    "id": "639aee99bcc5aba395672b79",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 77
      },
      {
        "size": "S",
        "stock": 88
      },
      {
        "size": "M",
        "stock": 20
      },
      {
        "size": "L",
        "stock": 5
      },
      {
        "size": "Xl",
        "stock": 86
      },
      {
        "size": "XXl",
        "stock": 88
      },
      {
        "size": "3XL",
        "stock": 74
      }
    ],
    "brand": "Prada.",
    "color": "#447D60",
    "price": 79,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.52",
    "category": "jacket ",
    "createdAt": "2011-11-09T14:22:50.109Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Quis aliqua reprehenderit sit laboris amet. Nisi quis irure consequat laboris.",
    "discountPercentage": 27
  },
  {
    "id": "639aee994284feedd9f249ca",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 59
      },
      {
        "size": "S",
        "stock": 4
      },
      {
        "size": "M",
        "stock": 79
      },
      {
        "size": "L",
        "stock": 17
      },
      {
        "size": "Xl",
        "stock": 100
      },
      {
        "size": "XXl",
        "stock": 85
      },
      {
        "size": "3XL",
        "stock": 41
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#EDEDF1",
    "price": 1505,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.96",
    "category": "pants",
    "createdAt": "2010-05-22T23:55:10.095Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Occaecat laboris nisi labore aliquip aliqua anim. Ex exercitation laborum cillum proident ea ullamco consequat commodo ex ea aute do.",
    "discountPercentage": 50
  },
  {
    "id": "639aee9998e832c8bd3ca1e2",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 22
      },
      {
        "size": "S",
        "stock": 42
      },
      {
        "size": "M",
        "stock": 65
      },
      {
        "size": "L",
        "stock": 89
      },
      {
        "size": "Xl",
        "stock": 96
      },
      {
        "size": "XXl",
        "stock": 11
      },
      {
        "size": "3XL",
        "stock": 73
      }
    ],
    "brand": "Balenciaga",
    "color": "#B2B2AD",
    "price": 4717,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.99",
    "category": "pants",
    "createdAt": "2012-05-07T19:46:56.208Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Fugiat non elit amet dolore elit proident laborum dolor. Elit id nostrud sunt consequat sint aute in labore sit nostrud duis Lorem magna.",
    "discountPercentage": 49
  },
  {
    "id": "639aee9985ba8093eee32d41",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 69
      },
      {
        "size": "S",
        "stock": 63
      },
      {
        "size": "M",
        "stock": 41
      },
      {
        "size": "L",
        "stock": 83
      },
      {
        "size": "Xl",
        "stock": 68
      },
      {
        "size": "XXl",
        "stock": 55
      },
      {
        "size": "3XL",
        "stock": 2
      }
    ],
    "brand": "Gucci",
    "color": "#8B561A",
    "price": 2314,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.68",
    "category": "pullover",
    "createdAt": "2010-05-30T05:28:15.782Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ut sit est mollit nulla. Proident aute voluptate ullamco deserunt in consectetur est irure eu anim exercitation.",
    "discountPercentage": 49
  },
  {
    "id": "639aee99cc1ba0164ac82ebe",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 2
      },
      {
        "size": "S",
        "stock": 45
      },
      {
        "size": "M",
        "stock": 72
      },
      {
        "size": "L",
        "stock": 95
      },
      {
        "size": "Xl",
        "stock": 96
      },
      {
        "size": "XXl",
        "stock": 58
      },
      {
        "size": "3XL",
        "stock": 71
      }
    ],
    "brand": "Balenciaga",
    "color": "#4264A8",
    "price": 27,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.25",
    "category": "shoes",
    "createdAt": "2012-08-12T03:31:40.774Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Veniam consequat labore mollit nisi nostrud fugiat eu esse eiusmod dolor. Et mollit voluptate enim esse ad enim reprehenderit labore deserunt anim.",
    "discountPercentage": 1
  },
  {
    "id": "639aee99c89bb1e152116c8f",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 21
      },
      {
        "size": "S",
        "stock": 52
      },
      {
        "size": "M",
        "stock": 48
      },
      {
        "size": "L",
        "stock": 48
      },
      {
        "size": "Xl",
        "stock": 99
      },
      {
        "size": "XXl",
        "stock": 66
      },
      {
        "size": "3XL",
        "stock": 27
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#F0CAC0",
    "price": 1699,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.14",
    "category": "boots",
    "createdAt": "2014-11-17T19:03:27.508Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Laborum culpa id labore ad velit. Dolore et laborum fugiat irure commodo officia qui nulla aliqua.",
    "discountPercentage": 33
  },
  {
    "id": "639aee99988a4d2ff91567a1",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 76
      },
      {
        "size": "S",
        "stock": 32
      },
      {
        "size": "M",
        "stock": 45
      },
      {
        "size": "L",
        "stock": 94
      },
      {
        "size": "Xl",
        "stock": 13
      },
      {
        "size": "XXl",
        "stock": 14
      },
      {
        "size": "3XL",
        "stock": 62
      }
    ],
    "brand": "Balenciaga",
    "color": "#F0CAC0",
    "price": 1122,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.88",
    "category": "pants",
    "createdAt": "2010-11-04T22:13:35.313Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Dolor nulla sint ad fugiat adipisicing do cillum velit ea. Aliquip quis sint cillum qui nulla aliqua et et.",
    "discountPercentage": 10
  },
  {
    "id": "639aee998a546147b11bd5b7",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 42
      },
      {
        "size": "S",
        "stock": 90
      },
      {
        "size": "M",
        "stock": 21
      },
      {
        "size": "L",
        "stock": 26
      },
      {
        "size": "Xl",
        "stock": 80
      },
      {
        "size": "XXl",
        "stock": 76
      },
      {
        "size": "3XL",
        "stock": 92
      }
    ],
    "brand": "Balenciaga",
    "color": "#6B2D38",
    "price": 3838,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.79",
    "category": "sweter",
    "createdAt": "2012-02-14T15:43:17.814Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Aute voluptate ipsum consequat minim qui aliqua consectetur. Mollit amet aute mollit sint voluptate dolore laborum.",
    "discountPercentage": 16
  },
  {
    "id": "639aee99a0992bd823d2f11f",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 84
      },
      {
        "size": "S",
        "stock": 73
      },
      {
        "size": "M",
        "stock": 12
      },
      {
        "size": "L",
        "stock": 36
      },
      {
        "size": "Xl",
        "stock": 42
      },
      {
        "size": "XXl",
        "stock": 34
      },
      {
        "size": "3XL",
        "stock": 13
      }
    ],
    "brand": "Dior",
    "color": "#B2B2AD",
    "price": 815,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.53",
    "category": "sweter",
    "createdAt": "2010-05-06T09:22:18.092Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Sit excepteur cupidatat Lorem velit non labore do sint eu esse ex. Exercitation exercitation duis ipsum tempor occaecat ullamco nostrud eiusmod sunt elit mollit.",
    "discountPercentage": 38
  },
  {
    "id": "639aee9974e265449dd28851",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 49
      },
      {
        "size": "S",
        "stock": 24
      },
      {
        "size": "M",
        "stock": 54
      },
      {
        "size": "L",
        "stock": 76
      },
      {
        "size": "Xl",
        "stock": 41
      },
      {
        "size": "XXl",
        "stock": 88
      },
      {
        "size": "3XL",
        "stock": 44
      }
    ],
    "brand": "Dior",
    "color": "#72736E",
    "price": 440,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.68",
    "category": "pullover",
    "createdAt": "2014-04-14T08:42:08.649Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Tempor anim incididunt consequat mollit sunt elit do laborum tempor non. Ullamco id elit cupidatat excepteur consequat eu elit anim adipisicing aliqua elit.",
    "discountPercentage": 14
  },
  {
    "id": "639aee996135c84c871323c2",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 8
      },
      {
        "size": "S",
        "stock": 100
      },
      {
        "size": "M",
        "stock": 46
      },
      {
        "size": "L",
        "stock": 52
      },
      {
        "size": "Xl",
        "stock": 31
      },
      {
        "size": "XXl",
        "stock": 23
      },
      {
        "size": "3XL",
        "stock": 69
      }
    ],
    "brand": "Prada.",
    "color": "#4264A8",
    "price": 276,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.46",
    "category": "boots",
    "createdAt": "2012-11-18T12:38:24.086Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Duis deserunt proident incididunt ipsum irure ipsum eu. Pariatur labore nulla laboris voluptate id labore aliquip ex laborum culpa cupidatat commodo do ex.",
    "discountPercentage": 3
  },
  {
    "id": "639aee994dba933ffba742c1",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 12
      },
      {
        "size": "S",
        "stock": 78
      },
      {
        "size": "M",
        "stock": 90
      },
      {
        "size": "L",
        "stock": 32
      },
      {
        "size": "Xl",
        "stock": 75
      },
      {
        "size": "XXl",
        "stock": 48
      },
      {
        "size": "3XL",
        "stock": 82
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#447D60",
    "price": 4011,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.41",
    "category": "shoes",
    "createdAt": "2014-03-24T22:54:43.068Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Est et exercitation ipsum sit nulla Lorem et nisi aliqua aliquip mollit voluptate. Amet ad aliquip cillum occaecat voluptate sit occaecat ad excepteur aute veniam amet nostrud amet.",
    "discountPercentage": 42
  },
  {
    "id": "639aee99926dd0cf0a1ecb16",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 90
      },
      {
        "size": "S",
        "stock": 96
      },
      {
        "size": "M",
        "stock": 66
      },
      {
        "size": "L",
        "stock": 57
      },
      {
        "size": "Xl",
        "stock": 42
      },
      {
        "size": "XXl",
        "stock": 1
      },
      {
        "size": "3XL",
        "stock": 11
      }
    ],
    "brand": "Prada.",
    "color": "#EDEDF1",
    "price": 3518,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.96",
    "category": "pullover",
    "createdAt": "2012-11-20T06:09:27.507Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Laborum culpa eiusmod adipisicing excepteur ipsum dolor sunt. Lorem consequat minim occaecat exercitation.",
    "discountPercentage": 30
  },
  {
    "id": "639aee9949605ae2b89b0eec",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 25
      },
      {
        "size": "S",
        "stock": 58
      },
      {
        "size": "M",
        "stock": 22
      },
      {
        "size": "L",
        "stock": 10
      },
      {
        "size": "Xl",
        "stock": 23
      },
      {
        "size": "XXl",
        "stock": 71
      },
      {
        "size": "3XL",
        "stock": 90
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#F0CAC0",
    "price": 2869,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.07",
    "category": "boots",
    "createdAt": "2013-04-09T08:45:34.273Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Voluptate enim adipisicing est sunt aliquip laboris eu. Qui Lorem laborum nulla aliqua irure sit eu amet deserunt dolor amet voluptate.",
    "discountPercentage": 50
  },
  {
    "id": "639aee99e19f2ab93c1bb5a8",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 5
      },
      {
        "size": "S",
        "stock": 83
      },
      {
        "size": "M",
        "stock": 7
      },
      {
        "size": "L",
        "stock": 85
      },
      {
        "size": "Xl",
        "stock": 25
      },
      {
        "size": "XXl",
        "stock": 80
      },
      {
        "size": "3XL",
        "stock": 86
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#B2B2AD",
    "price": 4466,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.34",
    "category": "shoes",
    "createdAt": "2010-08-11T15:26:02.999Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ad pariatur eu minim ut eu mollit commodo eiusmod mollit. Nulla eu esse laborum enim deserunt non ea ipsum.",
    "discountPercentage": 25
  },
  {
    "id": "639aee991e3add1337b77e43",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 50
      },
      {
        "size": "S",
        "stock": 23
      },
      {
        "size": "M",
        "stock": 92
      },
      {
        "size": "L",
        "stock": 10
      },
      {
        "size": "Xl",
        "stock": 9
      },
      {
        "size": "XXl",
        "stock": 78
      },
      {
        "size": "3XL",
        "stock": 73
      }
    ],
    "brand": "Balenciaga",
    "color": "#447D60",
    "price": 1293,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.85",
    "category": "sweter",
    "createdAt": "2010-03-23T16:06:14.284Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Culpa dolor voluptate est elit laboris velit sunt. Et qui consequat culpa labore et enim incididunt et enim adipisicing consectetur culpa commodo.",
    "discountPercentage": 1
  },
  {
    "id": "639aee99c474d33e8410ece3",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 42
      },
      {
        "size": "S",
        "stock": 14
      },
      {
        "size": "M",
        "stock": 52
      },
      {
        "size": "L",
        "stock": 13
      },
      {
        "size": "Xl",
        "stock": 22
      },
      {
        "size": "XXl",
        "stock": 90
      },
      {
        "size": "3XL",
        "stock": 92
      }
    ],
    "brand": "Moncler",
    "color": "#DFDCD4",
    "price": 2702,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.73",
    "category": "sweter",
    "createdAt": "2013-05-19T09:49:44.764Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Velit anim cillum ad adipisicing exercitation amet. Magna ullamco sunt sint non nostrud duis sit nostrud aute dolore laborum culpa tempor id.",
    "discountPercentage": 16
  },
  {
    "id": "639aee99e90031d470af09b6",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 4
      },
      {
        "size": "S",
        "stock": 17
      },
      {
        "size": "M",
        "stock": 93
      },
      {
        "size": "L",
        "stock": 83
      },
      {
        "size": "Xl",
        "stock": 46
      },
      {
        "size": "XXl",
        "stock": 85
      },
      {
        "size": "3XL",
        "stock": 12
      }
    ],
    "brand": "Gucci",
    "color": "#8B561A",
    "price": 4550,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.48",
    "category": "boots",
    "createdAt": "2014-05-04T01:09:57.841Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "In sint ad esse ipsum commodo labore eiusmod in consectetur dolor cillum ut dolor ea. Anim Lorem incididunt cupidatat duis id duis deserunt do nostrud magna fugiat.",
    "discountPercentage": 8
  },
  {
    "id": "639aee99ccae120941d9ff09",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 33
      },
      {
        "size": "S",
        "stock": 7
      },
      {
        "size": "M",
        "stock": 54
      },
      {
        "size": "L",
        "stock": 81
      },
      {
        "size": "Xl",
        "stock": 62
      },
      {
        "size": "XXl",
        "stock": 93
      },
      {
        "size": "3XL",
        "stock": 89
      }
    ],
    "brand": "Balenciaga",
    "color": "#4264A8",
    "price": 3037,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.69",
    "category": "jacket ",
    "createdAt": "2014-03-28T06:45:52.792Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Et non in sit id deserunt excepteur ex ut laborum esse dolor nisi voluptate. Eiusmod quis incididunt commodo sint ullamco.",
    "discountPercentage": 1
  },
  {
    "id": "639aee99db6060b977e98267",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 77
      },
      {
        "size": "S",
        "stock": 58
      },
      {
        "size": "M",
        "stock": 25
      },
      {
        "size": "L",
        "stock": 62
      },
      {
        "size": "Xl",
        "stock": 97
      },
      {
        "size": "XXl",
        "stock": 71
      },
      {
        "size": "3XL",
        "stock": 12
      }
    ],
    "brand": "Prada.",
    "color": "#447D60",
    "price": 4532,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.49",
    "category": "dress ",
    "createdAt": "2014-09-01T18:36:25.054Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Dolore incididunt proident ad occaecat ut eiusmod anim velit incididunt. Ipsum deserunt qui ex exercitation Lorem fugiat exercitation commodo laborum deserunt tempor sunt.",
    "discountPercentage": 35
  },
  {
    "id": "639aee996f752577dd59d3a0",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 21
      },
      {
        "size": "S",
        "stock": 19
      },
      {
        "size": "M",
        "stock": 58
      },
      {
        "size": "L",
        "stock": 62
      },
      {
        "size": "Xl",
        "stock": 45
      },
      {
        "size": "XXl",
        "stock": 1
      },
      {
        "size": "3XL",
        "stock": 48
      }
    ],
    "brand": "Prada.",
    "color": "#F0CAC0",
    "price": 2947,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.38",
    "category": "boots",
    "createdAt": "2011-03-24T18:18:43.061Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Sit mollit occaecat adipisicing irure exercitation labore adipisicing nisi aute anim ullamco culpa. Qui voluptate duis commodo duis tempor quis.",
    "discountPercentage": 15
  },
  {
    "id": "639aee99c6474664ab85354f",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 1
      },
      {
        "size": "S",
        "stock": 9
      },
      {
        "size": "M",
        "stock": 67
      },
      {
        "size": "L",
        "stock": 50
      },
      {
        "size": "Xl",
        "stock": 87
      },
      {
        "size": "XXl",
        "stock": 65
      },
      {
        "size": "3XL",
        "stock": 51
      }
    ],
    "brand": "Gucci",
    "color": "#F0CAC0",
    "price": 1763,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.27",
    "category": "sweter",
    "createdAt": "2010-10-20T16:50:58.212Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Magna duis aliquip Lorem laboris minim. Ea aute ea Lorem eu Lorem labore Lorem reprehenderit irure eu dolor Lorem.",
    "discountPercentage": 2
  },
  {
    "id": "639aee9930c0a2e3d9404d88",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 20
      },
      {
        "size": "S",
        "stock": 65
      },
      {
        "size": "M",
        "stock": 69
      },
      {
        "size": "L",
        "stock": 62
      },
      {
        "size": "Xl",
        "stock": 7
      },
      {
        "size": "XXl",
        "stock": 39
      },
      {
        "size": "3XL",
        "stock": 77
      }
    ],
    "brand": "Dior",
    "color": "#72736E",
    "price": 353,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.36",
    "category": "boots",
    "createdAt": "2012-11-26T15:06:44.341Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Esse nulla culpa ad do pariatur labore dolore irure nostrud. Tempor cillum nulla minim magna commodo esse duis dolore mollit adipisicing minim aliquip magna enim.",
    "discountPercentage": 45
  },
  {
    "id": "639aee99a858186cd64b822c",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 43
      },
      {
        "size": "S",
        "stock": 13
      },
      {
        "size": "M",
        "stock": 32
      },
      {
        "size": "L",
        "stock": 93
      },
      {
        "size": "Xl",
        "stock": 93
      },
      {
        "size": "XXl",
        "stock": 23
      },
      {
        "size": "3XL",
        "stock": 90
      }
    ],
    "brand": "Gucci",
    "color": "#EDEDF1",
    "price": 348,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.77",
    "category": "boots",
    "createdAt": "2014-08-15T18:33:40.922Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Sit in commodo cillum irure dolor aliquip incididunt sit ex ipsum laboris ea ut. Qui eiusmod excepteur est aute excepteur dolore voluptate deserunt consequat cillum commodo nostrud sit.",
    "discountPercentage": 30
  },
  {
    "id": "639aee99a2ad4dba59086527",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 51
      },
      {
        "size": "S",
        "stock": 24
      },
      {
        "size": "M",
        "stock": 42
      },
      {
        "size": "L",
        "stock": 37
      },
      {
        "size": "Xl",
        "stock": 95
      },
      {
        "size": "XXl",
        "stock": 89
      },
      {
        "size": "3XL",
        "stock": 75
      }
    ],
    "brand": "Moncler",
    "color": "#4264A8",
    "price": 2525,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.27",
    "category": "dress ",
    "createdAt": "2012-04-27T08:51:15.045Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Eu ad ea cillum fugiat laborum sint laboris. Pariatur exercitation Lorem est eiusmod ut qui cupidatat ad veniam aute.",
    "discountPercentage": 2
  },
  {
    "id": "639aee99a6f46a9922b60ae2",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 14
      },
      {
        "size": "S",
        "stock": 43
      },
      {
        "size": "M",
        "stock": 2
      },
      {
        "size": "L",
        "stock": 47
      },
      {
        "size": "Xl",
        "stock": 56
      },
      {
        "size": "XXl",
        "stock": 31
      },
      {
        "size": "3XL",
        "stock": 58
      }
    ],
    "brand": "Moncler",
    "color": "#72736E",
    "price": 2963,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.46",
    "category": "dress ",
    "createdAt": "2013-11-02T04:06:11.961Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Non ad ea veniam ad labore nulla pariatur quis pariatur anim laboris aliquip fugiat. Culpa nostrud occaecat veniam do esse.",
    "discountPercentage": 42
  },
  {
    "id": "639aee9964b29aa408ee2c08",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 84
      },
      {
        "size": "S",
        "stock": 19
      },
      {
        "size": "M",
        "stock": 60
      },
      {
        "size": "L",
        "stock": 3
      },
      {
        "size": "Xl",
        "stock": 38
      },
      {
        "size": "XXl",
        "stock": 21
      },
      {
        "size": "3XL",
        "stock": 93
      }
    ],
    "brand": "Gucci",
    "color": "#447D60",
    "price": 1867,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.05",
    "category": "boots",
    "createdAt": "2012-04-02T01:50:49.005Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Duis consectetur consequat laborum tempor. Adipisicing aliqua labore eu do sunt anim.",
    "discountPercentage": 15
  },
  {
    "id": "639aee99a97293dd26fdef3a",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 19
      },
      {
        "size": "S",
        "stock": 41
      },
      {
        "size": "M",
        "stock": 53
      },
      {
        "size": "L",
        "stock": 68
      },
      {
        "size": "Xl",
        "stock": 99
      },
      {
        "size": "XXl",
        "stock": 34
      },
      {
        "size": "3XL",
        "stock": 99
      }
    ],
    "brand": "Balenciaga",
    "color": "#4264A8",
    "price": 1580,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.06",
    "category": "dress ",
    "createdAt": "2013-03-16T21:53:29.593Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Aute nostrud ullamco quis occaecat non. Sint voluptate laboris ullamco ullamco consectetur cillum est pariatur magna id do ex.",
    "discountPercentage": 41
  },
  {
    "id": "639aee997195cdffa4a3ad69",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 66
      },
      {
        "size": "S",
        "stock": 5
      },
      {
        "size": "M",
        "stock": 94
      },
      {
        "size": "L",
        "stock": 99
      },
      {
        "size": "Xl",
        "stock": 59
      },
      {
        "size": "XXl",
        "stock": 56
      },
      {
        "size": "3XL",
        "stock": 54
      }
    ],
    "brand": "Dior",
    "color": "#B2B2AD",
    "price": 716,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.93",
    "category": "jacket ",
    "createdAt": "2012-02-12T09:14:14.437Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Dolore culpa occaecat id veniam culpa ad cupidatat mollit. Et consequat culpa cillum non consectetur sunt reprehenderit pariatur.",
    "discountPercentage": 27
  },
  {
    "id": "639aee99866a2696855e9a92",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 69
      },
      {
        "size": "S",
        "stock": 50
      },
      {
        "size": "M",
        "stock": 62
      },
      {
        "size": "L",
        "stock": 18
      },
      {
        "size": "Xl",
        "stock": 75
      },
      {
        "size": "XXl",
        "stock": 43
      },
      {
        "size": "3XL",
        "stock": 60
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#447D60",
    "price": 4092,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.33",
    "category": "sweter",
    "createdAt": "2011-12-10T00:09:06.351Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Dolor laborum minim qui enim exercitation ipsum commodo cupidatat occaecat excepteur dolore officia. Anim cillum veniam dolore elit velit in mollit proident.",
    "discountPercentage": 15
  },
  {
    "id": "639aee997a12d37a20ad6983",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 75
      },
      {
        "size": "S",
        "stock": 50
      },
      {
        "size": "M",
        "stock": 27
      },
      {
        "size": "L",
        "stock": 68
      },
      {
        "size": "Xl",
        "stock": 92
      },
      {
        "size": "XXl",
        "stock": 95
      },
      {
        "size": "3XL",
        "stock": 100
      }
    ],
    "brand": "Balenciaga",
    "color": "#8B561A",
    "price": 3693,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.55",
    "category": "dress ",
    "createdAt": "2012-02-10T23:20:04.973Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Aute sint nulla et duis. Ex fugiat sunt commodo do proident irure cillum ullamco adipisicing magna elit do sit.",
    "discountPercentage": 29
  },
  {
    "id": "639aee99fbaa7d6c5bdf3a22",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 12
      },
      {
        "size": "S",
        "stock": 33
      },
      {
        "size": "M",
        "stock": 32
      },
      {
        "size": "L",
        "stock": 93
      },
      {
        "size": "Xl",
        "stock": 51
      },
      {
        "size": "XXl",
        "stock": 24
      },
      {
        "size": "3XL",
        "stock": 36
      }
    ],
    "brand": "Dior",
    "color": "#B2B2AD",
    "price": 888,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.88",
    "category": "pullover",
    "createdAt": "2010-01-16T21:09:32.233Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Labore do adipisicing aliquip nostrud consequat ex sint anim aute. Officia ut amet voluptate dolor aute anim incididunt mollit.",
    "discountPercentage": 46
  },
  {
    "id": "639aee99addfa15fd6ae467f",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 67
      },
      {
        "size": "S",
        "stock": 58
      },
      {
        "size": "M",
        "stock": 36
      },
      {
        "size": "L",
        "stock": 81
      },
      {
        "size": "Xl",
        "stock": 56
      },
      {
        "size": "XXl",
        "stock": 79
      },
      {
        "size": "3XL",
        "stock": 97
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#F0CAC0",
    "price": 2708,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.94",
    "category": "boots",
    "createdAt": "2013-01-12T14:59:02.273Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Id enim proident reprehenderit ut nostrud. Dolore occaecat eu proident occaecat elit minim ipsum esse laborum ex nulla occaecat consectetur proident.",
    "discountPercentage": 23
  },
  {
    "id": "639aee992a710855c9148af9",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 65
      },
      {
        "size": "S",
        "stock": 7
      },
      {
        "size": "M",
        "stock": 25
      },
      {
        "size": "L",
        "stock": 8
      },
      {
        "size": "Xl",
        "stock": 28
      },
      {
        "size": "XXl",
        "stock": 94
      },
      {
        "size": "3XL",
        "stock": 41
      }
    ],
    "brand": "Dior",
    "color": "#F0CAC0",
    "price": 357,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.47",
    "category": "boots",
    "createdAt": "2010-12-11T19:40:42.083Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Est in elit officia labore magna proident anim consequat ad. Aliqua ad amet cillum dolore amet id est amet proident consequat qui voluptate.",
    "discountPercentage": 30
  },
  {
    "id": "639aee99b5731d07d911c7eb",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 78
      },
      {
        "size": "S",
        "stock": 45
      },
      {
        "size": "M",
        "stock": 84
      },
      {
        "size": "L",
        "stock": 32
      },
      {
        "size": "Xl",
        "stock": 31
      },
      {
        "size": "XXl",
        "stock": 4
      },
      {
        "size": "3XL",
        "stock": 36
      }
    ],
    "brand": "Moncler",
    "color": "#DFDCD4",
    "price": 100,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.25",
    "category": "jacket ",
    "createdAt": "2013-08-23T06:55:06.994Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Eu fugiat laboris proident mollit fugiat mollit velit. Aliquip sint deserunt eiusmod aute dolor in est laborum.",
    "discountPercentage": 38
  },
  {
    "id": "639aee992b7d93edfaf1c094",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 99
      },
      {
        "size": "S",
        "stock": 71
      },
      {
        "size": "M",
        "stock": 53
      },
      {
        "size": "L",
        "stock": 92
      },
      {
        "size": "Xl",
        "stock": 75
      },
      {
        "size": "XXl",
        "stock": 31
      },
      {
        "size": "3XL",
        "stock": 12
      }
    ],
    "brand": "Gucci",
    "color": "#DFDCD4",
    "price": 1677,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.78",
    "category": "dress ",
    "createdAt": "2011-04-04T04:49:02.240Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Id sit aute officia sunt quis mollit excepteur ex sunt ex nisi. Id commodo commodo commodo pariatur irure excepteur et tempor sunt tempor.",
    "discountPercentage": 18
  },
  {
    "id": "639aee99af27e646ff2f027f",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 58
      },
      {
        "size": "S",
        "stock": 80
      },
      {
        "size": "M",
        "stock": 39
      },
      {
        "size": "L",
        "stock": 52
      },
      {
        "size": "Xl",
        "stock": 37
      },
      {
        "size": "XXl",
        "stock": 32
      },
      {
        "size": "3XL",
        "stock": 60
      }
    ],
    "brand": "Moncler",
    "color": "#447D60",
    "price": 664,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.73",
    "category": "jacket ",
    "createdAt": "2012-07-05T10:51:55.195Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Dolor duis id fugiat fugiat incididunt reprehenderit velit incididunt magna reprehenderit Lorem anim nostrud officia. Aliquip consectetur excepteur do velit irure nisi veniam.",
    "discountPercentage": 17
  },
  {
    "id": "639aee993bb7087f3b604958",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 66
      },
      {
        "size": "S",
        "stock": 36
      },
      {
        "size": "M",
        "stock": 56
      },
      {
        "size": "L",
        "stock": 47
      },
      {
        "size": "Xl",
        "stock": 44
      },
      {
        "size": "XXl",
        "stock": 36
      },
      {
        "size": "3XL",
        "stock": 8
      }
    ],
    "brand": "Balenciaga",
    "color": "#4264A8",
    "price": 504,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.25",
    "category": "shoes",
    "createdAt": "2010-06-24T23:32:36.277Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Labore ut esse anim dolore. Sunt Lorem aute id et laboris Lorem commodo nostrud dolor consequat.",
    "discountPercentage": 33
  },
  {
    "id": "639aee996e83c41d3fbed7e9",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 4
      },
      {
        "size": "S",
        "stock": 74
      },
      {
        "size": "M",
        "stock": 63
      },
      {
        "size": "L",
        "stock": 82
      },
      {
        "size": "Xl",
        "stock": 66
      },
      {
        "size": "XXl",
        "stock": 63
      },
      {
        "size": "3XL",
        "stock": 25
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#DFDCD4",
    "price": 3211,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.03",
    "category": "shoes",
    "createdAt": "2012-03-27T17:06:18.463Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Laboris culpa sit duis culpa anim do dolore et. Incididunt eu excepteur nulla et minim reprehenderit mollit magna reprehenderit commodo cupidatat.",
    "discountPercentage": 17
  },
  {
    "id": "639aee994509d017b37f9f0a",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 100
      },
      {
        "size": "S",
        "stock": 9
      },
      {
        "size": "M",
        "stock": 6
      },
      {
        "size": "L",
        "stock": 29
      },
      {
        "size": "Xl",
        "stock": 65
      },
      {
        "size": "XXl",
        "stock": 81
      },
      {
        "size": "3XL",
        "stock": 31
      }
    ],
    "brand": "Fendi",
    "color": "#72736E",
    "price": 2509,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.01",
    "category": "dress ",
    "createdAt": "2011-12-22T15:03:14.677Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Labore do irure non commodo adipisicing commodo eiusmod ullamco consectetur aute adipisicing id dolore. Mollit sint amet veniam elit Lorem eiusmod ipsum aliqua nulla occaecat reprehenderit exercitation.",
    "discountPercentage": 48
  },
  {
    "id": "639aee99723184eea0370a8f",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 2
      },
      {
        "size": "S",
        "stock": 8
      },
      {
        "size": "M",
        "stock": 42
      },
      {
        "size": "L",
        "stock": 56
      },
      {
        "size": "Xl",
        "stock": 21
      },
      {
        "size": "XXl",
        "stock": 36
      },
      {
        "size": "3XL",
        "stock": 73
      }
    ],
    "brand": "Moncler",
    "color": "#F6EDDD",
    "price": 3977,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.15",
    "category": "pullover",
    "createdAt": "2013-08-25T06:31:47.608Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Anim elit pariatur laboris enim labore proident elit cupidatat et sint in dolor anim do. Enim commodo tempor ut proident fugiat irure mollit sit ex sunt incididunt non quis.",
    "discountPercentage": 41
  },
  {
    "id": "639aee993bed5804430d983c",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 75
      },
      {
        "size": "S",
        "stock": 33
      },
      {
        "size": "M",
        "stock": 97
      },
      {
        "size": "L",
        "stock": 82
      },
      {
        "size": "Xl",
        "stock": 70
      },
      {
        "size": "XXl",
        "stock": 10
      },
      {
        "size": "3XL",
        "stock": 2
      }
    ],
    "brand": "Dior",
    "color": "#72736E",
    "price": 1705,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.13",
    "category": "dress ",
    "createdAt": "2010-10-13T03:27:54.120Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Nisi ex culpa voluptate labore sit do ex elit sunt. Ut dolore pariatur enim reprehenderit.",
    "discountPercentage": 42
  },
  {
    "id": "639aee99153aa8c1cf7636c1",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 1
      },
      {
        "size": "S",
        "stock": 66
      },
      {
        "size": "M",
        "stock": 16
      },
      {
        "size": "L",
        "stock": 39
      },
      {
        "size": "Xl",
        "stock": 52
      },
      {
        "size": "XXl",
        "stock": 22
      },
      {
        "size": "3XL",
        "stock": 60
      }
    ],
    "brand": "Balenciaga",
    "color": "#4264A8",
    "price": 4342,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.12",
    "category": "jacket ",
    "createdAt": "2012-02-10T03:15:12.607Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Elit mollit labore ipsum excepteur magna anim. Ea officia dolore ad officia irure ipsum.",
    "discountPercentage": 10
  },
  {
    "id": "639aee9957dfa6b85865b6c2",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 66
      },
      {
        "size": "S",
        "stock": 35
      },
      {
        "size": "M",
        "stock": 49
      },
      {
        "size": "L",
        "stock": 1
      },
      {
        "size": "Xl",
        "stock": 2
      },
      {
        "size": "XXl",
        "stock": 55
      },
      {
        "size": "3XL",
        "stock": 71
      }
    ],
    "brand": "Dior",
    "color": "#6B2D38",
    "price": 1498,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.18",
    "category": "shoes",
    "createdAt": "2010-11-26T12:01:04.530Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Elit veniam Lorem magna dolore nisi nostrud incididunt exercitation velit. Sunt id nulla exercitation consectetur.",
    "discountPercentage": 35
  },
  {
    "id": "639aee99e07fa292d656734d",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 24
      },
      {
        "size": "S",
        "stock": 7
      },
      {
        "size": "M",
        "stock": 13
      },
      {
        "size": "L",
        "stock": 42
      },
      {
        "size": "Xl",
        "stock": 12
      },
      {
        "size": "XXl",
        "stock": 19
      },
      {
        "size": "3XL",
        "stock": 47
      }
    ],
    "brand": "Prada.",
    "color": "#4264A8",
    "price": 1263,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.87",
    "category": "pullover",
    "createdAt": "2014-04-25T05:06:34.782Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Anim nulla labore amet aliqua laboris nulla aute do anim mollit Lorem anim ad. Ipsum aliquip amet id minim voluptate occaecat velit sit do in do minim aliquip.",
    "discountPercentage": 13
  },
  {
    "id": "639aee995b7ecfb33b982d67",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 24
      },
      {
        "size": "S",
        "stock": 18
      },
      {
        "size": "M",
        "stock": 15
      },
      {
        "size": "L",
        "stock": 28
      },
      {
        "size": "Xl",
        "stock": 30
      },
      {
        "size": "XXl",
        "stock": 83
      },
      {
        "size": "3XL",
        "stock": 10
      }
    ],
    "brand": "Moncler",
    "color": "#F0CAC0",
    "price": 4301,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.86",
    "category": "sweter",
    "createdAt": "2014-07-11T08:09:35.525Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Incididunt ullamco commodo veniam incididunt Lorem officia mollit reprehenderit cillum irure occaecat aute. Cupidatat reprehenderit quis amet magna minim do excepteur cillum culpa Lorem adipisicing velit aliquip.",
    "discountPercentage": 34
  },
  {
    "id": "639aee99bb18aaded27e3642",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 63
      },
      {
        "size": "S",
        "stock": 82
      },
      {
        "size": "M",
        "stock": 41
      },
      {
        "size": "L",
        "stock": 79
      },
      {
        "size": "Xl",
        "stock": 90
      },
      {
        "size": "XXl",
        "stock": 43
      },
      {
        "size": "3XL",
        "stock": 17
      }
    ],
    "brand": "Fendi",
    "color": "#72736E",
    "price": 2249,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.58",
    "category": "jacket ",
    "createdAt": "2011-02-04T22:34:53.659Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Proident labore ad aliquip duis aute enim veniam tempor pariatur ipsum. Deserunt duis occaecat veniam irure minim enim qui laboris.",
    "discountPercentage": 46
  },
  {
    "id": "639aee9937dc24d725036462",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 55
      },
      {
        "size": "S",
        "stock": 73
      },
      {
        "size": "M",
        "stock": 79
      },
      {
        "size": "L",
        "stock": 45
      },
      {
        "size": "Xl",
        "stock": 37
      },
      {
        "size": "XXl",
        "stock": 3
      },
      {
        "size": "3XL",
        "stock": 89
      }
    ],
    "brand": "Balenciaga",
    "color": "#4264A8",
    "price": 3490,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.01",
    "category": "pants",
    "createdAt": "2010-10-30T20:36:10.033Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Voluptate ad dolor consequat laboris culpa duis excepteur id veniam minim. Cillum voluptate proident do fugiat culpa amet reprehenderit reprehenderit officia nulla occaecat dolor.",
    "discountPercentage": 15
  },
  {
    "id": "639aee9929e6db41ca40e431",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 17
      },
      {
        "size": "S",
        "stock": 75
      },
      {
        "size": "M",
        "stock": 38
      },
      {
        "size": "L",
        "stock": 31
      },
      {
        "size": "Xl",
        "stock": 77
      },
      {
        "size": "XXl",
        "stock": 80
      },
      {
        "size": "3XL",
        "stock": 32
      }
    ],
    "brand": "Fendi",
    "color": "#F6EDDD",
    "price": 4802,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.28",
    "category": "jacket ",
    "createdAt": "2014-01-10T12:36:03.812Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Commodo laborum magna cillum eu. Reprehenderit deserunt excepteur tempor et veniam laborum irure officia elit.",
    "discountPercentage": 15
  },
  {
    "id": "639aee995e6ee082cd5265c3",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 52
      },
      {
        "size": "S",
        "stock": 4
      },
      {
        "size": "M",
        "stock": 38
      },
      {
        "size": "L",
        "stock": 40
      },
      {
        "size": "Xl",
        "stock": 90
      },
      {
        "size": "XXl",
        "stock": 32
      },
      {
        "size": "3XL",
        "stock": 88
      }
    ],
    "brand": "Fendi",
    "color": "#B2B2AD",
    "price": 892,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.01",
    "category": "sweter",
    "createdAt": "2010-03-23T05:36:37.715Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Dolore deserunt ut qui commodo in ut aliquip Lorem reprehenderit nulla ex veniam cupidatat. Nostrud quis pariatur minim fugiat magna adipisicing proident.",
    "discountPercentage": 33
  },
  {
    "id": "639aee99090effa97063f37b",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 28
      },
      {
        "size": "S",
        "stock": 86
      },
      {
        "size": "M",
        "stock": 5
      },
      {
        "size": "L",
        "stock": 17
      },
      {
        "size": "Xl",
        "stock": 73
      },
      {
        "size": "XXl",
        "stock": 17
      },
      {
        "size": "3XL",
        "stock": 5
      }
    ],
    "brand": "Dior",
    "color": "#B2B2AD",
    "price": 1345,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.05",
    "category": "pullover",
    "createdAt": "2011-06-13T01:42:03.332Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Cillum commodo do pariatur amet cillum. Incididunt fugiat cillum dolore ex aliqua qui.",
    "discountPercentage": 16
  },
  {
    "id": "639aee99571fd3ba4c442b7f",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 3
      },
      {
        "size": "S",
        "stock": 14
      },
      {
        "size": "M",
        "stock": 4
      },
      {
        "size": "L",
        "stock": 94
      },
      {
        "size": "Xl",
        "stock": 1
      },
      {
        "size": "XXl",
        "stock": 62
      },
      {
        "size": "3XL",
        "stock": 28
      }
    ],
    "brand": "Moncler",
    "color": "#B2B2AD",
    "price": 16,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.09",
    "category": "dress ",
    "createdAt": "2010-05-15T04:16:15.235Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Laborum ex excepteur dolor esse ex consequat id elit laboris sit. Nisi tempor cupidatat do adipisicing magna ullamco pariatur deserunt sunt ut est sit.",
    "discountPercentage": 13
  },
  {
    "id": "639aee992506b6d35feb7144",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 21
      },
      {
        "size": "S",
        "stock": 5
      },
      {
        "size": "M",
        "stock": 60
      },
      {
        "size": "L",
        "stock": 48
      },
      {
        "size": "Xl",
        "stock": 49
      },
      {
        "size": "XXl",
        "stock": 41
      },
      {
        "size": "3XL",
        "stock": 16
      }
    ],
    "brand": "Fendi",
    "color": "#B2B2AD",
    "price": 4873,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.37",
    "category": "dress ",
    "createdAt": "2011-06-03T18:59:52.809Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Sit ea aliquip ad non reprehenderit nisi dolor. Esse elit pariatur consequat non ut.",
    "discountPercentage": 46
  },
  {
    "id": "639aee99adc04403e4099818",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 41
      },
      {
        "size": "S",
        "stock": 81
      },
      {
        "size": "M",
        "stock": 65
      },
      {
        "size": "L",
        "stock": 45
      },
      {
        "size": "Xl",
        "stock": 97
      },
      {
        "size": "XXl",
        "stock": 4
      },
      {
        "size": "3XL",
        "stock": 21
      }
    ],
    "brand": "Prada.",
    "color": "#6B2D38",
    "price": 1657,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.52",
    "category": "pullover",
    "createdAt": "2012-03-09T23:09:12.108Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Velit mollit labore laborum id esse est occaecat enim anim laboris. Magna et magna aute reprehenderit proident tempor in deserunt ex commodo.",
    "discountPercentage": 21
  },
  {
    "id": "639aee99c1a6ea06c0e3315b",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 42
      },
      {
        "size": "S",
        "stock": 70
      },
      {
        "size": "M",
        "stock": 63
      },
      {
        "size": "L",
        "stock": 3
      },
      {
        "size": "Xl",
        "stock": 97
      },
      {
        "size": "XXl",
        "stock": 50
      },
      {
        "size": "3XL",
        "stock": 64
      }
    ],
    "brand": "Balenciaga",
    "color": "#B2B2AD",
    "price": 3791,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.75",
    "category": "shoes",
    "createdAt": "2013-10-02T17:41:13.498Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Magna anim non irure dolor ex enim laboris id ipsum exercitation. Cupidatat aute dolor veniam amet id consequat do.",
    "discountPercentage": 22
  },
  {
    "id": "639aee998779508a6fba4be3",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 83
      },
      {
        "size": "S",
        "stock": 98
      },
      {
        "size": "M",
        "stock": 84
      },
      {
        "size": "L",
        "stock": 21
      },
      {
        "size": "Xl",
        "stock": 40
      },
      {
        "size": "XXl",
        "stock": 30
      },
      {
        "size": "3XL",
        "stock": 87
      }
    ],
    "brand": "Balenciaga",
    "color": "#B2B2AD",
    "price": 4189,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.03",
    "category": "boots",
    "createdAt": "2014-10-11T00:12:12.269Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Fugiat exercitation anim dolor nisi in incididunt. Non eiusmod consequat voluptate mollit exercitation minim nostrud adipisicing.",
    "discountPercentage": 29
  },
  {
    "id": "639aee99b23e796d7300d0a2",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 19
      },
      {
        "size": "S",
        "stock": 56
      },
      {
        "size": "M",
        "stock": 48
      },
      {
        "size": "L",
        "stock": 95
      },
      {
        "size": "Xl",
        "stock": 36
      },
      {
        "size": "XXl",
        "stock": 80
      },
      {
        "size": "3XL",
        "stock": 46
      }
    ],
    "brand": "Moncler",
    "color": "#72736E",
    "price": 3297,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.04",
    "category": "pullover",
    "createdAt": "2014-03-30T19:00:50.009Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Et proident sint sint ullamco ex aute ipsum aliquip minim. Adipisicing minim ut aliqua veniam sint deserunt adipisicing.",
    "discountPercentage": 37
  },
  {
    "id": "639aee99da8dddfb266eb11f",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 6
      },
      {
        "size": "S",
        "stock": 25
      },
      {
        "size": "M",
        "stock": 70
      },
      {
        "size": "L",
        "stock": 42
      },
      {
        "size": "Xl",
        "stock": 26
      },
      {
        "size": "XXl",
        "stock": 38
      },
      {
        "size": "3XL",
        "stock": 16
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#EDEDF1",
    "price": 3246,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.78",
    "category": "sweter",
    "createdAt": "2014-09-28T12:42:37.980Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Dolore consequat amet aliqua cupidatat commodo commodo eiusmod ipsum aliquip nostrud. Velit dolor aliquip elit ut est nisi esse consectetur labore nostrud laborum ullamco.",
    "discountPercentage": 3
  },
  {
    "id": "639aee9968e822f023b0aa59",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 94
      },
      {
        "size": "S",
        "stock": 5
      },
      {
        "size": "M",
        "stock": 21
      },
      {
        "size": "L",
        "stock": 11
      },
      {
        "size": "Xl",
        "stock": 12
      },
      {
        "size": "XXl",
        "stock": 1
      },
      {
        "size": "3XL",
        "stock": 40
      }
    ],
    "brand": "Dior",
    "color": "#F6EDDD",
    "price": 3447,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.49",
    "category": "dress ",
    "createdAt": "2010-06-12T13:33:34.629Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Nulla elit reprehenderit culpa anim non eu veniam. Anim aute ex elit consectetur irure laboris id id esse esse sint commodo magna proident.",
    "discountPercentage": 23
  },
  {
    "id": "639aee99890a0be25838993d",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 17
      },
      {
        "size": "S",
        "stock": 81
      },
      {
        "size": "M",
        "stock": 77
      },
      {
        "size": "L",
        "stock": 8
      },
      {
        "size": "Xl",
        "stock": 23
      },
      {
        "size": "XXl",
        "stock": 49
      },
      {
        "size": "3XL",
        "stock": 75
      }
    ],
    "brand": "Moncler",
    "color": "#447D60",
    "price": 1477,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.97",
    "category": "pants",
    "createdAt": "2014-02-26T10:09:09.925Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Reprehenderit est culpa commodo occaecat in mollit in in. Non proident dolor deserunt officia velit sint voluptate commodo irure exercitation non in.",
    "discountPercentage": 43
  },
  {
    "id": "639aee99e168e5fd4d39f8f9",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 82
      },
      {
        "size": "S",
        "stock": 97
      },
      {
        "size": "M",
        "stock": 2
      },
      {
        "size": "L",
        "stock": 86
      },
      {
        "size": "Xl",
        "stock": 43
      },
      {
        "size": "XXl",
        "stock": 95
      },
      {
        "size": "3XL",
        "stock": 53
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#F6EDDD",
    "price": 4108,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.76",
    "category": "shoes",
    "createdAt": "2012-02-07T04:50:20.130Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Veniam magna consequat Lorem sint et ea incididunt. Consectetur id laborum non ipsum exercitation ea enim eiusmod ullamco deserunt ipsum nostrud.",
    "discountPercentage": 19
  },
  {
    "id": "639aee99058c7a1f73d9ad1b",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 52
      },
      {
        "size": "S",
        "stock": 99
      },
      {
        "size": "M",
        "stock": 40
      },
      {
        "size": "L",
        "stock": 63
      },
      {
        "size": "Xl",
        "stock": 53
      },
      {
        "size": "XXl",
        "stock": 82
      },
      {
        "size": "3XL",
        "stock": 60
      }
    ],
    "brand": "Dior",
    "color": "#6B2D38",
    "price": 1213,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.71",
    "category": "dress ",
    "createdAt": "2012-04-09T14:24:25.426Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Aliquip laboris adipisicing nulla proident esse do nisi exercitation pariatur proident veniam id ea. Culpa laborum et Lorem proident sunt cupidatat.",
    "discountPercentage": 21
  },
  {
    "id": "639aee9999413b40f6cf46c7",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 64
      },
      {
        "size": "S",
        "stock": 66
      },
      {
        "size": "M",
        "stock": 69
      },
      {
        "size": "L",
        "stock": 17
      },
      {
        "size": "Xl",
        "stock": 81
      },
      {
        "size": "XXl",
        "stock": 53
      },
      {
        "size": "3XL",
        "stock": 14
      }
    ],
    "brand": "Moncler",
    "color": "#447D60",
    "price": 1409,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.37",
    "category": "shoes",
    "createdAt": "2014-10-18T05:16:21.483Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Aute occaecat mollit excepteur tempor veniam deserunt. Cupidatat laboris pariatur Lorem ipsum tempor ut sunt culpa occaecat culpa quis cillum velit proident.",
    "discountPercentage": 34
  },
  {
    "id": "639aee9991312ab932f1ceb5",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 44
      },
      {
        "size": "S",
        "stock": 98
      },
      {
        "size": "M",
        "stock": 52
      },
      {
        "size": "L",
        "stock": 45
      },
      {
        "size": "Xl",
        "stock": 5
      },
      {
        "size": "XXl",
        "stock": 54
      },
      {
        "size": "3XL",
        "stock": 66
      }
    ],
    "brand": "Dior",
    "color": "#F0CAC0",
    "price": 200,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.95",
    "category": "sweter",
    "createdAt": "2012-09-21T00:26:36.288Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Occaecat pariatur in pariatur sit nostrud culpa non ad consequat culpa. Culpa laboris veniam mollit esse elit et sint eu nulla laborum consequat commodo minim minim.",
    "discountPercentage": 32
  },
  {
    "id": "639aee9920ff13e5318206b2",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 76
      },
      {
        "size": "S",
        "stock": 14
      },
      {
        "size": "M",
        "stock": 29
      },
      {
        "size": "L",
        "stock": 5
      },
      {
        "size": "Xl",
        "stock": 67
      },
      {
        "size": "XXl",
        "stock": 44
      },
      {
        "size": "3XL",
        "stock": 65
      }
    ],
    "brand": "Dior",
    "color": "#4264A8",
    "price": 4447,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.36",
    "category": "boots",
    "createdAt": "2010-07-09T02:59:02.901Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "In nulla duis aute aute mollit enim laborum dolor nisi nostrud nisi id. Voluptate sit ex proident sit quis.",
    "discountPercentage": 17
  },
  {
    "id": "639aee99cc745784440a32e8",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 32
      },
      {
        "size": "S",
        "stock": 46
      },
      {
        "size": "M",
        "stock": 100
      },
      {
        "size": "L",
        "stock": 96
      },
      {
        "size": "Xl",
        "stock": 73
      },
      {
        "size": "XXl",
        "stock": 91
      },
      {
        "size": "3XL",
        "stock": 59
      }
    ],
    "brand": "Moncler",
    "color": "#72736E",
    "price": 4796,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.17",
    "category": "pants",
    "createdAt": "2011-10-16T01:07:46.499Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Eiusmod duis minim cillum fugiat qui nostrud sunt aute. Amet anim et qui aliquip sint.",
    "discountPercentage": 2
  },
  {
    "id": "639aee99368ccee4ddcb92ed",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 28
      },
      {
        "size": "S",
        "stock": 24
      },
      {
        "size": "M",
        "stock": 21
      },
      {
        "size": "L",
        "stock": 24
      },
      {
        "size": "Xl",
        "stock": 61
      },
      {
        "size": "XXl",
        "stock": 45
      },
      {
        "size": "3XL",
        "stock": 14
      }
    ],
    "brand": "Prada.",
    "color": "#4264A8",
    "price": 1523,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.19",
    "category": "sweter",
    "createdAt": "2012-06-13T14:38:59.266Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Magna commodo excepteur duis cillum Lorem veniam. Pariatur mollit ullamco anim et consectetur qui incididunt sint enim do.",
    "discountPercentage": 38
  },
  {
    "id": "639aee99dbb64ad4abf9de9e",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 55
      },
      {
        "size": "S",
        "stock": 55
      },
      {
        "size": "M",
        "stock": 55
      },
      {
        "size": "L",
        "stock": 50
      },
      {
        "size": "Xl",
        "stock": 15
      },
      {
        "size": "XXl",
        "stock": 38
      },
      {
        "size": "3XL",
        "stock": 37
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#72736E",
    "price": 53,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.49",
    "category": "pullover",
    "createdAt": "2012-10-31T13:12:12.953Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Occaecat velit aliquip veniam adipisicing ea commodo occaecat. Minim ullamco velit laborum do enim duis duis occaecat ullamco duis ea sint reprehenderit cillum.",
    "discountPercentage": 40
  },
  {
    "id": "639aee992c78def9401f4072",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 11
      },
      {
        "size": "S",
        "stock": 87
      },
      {
        "size": "M",
        "stock": 79
      },
      {
        "size": "L",
        "stock": 7
      },
      {
        "size": "Xl",
        "stock": 11
      },
      {
        "size": "XXl",
        "stock": 86
      },
      {
        "size": "3XL",
        "stock": 9
      }
    ],
    "brand": "Balenciaga",
    "color": "#8B561A",
    "price": 2061,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.36",
    "category": "dress ",
    "createdAt": "2010-05-07T06:31:24.904Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Dolor ullamco pariatur Lorem occaecat consectetur ad. Elit pariatur qui labore aliquip.",
    "discountPercentage": 25
  },
  {
    "id": "639aee99891dedea7f66089d",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 87
      },
      {
        "size": "S",
        "stock": 20
      },
      {
        "size": "M",
        "stock": 43
      },
      {
        "size": "L",
        "stock": 98
      },
      {
        "size": "Xl",
        "stock": 74
      },
      {
        "size": "XXl",
        "stock": 5
      },
      {
        "size": "3XL",
        "stock": 23
      }
    ],
    "brand": "Fendi",
    "color": "#72736E",
    "price": 4966,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.23",
    "category": "pullover",
    "createdAt": "2011-03-24T22:04:18.440Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Pariatur velit aliquip velit elit. Reprehenderit Lorem ea veniam nulla laborum laboris dolor do id enim minim laborum.",
    "discountPercentage": 1
  },
  {
    "id": "639aee99a1bf8779afcdc089",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 46
      },
      {
        "size": "S",
        "stock": 73
      },
      {
        "size": "M",
        "stock": 93
      },
      {
        "size": "L",
        "stock": 79
      },
      {
        "size": "Xl",
        "stock": 82
      },
      {
        "size": "XXl",
        "stock": 14
      },
      {
        "size": "3XL",
        "stock": 24
      }
    ],
    "brand": "Gucci",
    "color": "#F0CAC0",
    "price": 1401,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.37",
    "category": "sweter",
    "createdAt": "2014-12-21T08:44:05.142Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Consequat tempor laboris aliquip dolore esse in et veniam proident non. Commodo ullamco laboris enim amet magna proident ullamco nulla labore dolor enim voluptate adipisicing esse.",
    "discountPercentage": 17
  },
  {
    "id": "639aee99ee607618f8249f38",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 97
      },
      {
        "size": "S",
        "stock": 91
      },
      {
        "size": "M",
        "stock": 65
      },
      {
        "size": "L",
        "stock": 57
      },
      {
        "size": "Xl",
        "stock": 33
      },
      {
        "size": "XXl",
        "stock": 26
      },
      {
        "size": "3XL",
        "stock": 92
      }
    ],
    "brand": "Dior",
    "color": "#447D60",
    "price": 1047,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.11",
    "category": "sweter",
    "createdAt": "2014-03-18T22:53:08.646Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Nulla duis ullamco ullamco aliqua non id consectetur adipisicing ullamco aliquip occaecat in nulla. Amet nisi adipisicing tempor dolore sunt cupidatat culpa cupidatat enim labore non labore.",
    "discountPercentage": 44
  },
  {
    "id": "639aee99e95ff28a5d0a3cda",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 4
      },
      {
        "size": "S",
        "stock": 21
      },
      {
        "size": "M",
        "stock": 11
      },
      {
        "size": "L",
        "stock": 59
      },
      {
        "size": "Xl",
        "stock": 39
      },
      {
        "size": "XXl",
        "stock": 58
      },
      {
        "size": "3XL",
        "stock": 6
      }
    ],
    "brand": "Moncler",
    "color": "#DFDCD4",
    "price": 3459,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.18",
    "category": "jacket ",
    "createdAt": "2012-01-04T23:00:32.148Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Tempor nisi dolore sit mollit duis velit. Lorem non excepteur laboris irure mollit sint dolor elit culpa velit Lorem consectetur in.",
    "discountPercentage": 9
  },
  {
    "id": "639aee99a23fe39c0e802117",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 80
      },
      {
        "size": "S",
        "stock": 23
      },
      {
        "size": "M",
        "stock": 60
      },
      {
        "size": "L",
        "stock": 83
      },
      {
        "size": "Xl",
        "stock": 79
      },
      {
        "size": "XXl",
        "stock": 79
      },
      {
        "size": "3XL",
        "stock": 76
      }
    ],
    "brand": "Fendi",
    "color": "#6B2D38",
    "price": 1068,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.45",
    "category": "shoes",
    "createdAt": "2014-06-17T01:07:15.021Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Minim incididunt velit minim mollit sit dolor. Laboris mollit dolore voluptate irure magna ut officia aliquip.",
    "discountPercentage": 30
  },
  {
    "id": "639aee996470fa3a7667b052",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 50
      },
      {
        "size": "S",
        "stock": 1
      },
      {
        "size": "M",
        "stock": 67
      },
      {
        "size": "L",
        "stock": 48
      },
      {
        "size": "Xl",
        "stock": 27
      },
      {
        "size": "XXl",
        "stock": 67
      },
      {
        "size": "3XL",
        "stock": 56
      }
    ],
    "brand": "Dior",
    "color": "#72736E",
    "price": 1545,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.22",
    "category": "pullover",
    "createdAt": "2010-06-04T14:21:53.433Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Eu adipisicing culpa mollit elit aliqua deserunt ipsum laborum qui proident eu fugiat id nostrud. Non aute Lorem nulla mollit excepteur velit.",
    "discountPercentage": 18
  },
  {
    "id": "639aee99a4f3897d18da6a03",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 34
      },
      {
        "size": "S",
        "stock": 56
      },
      {
        "size": "M",
        "stock": 41
      },
      {
        "size": "L",
        "stock": 30
      },
      {
        "size": "Xl",
        "stock": 54
      },
      {
        "size": "XXl",
        "stock": 61
      },
      {
        "size": "3XL",
        "stock": 30
      }
    ],
    "brand": "Prada.",
    "color": "#6B2D38",
    "price": 3489,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.74",
    "category": "jacket ",
    "createdAt": "2014-07-18T13:18:52.823Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "In velit anim et Lorem commodo. Esse labore minim eu eu ut in fugiat laboris ad.",
    "discountPercentage": 17
  },
  {
    "id": "639aee9956e4d17b8f7092ef",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 83
      },
      {
        "size": "S",
        "stock": 67
      },
      {
        "size": "M",
        "stock": 62
      },
      {
        "size": "L",
        "stock": 46
      },
      {
        "size": "Xl",
        "stock": 35
      },
      {
        "size": "XXl",
        "stock": 14
      },
      {
        "size": "3XL",
        "stock": 75
      }
    ],
    "brand": "Balenciaga",
    "color": "#EDEDF1",
    "price": 1629,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.47",
    "category": "jacket ",
    "createdAt": "2010-12-31T05:01:41.961Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Occaecat magna officia do enim velit aute sint cillum laboris ipsum nisi eu consequat. Cupidatat culpa enim consequat anim velit.",
    "discountPercentage": 22
  },
  {
    "id": "639aee999522919b9f24f58b",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 58
      },
      {
        "size": "S",
        "stock": 79
      },
      {
        "size": "M",
        "stock": 8
      },
      {
        "size": "L",
        "stock": 35
      },
      {
        "size": "Xl",
        "stock": 88
      },
      {
        "size": "XXl",
        "stock": 18
      },
      {
        "size": "3XL",
        "stock": 21
      }
    ],
    "brand": "Fendi",
    "color": "#6B2D38",
    "price": 2851,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.43",
    "category": "pullover",
    "createdAt": "2012-11-26T06:55:10.545Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Incididunt reprehenderit enim excepteur aliquip occaecat ullamco consectetur. Ad fugiat non esse voluptate consequat est est dolore cillum cillum eiusmod nisi.",
    "discountPercentage": 15
  },
  {
    "id": "639aee99545d7b3074ea634e",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 20
      },
      {
        "size": "S",
        "stock": 82
      },
      {
        "size": "M",
        "stock": 41
      },
      {
        "size": "L",
        "stock": 6
      },
      {
        "size": "Xl",
        "stock": 7
      },
      {
        "size": "XXl",
        "stock": 97
      },
      {
        "size": "3XL",
        "stock": 93
      }
    ],
    "brand": "Fendi",
    "color": "#F6EDDD",
    "price": 3130,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.08",
    "category": "sweter",
    "createdAt": "2014-06-09T05:27:49.076Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Quis ullamco labore aute sunt cupidatat ut anim duis exercitation ex in quis pariatur cillum. Deserunt aliqua elit nostrud officia officia minim elit culpa eu duis proident incididunt adipisicing.",
    "discountPercentage": 2
  },
  {
    "id": "639aee99e4ba0a2297f3f3d1",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 48
      },
      {
        "size": "S",
        "stock": 46
      },
      {
        "size": "M",
        "stock": 83
      },
      {
        "size": "L",
        "stock": 97
      },
      {
        "size": "Xl",
        "stock": 35
      },
      {
        "size": "XXl",
        "stock": 16
      },
      {
        "size": "3XL",
        "stock": 30
      }
    ],
    "brand": "Prada.",
    "color": "#6B2D38",
    "price": 4912,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.66",
    "category": "sweter",
    "createdAt": "2012-07-31T12:51:03.171Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Magna officia ullamco et sint fugiat amet veniam est dolor nisi consequat. Sint dolor est officia in.",
    "discountPercentage": 6
  },
  {
    "id": "639aee99df8d88ab63aeeb42",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 13
      },
      {
        "size": "S",
        "stock": 74
      },
      {
        "size": "M",
        "stock": 28
      },
      {
        "size": "L",
        "stock": 70
      },
      {
        "size": "Xl",
        "stock": 97
      },
      {
        "size": "XXl",
        "stock": 24
      },
      {
        "size": "3XL",
        "stock": 74
      }
    ],
    "brand": "Gucci",
    "color": "#EDEDF1",
    "price": 4910,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.86",
    "category": "jacket ",
    "createdAt": "2013-08-04T14:11:24.853Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Quis aute magna qui eiusmod deserunt mollit velit elit quis in et eiusmod id. Do minim est veniam tempor magna cillum officia id quis exercitation amet.",
    "discountPercentage": 24
  },
  {
    "id": "639aee99f27b1a6eee9589a5",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 66
      },
      {
        "size": "S",
        "stock": 52
      },
      {
        "size": "M",
        "stock": 4
      },
      {
        "size": "L",
        "stock": 48
      },
      {
        "size": "Xl",
        "stock": 6
      },
      {
        "size": "XXl",
        "stock": 2
      },
      {
        "size": "3XL",
        "stock": 44
      }
    ],
    "brand": "Dior",
    "color": "#447D60",
    "price": 1128,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.49",
    "category": "pullover",
    "createdAt": "2014-04-03T19:55:11.733Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Et quis consequat reprehenderit do in cillum nulla excepteur duis cupidatat incididunt ut commodo. Occaecat elit ad sint veniam et nostrud adipisicing.",
    "discountPercentage": 40
  },
  {
    "id": "639aee99a0dd80281b66d86d",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 12
      },
      {
        "size": "S",
        "stock": 68
      },
      {
        "size": "M",
        "stock": 66
      },
      {
        "size": "L",
        "stock": 96
      },
      {
        "size": "Xl",
        "stock": 99
      },
      {
        "size": "XXl",
        "stock": 79
      },
      {
        "size": "3XL",
        "stock": 58
      }
    ],
    "brand": "Prada.",
    "color": "#B2B2AD",
    "price": 4234,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.41",
    "category": "dress ",
    "createdAt": "2013-09-18T01:48:36.806Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Elit officia voluptate aliqua esse eiusmod laborum exercitation commodo nulla ut id. Anim esse excepteur dolor sit fugiat.",
    "discountPercentage": 44
  },
  {
    "id": "639aee999f2ac99b949808ad",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 11
      },
      {
        "size": "S",
        "stock": 91
      },
      {
        "size": "M",
        "stock": 14
      },
      {
        "size": "L",
        "stock": 42
      },
      {
        "size": "Xl",
        "stock": 80
      },
      {
        "size": "XXl",
        "stock": 35
      },
      {
        "size": "3XL",
        "stock": 20
      }
    ],
    "brand": "Gucci",
    "color": "#8B561A",
    "price": 4639,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.84",
    "category": "dress ",
    "createdAt": "2010-01-13T14:34:28.706Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ut ullamco commodo eu aliquip ex incididunt ad cillum cillum dolor aliquip et dolore. Ex ipsum pariatur occaecat culpa nostrud.",
    "discountPercentage": 16
  },
  {
    "id": "639aee991e40924450434f98",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 96
      },
      {
        "size": "S",
        "stock": 80
      },
      {
        "size": "M",
        "stock": 60
      },
      {
        "size": "L",
        "stock": 42
      },
      {
        "size": "Xl",
        "stock": 42
      },
      {
        "size": "XXl",
        "stock": 48
      },
      {
        "size": "3XL",
        "stock": 33
      }
    ],
    "brand": "Gucci",
    "color": "#F0CAC0",
    "price": 1470,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.81",
    "category": "boots",
    "createdAt": "2011-08-31T15:53:07.368Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Est duis in enim nisi tempor et quis sit. Ad quis nostrud aliquip do.",
    "discountPercentage": 14
  },
  {
    "id": "639aee993e82e034eb8dc6ff",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 80
      },
      {
        "size": "S",
        "stock": 88
      },
      {
        "size": "M",
        "stock": 85
      },
      {
        "size": "L",
        "stock": 19
      },
      {
        "size": "Xl",
        "stock": 61
      },
      {
        "size": "XXl",
        "stock": 22
      },
      {
        "size": "3XL",
        "stock": 60
      }
    ],
    "brand": "Prada.",
    "color": "#F6EDDD",
    "price": 2849,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.98",
    "category": "pants",
    "createdAt": "2010-11-06T19:57:33.141Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Qui occaecat laboris nisi consequat esse magna quis qui. Ipsum pariatur anim cillum nulla culpa veniam.",
    "discountPercentage": 33
  },
  {
    "id": "639aee99ea7c98692a767e1e",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 57
      },
      {
        "size": "S",
        "stock": 74
      },
      {
        "size": "M",
        "stock": 78
      },
      {
        "size": "L",
        "stock": 67
      },
      {
        "size": "Xl",
        "stock": 58
      },
      {
        "size": "XXl",
        "stock": 83
      },
      {
        "size": "3XL",
        "stock": 64
      }
    ],
    "brand": "Balenciaga",
    "color": "#DFDCD4",
    "price": 370,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.46",
    "category": "pullover",
    "createdAt": "2013-04-30T20:25:05.441Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Quis duis ea laborum aliqua dolor esse aute cupidatat ullamco eu. Labore reprehenderit incididunt dolore elit dolore eiusmod voluptate id cillum elit.",
    "discountPercentage": 29
  },
  {
    "id": "639aee99db4ff36afb4495e6",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 3
      },
      {
        "size": "S",
        "stock": 76
      },
      {
        "size": "M",
        "stock": 73
      },
      {
        "size": "L",
        "stock": 91
      },
      {
        "size": "Xl",
        "stock": 43
      },
      {
        "size": "XXl",
        "stock": 17
      },
      {
        "size": "3XL",
        "stock": 53
      }
    ],
    "brand": "Dior",
    "color": "#6B2D38",
    "price": 1523,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.84",
    "category": "shoes",
    "createdAt": "2013-11-06T21:52:35.745Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Lorem ea eu nostrud sunt duis consequat anim laboris nostrud irure exercitation ut eiusmod. Laborum sit sit enim qui esse et fugiat velit cupidatat in cillum ullamco qui aute.",
    "discountPercentage": 11
  },
  {
    "id": "639aee99851d02f51e18cc52",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 33
      },
      {
        "size": "S",
        "stock": 82
      },
      {
        "size": "M",
        "stock": 5
      },
      {
        "size": "L",
        "stock": 68
      },
      {
        "size": "Xl",
        "stock": 8
      },
      {
        "size": "XXl",
        "stock": 68
      },
      {
        "size": "3XL",
        "stock": 18
      }
    ],
    "brand": "Dior",
    "color": "#DFDCD4",
    "price": 4253,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.12",
    "category": "sweter",
    "createdAt": "2012-01-24T00:46:10.639Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Duis quis minim sit Lorem mollit nulla labore dolor incididunt duis pariatur. Eiusmod proident velit adipisicing sit aliquip amet veniam Lorem culpa.",
    "discountPercentage": 13
  },
  {
    "id": "639aee9978c2f5482f9d7c67",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 48
      },
      {
        "size": "S",
        "stock": 15
      },
      {
        "size": "M",
        "stock": 53
      },
      {
        "size": "L",
        "stock": 59
      },
      {
        "size": "Xl",
        "stock": 87
      },
      {
        "size": "XXl",
        "stock": 30
      },
      {
        "size": "3XL",
        "stock": 64
      }
    ],
    "brand": "Moncler",
    "color": "#4264A8",
    "price": 3692,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.19",
    "category": "sweter",
    "createdAt": "2013-11-22T19:44:57.897Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Consequat sint consectetur pariatur laborum velit sit laboris veniam eiusmod nulla reprehenderit. Veniam dolor eu occaecat dolor reprehenderit sunt labore occaecat elit ad eu.",
    "discountPercentage": 47
  },
  {
    "id": "639aee99abe19f33ed31a60b",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 24
      },
      {
        "size": "S",
        "stock": 19
      },
      {
        "size": "M",
        "stock": 21
      },
      {
        "size": "L",
        "stock": 11
      },
      {
        "size": "Xl",
        "stock": 58
      },
      {
        "size": "XXl",
        "stock": 6
      },
      {
        "size": "3XL",
        "stock": 81
      }
    ],
    "brand": "Dior",
    "color": "#F6EDDD",
    "price": 3823,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.07",
    "category": "pullover",
    "createdAt": "2012-07-08T04:13:52.050Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Voluptate consequat anim amet cillum deserunt laborum id anim eu ullamco. Enim dolor consequat quis id officia laborum voluptate irure eu quis voluptate officia adipisicing.",
    "discountPercentage": 7
  },
  {
    "id": "639aee99dc1337ba87c0177d",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 22
      },
      {
        "size": "S",
        "stock": 72
      },
      {
        "size": "M",
        "stock": 66
      },
      {
        "size": "L",
        "stock": 32
      },
      {
        "size": "Xl",
        "stock": 31
      },
      {
        "size": "XXl",
        "stock": 98
      },
      {
        "size": "3XL",
        "stock": 38
      }
    ],
    "brand": "Fendi",
    "color": "#F0CAC0",
    "price": 1400,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.36",
    "category": "dress ",
    "createdAt": "2010-07-20T18:20:55.559Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Elit nulla quis veniam ea aute est officia ad laboris eu fugiat aute fugiat. Laborum officia dolor excepteur consequat in exercitation Lorem dolor labore et sit nostrud et.",
    "discountPercentage": 10
  },
  {
    "id": "639aee996f2b9e7e29a02b58",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 61
      },
      {
        "size": "S",
        "stock": 22
      },
      {
        "size": "M",
        "stock": 80
      },
      {
        "size": "L",
        "stock": 81
      },
      {
        "size": "Xl",
        "stock": 79
      },
      {
        "size": "XXl",
        "stock": 41
      },
      {
        "size": "3XL",
        "stock": 1
      }
    ],
    "brand": "Moncler",
    "color": "#DFDCD4",
    "price": 4368,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.12",
    "category": "dress ",
    "createdAt": "2014-08-14T22:06:24.836Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Incididunt ea ut reprehenderit fugiat duis laborum consectetur cupidatat Lorem cillum eu excepteur. Aute magna tempor consectetur occaecat labore ipsum sunt.",
    "discountPercentage": 47
  },
  {
    "id": "639aee99ae9c91ffe9320fdf",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 56
      },
      {
        "size": "S",
        "stock": 2
      },
      {
        "size": "M",
        "stock": 41
      },
      {
        "size": "L",
        "stock": 81
      },
      {
        "size": "Xl",
        "stock": 43
      },
      {
        "size": "XXl",
        "stock": 8
      },
      {
        "size": "3XL",
        "stock": 38
      }
    ],
    "brand": "Gucci",
    "color": "#6B2D38",
    "price": 58,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.91",
    "category": "pants",
    "createdAt": "2014-04-01T15:55:58.434Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "In ipsum aliqua adipisicing sunt enim. Laboris irure tempor consectetur adipisicing amet velit reprehenderit deserunt consequat officia sit consequat incididunt anim.",
    "discountPercentage": 48
  },
  {
    "id": "639aee9992b60eb078bcfb22",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 95
      },
      {
        "size": "S",
        "stock": 71
      },
      {
        "size": "M",
        "stock": 48
      },
      {
        "size": "L",
        "stock": 13
      },
      {
        "size": "Xl",
        "stock": 40
      },
      {
        "size": "XXl",
        "stock": 81
      },
      {
        "size": "3XL",
        "stock": 79
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#F6EDDD",
    "price": 2122,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.87",
    "category": "sweter",
    "createdAt": "2011-09-06T19:58:26.289Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ullamco mollit pariatur amet id cupidatat ut ullamco. Cillum anim aliqua proident eiusmod incididunt tempor adipisicing.",
    "discountPercentage": 1
  },
  {
    "id": "639aee99d5d7a7a3940e5259",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 38
      },
      {
        "size": "S",
        "stock": 73
      },
      {
        "size": "M",
        "stock": 79
      },
      {
        "size": "L",
        "stock": 54
      },
      {
        "size": "Xl",
        "stock": 13
      },
      {
        "size": "XXl",
        "stock": 84
      },
      {
        "size": "3XL",
        "stock": 91
      }
    ],
    "brand": "Moncler",
    "color": "#447D60",
    "price": 4013,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.29",
    "category": "jacket ",
    "createdAt": "2014-05-14T04:50:34.838Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Veniam adipisicing laboris eu aliqua cupidatat aliqua ad Lorem esse nostrud veniam sit sunt. Enim nulla ullamco non veniam culpa do exercitation Lorem duis aute.",
    "discountPercentage": 42
  },
  {
    "id": "639aee99dc6c24164ded26df",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 93
      },
      {
        "size": "S",
        "stock": 100
      },
      {
        "size": "M",
        "stock": 88
      },
      {
        "size": "L",
        "stock": 41
      },
      {
        "size": "Xl",
        "stock": 45
      },
      {
        "size": "XXl",
        "stock": 45
      },
      {
        "size": "3XL",
        "stock": 76
      }
    ],
    "brand": "Balenciaga",
    "color": "#8B561A",
    "price": 4619,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.25",
    "category": "pants",
    "createdAt": "2010-04-11T19:48:12.523Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Enim ullamco id amet deserunt in aliquip aliquip reprehenderit labore culpa sunt consectetur. Ex cupidatat nisi proident dolor sunt cupidatat consequat est minim commodo sit.",
    "discountPercentage": 8
  },
  {
    "id": "639aee99d7e336913be385a8",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 53
      },
      {
        "size": "S",
        "stock": 1
      },
      {
        "size": "M",
        "stock": 70
      },
      {
        "size": "L",
        "stock": 82
      },
      {
        "size": "Xl",
        "stock": 49
      },
      {
        "size": "XXl",
        "stock": 45
      },
      {
        "size": "3XL",
        "stock": 6
      }
    ],
    "brand": "Dior",
    "color": "#8B561A",
    "price": 3689,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.18",
    "category": "dress ",
    "createdAt": "2012-08-12T21:47:58.530Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Lorem enim pariatur aliqua dolore sunt nulla. Id irure duis elit esse occaecat sint deserunt esse.",
    "discountPercentage": 48
  },
  {
    "id": "639aee999121d0dc5bb11475",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 84
      },
      {
        "size": "S",
        "stock": 99
      },
      {
        "size": "M",
        "stock": 45
      },
      {
        "size": "L",
        "stock": 63
      },
      {
        "size": "Xl",
        "stock": 66
      },
      {
        "size": "XXl",
        "stock": 72
      },
      {
        "size": "3XL",
        "stock": 35
      }
    ],
    "brand": "Gucci",
    "color": "#72736E",
    "price": 3135,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.26",
    "category": "pullover",
    "createdAt": "2012-04-28T12:39:02.675Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Deserunt dolore nostrud anim eiusmod pariatur et adipisicing sint proident exercitation ipsum et. Do aliqua non enim id Lorem tempor.",
    "discountPercentage": 14
  },
  {
    "id": "639aee9984d4001a535dc9d1",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 54
      },
      {
        "size": "S",
        "stock": 68
      },
      {
        "size": "M",
        "stock": 45
      },
      {
        "size": "L",
        "stock": 21
      },
      {
        "size": "Xl",
        "stock": 15
      },
      {
        "size": "XXl",
        "stock": 36
      },
      {
        "size": "3XL",
        "stock": 85
      }
    ],
    "brand": "Prada.",
    "color": "#F0CAC0",
    "price": 397,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.16",
    "category": "dress ",
    "createdAt": "2011-11-15T16:15:25.981Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Elit ullamco dolor laboris sint officia dolor consectetur voluptate aute aliqua commodo. Ad duis exercitation Lorem excepteur laboris veniam laborum officia enim aliqua.",
    "discountPercentage": 30
  },
  {
    "id": "639aee9908045d2433bd310c",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 66
      },
      {
        "size": "S",
        "stock": 84
      },
      {
        "size": "M",
        "stock": 61
      },
      {
        "size": "L",
        "stock": 54
      },
      {
        "size": "Xl",
        "stock": 56
      },
      {
        "size": "XXl",
        "stock": 21
      },
      {
        "size": "3XL",
        "stock": 61
      }
    ],
    "brand": "Gucci",
    "color": "#6B2D38",
    "price": 1996,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.13",
    "category": "jacket ",
    "createdAt": "2010-02-07T02:46:28.101Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ipsum aliquip reprehenderit aliqua officia consequat adipisicing. Ipsum ad est nostrud minim id ad anim consequat adipisicing ipsum cupidatat occaecat laborum.",
    "discountPercentage": 6
  },
  {
    "id": "639aee99a4bb48c8e6dd7dde",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 11
      },
      {
        "size": "S",
        "stock": 45
      },
      {
        "size": "M",
        "stock": 20
      },
      {
        "size": "L",
        "stock": 39
      },
      {
        "size": "Xl",
        "stock": 73
      },
      {
        "size": "XXl",
        "stock": 98
      },
      {
        "size": "3XL",
        "stock": 68
      }
    ],
    "brand": "Prada.",
    "color": "#6B2D38",
    "price": 3438,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.73",
    "category": "jacket ",
    "createdAt": "2013-03-19T02:01:02.564Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Et mollit exercitation nostrud cillum eu ea reprehenderit non. Excepteur magna occaecat minim enim.",
    "discountPercentage": 19
  },
  {
    "id": "639aee9970bffb3f1e2a66dc",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 76
      },
      {
        "size": "S",
        "stock": 5
      },
      {
        "size": "M",
        "stock": 34
      },
      {
        "size": "L",
        "stock": 61
      },
      {
        "size": "Xl",
        "stock": 20
      },
      {
        "size": "XXl",
        "stock": 97
      },
      {
        "size": "3XL",
        "stock": 9
      }
    ],
    "brand": "Balenciaga",
    "color": "#4264A8",
    "price": 2698,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.79",
    "category": "pullover",
    "createdAt": "2013-08-16T15:53:56.253Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Reprehenderit officia ullamco magna voluptate aute. Labore reprehenderit fugiat sint nisi aliqua nisi ex Lorem nostrud.",
    "discountPercentage": 34
  },
  {
    "id": "639aee997a1adc18f449ac03",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 96
      },
      {
        "size": "S",
        "stock": 99
      },
      {
        "size": "M",
        "stock": 28
      },
      {
        "size": "L",
        "stock": 15
      },
      {
        "size": "Xl",
        "stock": 100
      },
      {
        "size": "XXl",
        "stock": 62
      },
      {
        "size": "3XL",
        "stock": 71
      }
    ],
    "brand": "Prada.",
    "color": "#F0CAC0",
    "price": 1440,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.35",
    "category": "pants",
    "createdAt": "2012-08-03T07:22:20.605Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Cupidatat proident id exercitation dolor. Velit officia irure Lorem duis consequat consectetur adipisicing minim nostrud.",
    "discountPercentage": 20
  },
  {
    "id": "639aee996e2060256789a51c",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 68
      },
      {
        "size": "S",
        "stock": 63
      },
      {
        "size": "M",
        "stock": 90
      },
      {
        "size": "L",
        "stock": 70
      },
      {
        "size": "Xl",
        "stock": 65
      },
      {
        "size": "XXl",
        "stock": 43
      },
      {
        "size": "3XL",
        "stock": 33
      }
    ],
    "brand": "Moncler",
    "color": "#DFDCD4",
    "price": 233,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.45",
    "category": "boots",
    "createdAt": "2013-11-14T22:57:39.332Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Eiusmod nulla pariatur labore aute nulla duis adipisicing consequat dolore. Duis proident cupidatat fugiat et reprehenderit commodo dolor magna eiusmod ex ea culpa.",
    "discountPercentage": 22
  },
  {
    "id": "639aee996889b88ad80543cf",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 11
      },
      {
        "size": "S",
        "stock": 47
      },
      {
        "size": "M",
        "stock": 77
      },
      {
        "size": "L",
        "stock": 1
      },
      {
        "size": "Xl",
        "stock": 52
      },
      {
        "size": "XXl",
        "stock": 28
      },
      {
        "size": "3XL",
        "stock": 67
      }
    ],
    "brand": "Gucci",
    "color": "#DFDCD4",
    "price": 435,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.13",
    "category": "jacket ",
    "createdAt": "2014-03-16T20:54:53.180Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Adipisicing deserunt id ad culpa elit consectetur nostrud irure pariatur sint ad. Voluptate aute magna aliqua reprehenderit nostrud aliquip.",
    "discountPercentage": 44
  },
  {
    "id": "639aee9985edacbde92abe9d",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 93
      },
      {
        "size": "S",
        "stock": 36
      },
      {
        "size": "M",
        "stock": 5
      },
      {
        "size": "L",
        "stock": 23
      },
      {
        "size": "Xl",
        "stock": 58
      },
      {
        "size": "XXl",
        "stock": 16
      },
      {
        "size": "3XL",
        "stock": 40
      }
    ],
    "brand": "Prada.",
    "color": "#447D60",
    "price": 2692,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.69",
    "category": "dress ",
    "createdAt": "2013-03-30T18:55:17.395Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Commodo enim sunt aute aute pariatur deserunt ea exercitation ullamco. Nulla occaecat et nulla elit veniam qui ullamco.",
    "discountPercentage": 35
  },
  {
    "id": "639aee99f169417136ad4a2f",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 24
      },
      {
        "size": "S",
        "stock": 29
      },
      {
        "size": "M",
        "stock": 50
      },
      {
        "size": "L",
        "stock": 68
      },
      {
        "size": "Xl",
        "stock": 28
      },
      {
        "size": "XXl",
        "stock": 75
      },
      {
        "size": "3XL",
        "stock": 78
      }
    ],
    "brand": "Fendi",
    "color": "#DFDCD4",
    "price": 137,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.95",
    "category": "jacket ",
    "createdAt": "2011-09-28T19:07:50.878Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Eiusmod incididunt anim dolore excepteur cupidatat dolore officia. Proident fugiat pariatur minim nostrud incididunt culpa ut tempor mollit labore pariatur velit laborum veniam.",
    "discountPercentage": 47
  },
  {
    "id": "639aee9945692c13dda7f300",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 22
      },
      {
        "size": "S",
        "stock": 42
      },
      {
        "size": "M",
        "stock": 72
      },
      {
        "size": "L",
        "stock": 73
      },
      {
        "size": "Xl",
        "stock": 96
      },
      {
        "size": "XXl",
        "stock": 42
      },
      {
        "size": "3XL",
        "stock": 37
      }
    ],
    "brand": "Gucci",
    "color": "#B2B2AD",
    "price": 4043,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.95",
    "category": "shoes",
    "createdAt": "2013-06-07T12:04:45.092Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Irure ut magna minim id proident cupidatat elit ea culpa proident pariatur veniam consequat duis. Deserunt ad esse voluptate cillum dolore ex dolore nulla non ipsum tempor qui proident duis.",
    "discountPercentage": 44
  },
  {
    "id": "639aee996b80aa680fb442d7",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 85
      },
      {
        "size": "S",
        "stock": 44
      },
      {
        "size": "M",
        "stock": 91
      },
      {
        "size": "L",
        "stock": 29
      },
      {
        "size": "Xl",
        "stock": 14
      },
      {
        "size": "XXl",
        "stock": 59
      },
      {
        "size": "3XL",
        "stock": 91
      }
    ],
    "brand": "Balenciaga",
    "color": "#447D60",
    "price": 2055,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.39",
    "category": "dress ",
    "createdAt": "2012-02-08T13:23:49.596Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Cillum in nostrud dolor excepteur duis excepteur minim. In culpa aliquip aliquip nulla est.",
    "discountPercentage": 29
  },
  {
    "id": "639aee99924bd00e1eb9c9ff",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 25
      },
      {
        "size": "S",
        "stock": 92
      },
      {
        "size": "M",
        "stock": 28
      },
      {
        "size": "L",
        "stock": 11
      },
      {
        "size": "Xl",
        "stock": 69
      },
      {
        "size": "XXl",
        "stock": 2
      },
      {
        "size": "3XL",
        "stock": 78
      }
    ],
    "brand": "Moncler",
    "color": "#B2B2AD",
    "price": 3742,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.11",
    "category": "dress ",
    "createdAt": "2013-09-07T21:43:58.523Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Dolore quis ut quis officia duis aliqua commodo non laboris. Velit aute consectetur pariatur veniam adipisicing culpa enim dolore sunt dolore consectetur tempor.",
    "discountPercentage": 10
  },
  {
    "id": "639aee9993a3e31aff177188",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 48
      },
      {
        "size": "S",
        "stock": 73
      },
      {
        "size": "M",
        "stock": 99
      },
      {
        "size": "L",
        "stock": 45
      },
      {
        "size": "Xl",
        "stock": 65
      },
      {
        "size": "XXl",
        "stock": 52
      },
      {
        "size": "3XL",
        "stock": 71
      }
    ],
    "brand": "Dior",
    "color": "#DFDCD4",
    "price": 3785,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.73",
    "category": "sweter",
    "createdAt": "2012-04-15T14:19:52.127Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Eiusmod pariatur dolore ex reprehenderit id in nulla qui ipsum laborum proident. Cupidatat tempor nulla ex non cupidatat ex labore.",
    "discountPercentage": 44
  },
  {
    "id": "639aee99be33aff624ad4ee9",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 54
      },
      {
        "size": "S",
        "stock": 91
      },
      {
        "size": "M",
        "stock": 24
      },
      {
        "size": "L",
        "stock": 24
      },
      {
        "size": "Xl",
        "stock": 64
      },
      {
        "size": "XXl",
        "stock": 88
      },
      {
        "size": "3XL",
        "stock": 73
      }
    ],
    "brand": "Dior",
    "color": "#447D60",
    "price": 4617,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.28",
    "category": "boots",
    "createdAt": "2014-12-31T04:52:06.401Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Dolor fugiat anim cillum dolor laboris officia. Reprehenderit excepteur pariatur Lorem minim proident nulla deserunt sunt excepteur dolor sunt nisi consectetur.",
    "discountPercentage": 16
  },
  {
    "id": "639aee99066f48fc9e4f94f9",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 69
      },
      {
        "size": "S",
        "stock": 12
      },
      {
        "size": "M",
        "stock": 22
      },
      {
        "size": "L",
        "stock": 27
      },
      {
        "size": "Xl",
        "stock": 70
      },
      {
        "size": "XXl",
        "stock": 71
      },
      {
        "size": "3XL",
        "stock": 86
      }
    ],
    "brand": "Dior",
    "color": "#4264A8",
    "price": 1685,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.33",
    "category": "pants",
    "createdAt": "2011-10-20T23:26:04.229Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Ipsum ex occaecat exercitation proident anim mollit commodo laboris et sit. Nisi tempor excepteur esse pariatur consequat aliqua qui cupidatat aute velit sint.",
    "discountPercentage": 19
  },
  {
    "id": "639aee99d3f4d47ae5c82d5d",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 39
      },
      {
        "size": "S",
        "stock": 19
      },
      {
        "size": "M",
        "stock": 5
      },
      {
        "size": "L",
        "stock": 47
      },
      {
        "size": "Xl",
        "stock": 80
      },
      {
        "size": "XXl",
        "stock": 75
      },
      {
        "size": "3XL",
        "stock": 6
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#F6EDDD",
    "price": 4510,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.84",
    "category": "dress ",
    "createdAt": "2013-04-21T07:32:12.635Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Nulla sit qui elit nostrud anim minim cupidatat ullamco fugiat ex cillum. Minim voluptate anim sit minim do cupidatat est nulla ipsum irure eu elit.",
    "discountPercentage": 27
  },
  {
    "id": "639aee9904ba238f8628fbb9",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 60
      },
      {
        "size": "S",
        "stock": 15
      },
      {
        "size": "M",
        "stock": 54
      },
      {
        "size": "L",
        "stock": 28
      },
      {
        "size": "Xl",
        "stock": 3
      },
      {
        "size": "XXl",
        "stock": 94
      },
      {
        "size": "3XL",
        "stock": 75
      }
    ],
    "brand": "Moncler",
    "color": "#DFDCD4",
    "price": 4647,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "1.28",
    "category": "pants",
    "createdAt": "2011-05-23T04:32:35.177Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Tempor laboris sunt proident Lorem laboris eiusmod nisi laborum id adipisicing. Adipisicing nulla dolor deserunt est est mollit.",
    "discountPercentage": 30
  },
  {
    "id": "639aee99c5f32d8f1af2214d",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 29
      },
      {
        "size": "S",
        "stock": 74
      },
      {
        "size": "M",
        "stock": 86
      },
      {
        "size": "L",
        "stock": 67
      },
      {
        "size": "Xl",
        "stock": 87
      },
      {
        "size": "XXl",
        "stock": 38
      },
      {
        "size": "3XL",
        "stock": 49
      }
    ],
    "brand": "Gucci",
    "color": "#F6EDDD",
    "price": 2577,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.41",
    "category": "boots",
    "createdAt": "2014-12-17T12:01:05.009Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Culpa in aliqua sit ex mollit irure aute Lorem esse. Minim Lorem anim enim dolore nulla enim officia sit Lorem pariatur amet amet.",
    "discountPercentage": 31
  },
  {
    "id": "639aee99c10193ee9a3ecf3d",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 81
      },
      {
        "size": "S",
        "stock": 31
      },
      {
        "size": "M",
        "stock": 75
      },
      {
        "size": "L",
        "stock": 53
      },
      {
        "size": "Xl",
        "stock": 11
      },
      {
        "size": "XXl",
        "stock": 53
      },
      {
        "size": "3XL",
        "stock": 35
      }
    ],
    "brand": "Prada.",
    "color": "#F0CAC0",
    "price": 1992,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.79",
    "category": "pants",
    "createdAt": "2013-07-25T08:39:35.448Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Non velit qui aliquip velit laborum aliquip laborum commodo ex adipisicing occaecat consectetur officia proident. Nostrud mollit consequat consequat enim aliqua culpa proident fugiat in culpa.",
    "discountPercentage": 8
  },
  {
    "id": "639aee995d857134b67cccc8",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 93
      },
      {
        "size": "S",
        "stock": 48
      },
      {
        "size": "M",
        "stock": 38
      },
      {
        "size": "L",
        "stock": 100
      },
      {
        "size": "Xl",
        "stock": 48
      },
      {
        "size": "XXl",
        "stock": 60
      },
      {
        "size": "3XL",
        "stock": 50
      }
    ],
    "brand": "Gucci",
    "color": "#DFDCD4",
    "price": 1806,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.55",
    "category": "pants",
    "createdAt": "2014-07-30T09:46:43.086Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Nostrud culpa dolore incididunt est. Sit veniam ex consectetur enim nulla excepteur.",
    "discountPercentage": 34
  },
  {
    "id": "639aee9913fbc03457ac3f27",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 15
      },
      {
        "size": "S",
        "stock": 19
      },
      {
        "size": "M",
        "stock": 70
      },
      {
        "size": "L",
        "stock": 35
      },
      {
        "size": "Xl",
        "stock": 79
      },
      {
        "size": "XXl",
        "stock": 4
      },
      {
        "size": "3XL",
        "stock": 57
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#8B561A",
    "price": 2051,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.37",
    "category": "sweter",
    "createdAt": "2010-08-11T10:44:18.564Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Sit sunt elit est veniam elit velit officia minim. Exercitation duis culpa reprehenderit ex eiusmod in ad ipsum qui consectetur esse pariatur eiusmod ad.",
    "discountPercentage": 28
  },
  {
    "id": "639aee99812efe776aff80c9",
    "sex": "man",
    "size": [
      {
        "size": "XS",
        "stock": 85
      },
      {
        "size": "S",
        "stock": 26
      },
      {
        "size": "M",
        "stock": 78
      },
      {
        "size": "L",
        "stock": 82
      },
      {
        "size": "Xl",
        "stock": 97
      },
      {
        "size": "XXl",
        "stock": 3
      },
      {
        "size": "3XL",
        "stock": 52
      }
    ],
    "brand": "Balenciaga",
    "color": "#72736E",
    "price": 919,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.68",
    "category": "pants",
    "createdAt": "2013-11-17T17:32:20.379Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Aliquip eiusmod sint voluptate officia aute labore culpa sit adipisicing velit minim aliqua aute. Incididunt voluptate nulla reprehenderit irure labore quis.",
    "discountPercentage": 26
  },
  {
    "id": "639aee99518f526d5340a14b",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 14
      },
      {
        "size": "S",
        "stock": 52
      },
      {
        "size": "M",
        "stock": 95
      },
      {
        "size": "L",
        "stock": 93
      },
      {
        "size": "Xl",
        "stock": 23
      },
      {
        "size": "XXl",
        "stock": 97
      },
      {
        "size": "3XL",
        "stock": 9
      }
    ],
    "brand": "Fendi",
    "color": "#4264A8",
    "price": 2723,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.39",
    "category": "jacket ",
    "createdAt": "2013-07-05T03:10:04.587Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Amet aliquip irure aliquip fugiat occaecat occaecat officia enim fugiat ex. Incididunt labore mollit sit laborum nisi culpa.",
    "discountPercentage": 29
  },
  {
    "id": "639aee99e16d262a6178f990",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 68
      },
      {
        "size": "S",
        "stock": 6
      },
      {
        "size": "M",
        "stock": 64
      },
      {
        "size": "L",
        "stock": 75
      },
      {
        "size": "Xl",
        "stock": 43
      },
      {
        "size": "XXl",
        "stock": 65
      },
      {
        "size": "3XL",
        "stock": 9
      }
    ],
    "brand": "Louis Vuitton",
    "color": "#72736E",
    "price": 3056,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "4.42",
    "category": "jacket ",
    "createdAt": "2011-12-01T04:48:52.779Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Commodo adipisicing esse labore ad elit in commodo dolor sunt consectetur sint nisi. Incididunt ea fugiat laborum minim amet adipisicing consectetur sint culpa ex amet proident nulla.",
    "discountPercentage": 18
  },
  {
    "id": "639aee9904898c35245420e8",
    "sex": "woman",
    "size": [
      {
        "size": "XS",
        "stock": 2
      },
      {
        "size": "S",
        "stock": 72
      },
      {
        "size": "M",
        "stock": 42
      },
      {
        "size": "L",
        "stock": 20
      },
      {
        "size": "Xl",
        "stock": 8
      },
      {
        "size": "XXl",
        "stock": 22
      },
      {
        "size": "3XL",
        "stock": 50
      }
    ],
    "brand": "Balenciaga",
    "color": "#B2B2AD",
    "price": 2564,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "2.94",
    "category": "pants",
    "createdAt": "2014-02-25T15:33:21.662Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Non ad culpa voluptate aliqua duis. Laborum consectetur do pariatur cupidatat non quis ut sunt duis duis velit do.",
    "discountPercentage": 25
  },
  {
    "id": "639aee993b957b69e9a6396e",
    "sex": "kids",
    "size": [
      {
        "size": "XS",
        "stock": 16
      },
      {
        "size": "S",
        "stock": 55
      },
      {
        "size": "M",
        "stock": 41
      },
      {
        "size": "L",
        "stock": 94
      },
      {
        "size": "Xl",
        "stock": 70
      },
      {
        "size": "XXl",
        "stock": 49
      },
      {
        "size": "3XL",
        "stock": 76
      }
    ],
    "brand": "Fendi",
    "color": "#DFDCD4",
    "price": 314,
    "title": "iPhone 9",
    "images": [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ],
    "rating": "3.02",
    "category": "shoes",
    "createdAt": "2012-02-17T05:46:36.985Z",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "description": "Sint sint ullamco nostrud fugiat veniam anim duis est. Cupidatat eiusmod nostrud esse ipsum deserunt dolor qui.",
    "discountPercentage": 27
  }
]

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  }
})

// export const {  } = productsSlice.actions
export default productsSlice.reducer