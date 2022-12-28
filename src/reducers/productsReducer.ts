import { createSlice } from '@reduxjs/toolkit'
import { ProductsState } from '../app/types'

const initialState: ProductsState = [
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
    "title": "dress kids vintage",
    "images": [
      "https://m.media-amazon.com/images/I/613BJs0kPbL._AC_SY879._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/816uASzEQZL._AC_SX679._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/51rOFWrUQ8L._AC_SY879._SX._UX._SY._UY_.jpg"
    ],
    "rating": "4.93",
    "category": "dress",
    "createdAt": "2012-02-12T09:14:14.437Z",
    "thumbnail": "https://m.media-amazon.com/images/I/61BR3kxZZOL._AC_UY879_.jpg",
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
    "title": "Uniform Cotton Crewneck ",
    "images": [
      "https://m.media-amazon.com/images/I/61CptzFgDVL._AC_UX679_.jpg",
      "https://m.media-amazon.com/images/I/61fOMLALkyL._AC_SX679._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71H7FKKEAvL._AC_SX679._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/91zJvX0ld0L._AC_SX679._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/A1YiEnZ53SL._AC_SX679._SX._UX._SY._UY_.jpg"
    ],
    "rating": "2.33",
    "category": "sweter",
    "createdAt": "2011-12-10T00:09:06.351Z",
    "thumbnail": "https://m.media-amazon.com/images/I/A1YiEnZ53SL._AC_SX679._SX._UX._SY._UY_.jpg",
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
      "https://m.media-amazon.com/images/I/91Offj8wc1L._AC_SY550._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/913mwatnj8L._AC_SY550._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/91oj-Xa21kL._AC_SY550._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/91HvKUL691L._AC_SY550._SX._UX._SY._UY_.jpg"
    ],
    "rating": "4.55",
    "category": "sweter",
    "createdAt": "2012-02-10T23:20:04.973Z",
    "thumbnail": "https://m.media-amazon.com/images/I/81IeHROT22L._AC_UY550_.jpg",
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
    "title": "Polar Fleece ",
    "images": [
      "https://m.media-amazon.com/images/I/81Q+vi1OwZL._AC_SX679._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/51yPO8kl+gL._SS64_.jpg",
      "https://m.media-amazon.com/images/I/81C9fV8uUXL._AC_SX679._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/91hACo0UphL._AC_SX679._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71ulCbhWZzL._AC_SX679._SX._UX._SY._UY_.jpg"
    ],
    "rating": "1.88",
    "category": "pullover",
    "createdAt": "2010-01-16T21:09:32.233Z",
    "thumbnail": "https://m.media-amazon.com/images/I/81asAslWONL._AC_UX679_.jpg",
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
    "title": "Timberland Men's",
    "images": [
      "https://m.media-amazon.com/images/I/81Xres6VAZL._AC_SY535._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71nSfBji17L._AC_SX535._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71BDMuLabiL._AC_SY675._SX._UX._SY._UY_.jpg"
    ],
    "rating": "1.94",
    "category": "boots",
    "createdAt": "2013-01-12T14:59:02.273Z",
    "thumbnail": "https://m.media-amazon.com/images/I/81lMgmOkSXL._AC_UY535_.jpg",
    "description": "Id enim proident reprehenderit ut nostrud. Dolore occaecat eu proident occaecat elit minim ipsum esse laborum ex nulla occaecat consectetur proident.",
    "discountPercentage": 23
  },
  {
    "id": "639aee992a710855c9148af9",
    "sex": "woman",
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
    "title": "Columbia Women's",
    "images": [
      "https://m.media-amazon.com/images/I/810KJopehpL._AC_SY675._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71SfXN+R2iL._AC_SX535._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71eCDYJEsHL._AC_SY695._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71b0B+WM-sL._AC_SX535._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71b0B+WM-sL._AC_SX535._SX._UX._SY._UY_.jpg"
    ],
    "rating": "3.47",
    "category": "boots",
    "createdAt": "2010-12-11T19:40:42.083Z",
    "thumbnail": "https://m.media-amazon.com/images/I/819p+XwD8tL._AC_UY575_.jpg",
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
    "title": "Polar Fleece Full-Zip",
    "images": [
      "https://m.media-amazon.com/images/I/71BEdg+IiEL._AC_UX679_.jpg",
      "https://m.media-amazon.com/images/I/61VVU0hv6DS._AC_UX679_.jpg",
      "https://m.media-amazon.com/images/I/71ehVmV3kNS._AC_UX679_.jpg",
      "https://m.media-amazon.com/images/I/81RPwiHI78L._AC_SX679._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/81MZR3NicML._AC_SX679._SX._UX._SY._UY_.jpg"
    ],
    "rating": "2.25",
    "category": "jacket",
    "createdAt": "2013-08-23T06:55:06.994Z",
    "thumbnail": "https://m.media-amazon.com/images/I/71eeh28TAVL._AC_UX679_.jpg",
    "description": "Eu fugiat laboris proident mollit fugiat mollit velit. Aliquip sint deserunt eiusmod aute dolor in est laborum.",
    "discountPercentage": 38
  },
  {
    "id": "639aee992b7d93edfaf1c094",
    "sex": "woman",
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
    "title": "Lantern Sleeve Ruffle A-Line",
    "images": [
      "https://m.media-amazon.com/images/I/51Rpae8T07L._AC_UY500_.jpg",
      "https://m.media-amazon.com/images/I/61HVhrbpbZL._AC_UX466_.jpg",
      "https://m.media-amazon.com/images/I/51tciIfsMzL._AC_UX425_.jpg",
      "https://m.media-amazon.com/images/I/51C5ippoqfL._AC_UY500_.jpg",
      "https://m.media-amazon.com/images/I/61Nw7DrY92L._AC_UX385_.jpg"
    ],
    "rating": "3.78",
    "category": "dress",
    "createdAt": "2011-04-04T04:49:02.240Z",
    "thumbnail": "https://m.media-amazon.com/images/I/5102orz-ugL._AC_UY500_.jpg",
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
    "title": "Hooded Puffer Jacket",
    "images": [
      "https://m.media-amazon.com/images/I/71GRphlbkaL._AC_UY550_.jpg",
      "https://m.media-amazon.com/images/I/81qcKNEOnYL._AC_UY550_.jpg",
      "https://m.media-amazon.com/images/I/71T8nhrI4fL._AC_UY550_.jpg",
      "https://m.media-amazon.com/images/I/712YSV0YovL._AC_UX466_.jpg",
      "https://m.media-amazon.com/images/I/719k1ecLQkL._AC_UX522_.jpg"
    ],
    "rating": "4.73",
    "category": "jacket",
    "createdAt": "2012-07-05T10:51:55.195Z",
    "thumbnail": "https://m.media-amazon.com/images/I/81QXq+pifcL._AC_UY550_.jpg",
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
    "title": "Under Armour Men's",
    "images": [
      "https://m.media-amazon.com/images/I/41DrEs1-gYL._AC_UY535_.jpg",
      "https://m.media-amazon.com/images/I/51IvIT8EnIL._AC_UY535_.jpg",
      "https://m.media-amazon.com/images/I/41al7+w4A5L._AC_UY535_.jpg",
      "https://m.media-amazon.com/images/I/61UN3UQIarL._AC_UY535_.jpg",
      "https://m.media-amazon.com/images/I/71KJtYVGmxL._AC_SX535._SX._UX._SY._UY_.jpg"
    ],
    "rating": "3.25",
    "category": "shoes",
    "createdAt": "2010-06-24T23:32:36.277Z",
    "thumbnail": "https://m.media-amazon.com/images/I/41l2imvuWJL._AC_UY535_.jpg",
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
    "title": "Charged Assert 9 Running",
    "images": [
      "https://m.media-amazon.com/images/I/61cNG8Dn5cL._AC_SY500._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/61mPdSOOp5L._AC_SY500._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71q8hZON9rL._AC_SX395._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71KN5eypHxL._AC_SX395._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/713c24QNcSL._AC_SX395._SX._UX._SY._UY_.jpg"
    ],
    "rating": "2.03",
    "category": "shoes",
    "createdAt": "2012-03-27T17:06:18.463Z",
    "thumbnail": "https://m.media-amazon.com/images/I/71KJtYVGmxL._AC_SX395._SX._UX._SY._UY_.jpg",
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
      "https://m.media-amazon.com/images/I/71Tl4yJx2GL._AC_UX342_.jpg",
      "https://m.media-amazon.com/images/I/8101C9IDJcL._AC_UX342_.jpg",
      "https://m.media-amazon.com/images/I/719d2wK2k7L._AC_UX342_.jpg",
      "https://m.media-amazon.com/images/I/81KfjI3NpuL._AC_UX342_.jpg",
      "https://m.media-amazon.com/images/I/91X0xIFhP-L._AC_UX342_.jpg"
    ],
    "rating": "4.01",
    "category": "pullover",
    "createdAt": "2011-12-22T15:03:14.677Z",
    "thumbnail": "https://m.media-amazon.com/images/I/81ctEHlJrDL._AC_UX342_.jpg",
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
    "title": "BB DAKOTA by Steve Madden",
    "images": [
      "https://m.media-amazon.com/images/I/71h8EYrXmAL._AC_SX342._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/61sffqlXbyL._AC_SX342._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/A1Ba4vyAjyL._AC_SY445._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71pv41sGqcL._AC_SX342._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71PXzKzdl3L._AC_SX342._SX._UX._SY._UY_.jpg"
    ],
    "rating": "3.15",
    "category": "dress",
    "createdAt": "2013-08-25T06:31:47.608Z",
    "thumbnail": "https://m.media-amazon.com/images/I/A1j-Rv0iTcL._AC_UY445_.jpg",
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
    "title": "V-Neck Neckline",
    "images": [
      "https://m.media-amazon.com/images/I/71tpC2Dwi-L._AC_UY445_.jpg",
      "https://m.media-amazon.com/images/I/81JZTF39NhL._AC_UY445_.jpg",
      "https://m.media-amazon.com/images/I/71jeFHa57GL._AC_SY445._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/81w89Z6f1pL._AC_SY445._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71wuarf9GiL._AC_SY445._SX._UX._SY._UY_.jpg"
    ],
    "rating": "1.13",
    "category": "dress",
    "createdAt": "2010-10-13T03:27:54.120Z",
    "thumbnail": "https://m.media-amazon.com/images/I/819rtQ9K6mL._AC_UY445_.jpg",
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
    "title": "Blazer Suit Jacket",
    "images": [
      "https://m.media-amazon.com/images/I/71Fd49MGHbL._AC_UX342_.jpg",
      "https://m.media-amazon.com/images/I/71QhQVtqd9L._AC_UX342_.jpg",
      "https://m.media-amazon.com/images/I/71aboWySK3L._AC_SX385._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/91fiWgUSSLL._AC_SX342._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/81rLE54bcIL._AC_SX342._SX._UX._SY._UY_.jpg"
    ],
    "rating": "4.12",
    "category": "jacket",
    "createdAt": "2012-02-10T03:15:12.607Z",
    "thumbnail": "https://m.media-amazon.com/images/I/61E+3oFM9eL._AC_UX342_.jpg",
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
      "https://m.media-amazon.com/images/I/61Hjz2Z3psL._AC_UY535_.jpg",
      "https://m.media-amazon.com/images/I/61YcwsU3phL._AC_UY500_.jpg",
      "https://m.media-amazon.com/images/I/71aDw17JkyL._AC_UX395_.jpg",
      "https://m.media-amazon.com/images/I/71pH3XRY2vL._AC_UX395_.jpg",
      "https://m.media-amazon.com/images/I/81E2FDs93NL._AC_UX395_.jpg"
    ],
    "rating": "1.18",
    "category": "shoes",
    "createdAt": "2010-11-26T12:01:04.530Z",
    "thumbnail": "https://m.media-amazon.com/images/I/71xX+mHmkUL._AC_UX395_.jpg",
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
    "title": "Waffle Henley",
    "images": [
      "https://m.media-amazon.com/images/I/61lPiRliURL._AC_SY550._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/61DA4rJzMiL._AC_SY550._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71xp5G76feL._AC_SY550._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/91wyFHmY0KL._AC_SY550._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/81xM714DuxL._AC_SY550._SX._UX._SY._UY_.jpg"
    ],
    "rating": "4.87",
    "category": "pullover",
    "createdAt": "2014-04-25T05:06:34.782Z",
    "thumbnail": "https://m.media-amazon.com/images/I/A1SGgx9seTL._AC_UX466_.jpg",
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
    "title": "Fall Solid Turtleneck High Neck",
    "images": [
      "https://m.media-amazon.com/images/I/71lzkvGC3wL._AC_UY445_.jpg",
      "https://m.media-amazon.com/images/I/71T3fSWYEIL._AC_UX342_.jpg",
      "https://m.media-amazon.com/images/I/71km-M2Y+pL._AC_UY445_.jpg",
      "https://m.media-amazon.com/images/I/8103YF+Fm-L._AC_SY445._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71nItI+XGdL._AC_SY445._SX._UX._SY._UY_.jpg"
    ],
    "rating": "3.86",
    "category": "sweter",
    "createdAt": "2014-07-11T08:09:35.525Z",
    "thumbnail": "https://m.media-amazon.com/images/I/71RM6nFsbNS._AC_UY445_.jpg",
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
    "title": "arhartt Boys' Zip",
    "images": [
      "https://m.media-amazon.com/images/I/81EL3NQSt3L._AC_UY445_.jpg",
      "https://m.media-amazon.com/images/I/919U2DcgWOL._AC_UY445_.jpg",
      "https://m.media-amazon.com/images/I/91Z2Mtlj5WL._AC_UY445_.jpg",
      "https://m.media-amazon.com/images/I/51YF8Mg9swL._AC_SX385._SX._UX._SY._UY_.jpg"
    ],
    "rating": "1.58",
    "category": "jacket",
    "createdAt": "2011-02-04T22:34:53.659Z",
    "thumbnail": "https://m.media-amazon.com/images/I/81JqrfYUyhL._AC_UX385_.jpg",
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
      "https://m.media-amazon.com/images/I/81BCGtQCG+L._AC_UX522_.jpg",
      "https://m.media-amazon.com/images/I/81+jEAcGgZL._AC_UX522_.jpg",
      "https://m.media-amazon.com/images/I/71YqFrA+tgL._AC_SY550._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/71FwcH0ItRL._AC_SY550._SX._UX._SY._UY_.jpg",
      "https://m.media-amazon.com/images/I/81PxE14hhmL._AC_SX522._SX._UX._SY._UY_.jpg"
    ],
    "rating": "2.01",
    "category": "pants",
    "createdAt": "2010-10-30T20:36:10.033Z",
    "thumbnail": "https://m.media-amazon.com/images/I/816fkJeSTKL._AC_UX522_.jpg",
    "description": "Voluptate ad dolor consequat laboris culpa duis excepteur id veniam minim. Cillum voluptate proident do fugiat culpa amet reprehenderit reprehenderit officia nulla occaecat dolor.",
    "discountPercentage": 15
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
    "title": "Girls' Denim Jacket",
    "images": [
    "https://m.media-amazon.com/images/I/91Ixnp4P2vL._AC_UL1500_.jpg",
    "https://m.media-amazon.com/images/I/911J2R1rzbL._AC_UL1500_.jpg",
    "https://m.media-amazon.com/images/I/91TDDqYva4L._AC_UL1500_.jpg"
    ],
    "rating": "3.02",
    "category": "shoes",
    "createdAt": "2012-02-17T05:46:36.985Z",
    "thumbnail": "https://m.media-amazon.com/images/I/91Ixnp4P2vL._AC_UL1500_.jpg",
    "description": "Sint sint ullamco nostrud fugiat veniam anim duis est. Cupidatat eiusmod nostrud esse ipsum deserunt dolor qui.",
    "discountPercentage": 27
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
    "title": "Women's Flex Motion",
    "images": [
      "https://m.media-amazon.com/images/I/51pVESIqthL._AC_UL1405_.jpg",
      "https://m.media-amazon.com/images/I/519IkbbyFsL._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/51i6AJRLAdL._AC_UL1500_.jpg",
      "https://m.media-amazon.com/images/I/A1F5w44m8KL._AC_UL1500_.jpg"
    ],
    "rating": "2.94",
    "category": "pants",
    "createdAt": "2014-02-25T15:33:21.662Z",
    "thumbnail": "https://m.media-amazon.com/images/I/51pVESIqthL._AC_UL1405_.jpg",
    "description": "Non ad culpa voluptate aliqua duis. Laborum consectetur do pariatur cupidatat non quis ut sunt duis duis velit do.",
    "discountPercentage": 25
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
    "title": "Boys' Powder Jacket",
    "images": [
    "https://m.media-amazon.com/images/I/61ZLCEFUbAS._AC_UL1500_.jpg",
    "https://m.media-amazon.com/images/I/81mYc-OR7yS._AC_UL1500_.jpg",
    "https://m.media-amazon.com/images/I/61WAcVJRDXS._AC_UL1500_.jpg",
    "https://m.media-amazon.com/images/I/61knZBxOAgS._AC_UL1500_.jpg",
    ],
    "rating": "4.42",
    "category": "jacket ",
    "createdAt": "2011-12-01T04:48:52.779Z",
    "thumbnail": "https://m.media-amazon.com/images/I/61ZLCEFUbAS._AC_UL1500_.jpg",
    "description": "Commodo adipisicing esse labore ad elit in commodo dolor sunt consectetur sint nisi. Incididunt ea fugiat laborum minim amet adipisicing consectetur sint culpa ex amet proident nulla.",
    "discountPercentage": 18
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
      "title": "Boys' Zip Front Flannel",
      "images": [
        "https://m.media-amazon.com/images/I/81JqrfYUyhL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/81EL3NQSt3L._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/919U2DcgWOL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/91Z2Mtlj5WL._AC_UL1500_.jpg",
      ],
      "rating": "2.39",
      "category": "jacket ",
      "createdAt": "2013-07-05T03:10:04.587Z",
      "thumbnail": "https://m.media-amazon.com/images/I/81JqrfYUyhL._AC_UL1500_.jpg",
      "description": "Amet aliquip irure aliquip fugiat occaecat occaecat officia enim fugiat ex. Incididunt labore mollit sit laborum nisi culpa.",
      "discountPercentage": 29
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
      "title": "Men's Wrinkle-Resistant ",
      "images": [
        "https://m.media-amazon.com/images/I/71TOtMq54ML._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71ryIbNmh6L._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/91I1VBAyiRL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/912IZqgQMnL._AC_UL1500_.jpg",
      ],
      "rating": "3.68",
      "category": "pants",
      "createdAt": "2013-11-17T17:32:20.379Z",
      "thumbnail": "https://m.media-amazon.com/images/I/71TOtMq54ML._AC_UL1500_.jpg",
      "description": "Aliquip eiusmod sint voluptate officia aute labore culpa sit adipisicing velit minim aliqua aute. Incididunt voluptate nulla reprehenderit irure labore quis.",
      "discountPercentage": 26
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
      "title": "EcoSmartCrewneck Sweatshirt",
      "images": [
        "https://m.media-amazon.com/images/I/71jskun+7PL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71pQvpm06QL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71LrqkD6nYL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71jskun+7PL._AC_UL1500_.jpg",
      ],
      "rating": "4.37",
      "category": "sweter",
      "createdAt": "2010-08-11T10:44:18.564Z",
      "thumbnail": "https://m.media-amazon.com/images/I/71jskun+7PL._AC_UL1500_.jpg",
      "description": "Sit sunt elit est veniam elit velit officia minim. Exercitation duis culpa reprehenderit ex eiusmod in ad ipsum qui consectetur esse pariatur eiusmod ad.",
      "discountPercentage": 28
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
      "title": " Boys Sweatpants Jogger",
      "images": [
        "https://m.media-amazon.com/images/I/51SU6eelAvL._AC_UL1001_.jpg",
        "https://m.media-amazon.com/images/I/61CLlvbXR7L._AC_UL1476_.jpg",
        "https://m.media-amazon.com/images/I/51D4BxyoSDL._AC_UL1103_.jpg",
        "https://m.media-amazon.com/images/I/51dabQai9xL._AC_UL1001_.jpg",
      ],
      "rating": "4.55",
      "category": "pants",
      "createdAt": "2014-07-30T09:46:43.086Z",
      "thumbnail": "https://m.media-amazon.com/images/I/51SU6eelAvL._AC_UL1001_.jpg",
      "description": "Nostrud culpa dolore incididunt est. Sit veniam ex consectetur enim nulla excepteur.",
      "discountPercentage": 34
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
      "title": "Men's Stretch Zion Pant",
      "images": [
        "https://m.media-amazon.com/images/I/71WMWVtOy4L._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71nZz7dih2L._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/61is6tqpvBL._AC_UL1001_.jpg",
        "https://m.media-amazon.com/images/I/51skHj56leL._AC_UL1200_.jpg",
      ],
      "rating": "4.79",
      "category": "pants",
      "createdAt": "2013-07-25T08:39:35.448Z",
      "thumbnail": "https://m.media-amazon.com/images/I/71WMWVtOy4L._AC_UL1500_.jpg",
      "description": "Non velit qui aliquip velit laborum aliquip laborum commodo ex adipisicing occaecat consectetur officia proident. Nostrud mollit consequat consequat enim aliqua culpa proident fugiat in culpa.",
      "discountPercentage": 8
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
      "title": "Mens Ransom Rugged Boot",
      "images": [
        "https://m.media-amazon.com/images/I/41isoeh2JfL._AC_UL1000_.jpg",
        "https://m.media-amazon.com/images/I/41zJoV2oiEL._AC_UL1000_.jpg",
        "https://m.media-amazon.com/images/I/419pSZPgoaL._AC_UL1000_.jpg",
        "https://m.media-amazon.com/images/I/41KmDgwTWNL._AC_UL1000_.jpg",
      ],
      "rating": "2.41",
      "category": "boots",
      "createdAt": "2014-12-17T12:01:05.009Z",
      "thumbnail": "https://m.media-amazon.com/images/I/41isoeh2JfL._AC_UL1000_.jpg",
      "description": "Culpa in aliqua sit ex mollit irure aute Lorem esse. Minim Lorem anim enim dolore nulla enim officia sit Lorem pariatur amet amet.",
      "discountPercentage": 31
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
      "title": "Boys' Open Leg Pants",
      "images": [
        "https://m.media-amazon.com/images/I/51U97JtHtXL._AC_UL1001_.jpg",
        "https://m.media-amazon.com/images/I/510xT2XFAoL._AC_UL1001_.jpg",
        "https://m.media-amazon.com/images/I/5143PoP82aL._AC_UL1001_.jpg",
        "https://m.media-amazon.com/images/I/51cVmnK-lxL._AC_UL1001_.jpg",
      ],
      "rating": "1.28",
      "category": "pants",
      "createdAt": "2011-05-23T04:32:35.177Z",
      "thumbnail": "https://m.media-amazon.com/images/I/51U97JtHtXL._AC_UL1001_.jpg",
      "description": "Tempor laboris sunt proident Lorem laboris eiusmod nisi laborum id adipisicing. Adipisicing nulla dolor deserunt est est mollit.",
      "discountPercentage": 30
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
      "title": "Ruffle Long Sleeve Mini Dress",
      "images": [
        "https://m.media-amazon.com/images/I/712QS0AS51L._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/61eQIr71OuL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71h+ZXcVwXL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/711g82gErfL._AC_UL1500_.jpg"
      ],
      "rating": "2.84",
      "category": "dress ",
      "createdAt": "2013-04-21T07:32:12.635Z",
      "thumbnail": "https://m.media-amazon.com/images/I/712QS0AS51L._AC_UL1500_.jpg",
      "description": "Nulla sit qui elit nostrud anim minim cupidatat ullamco fugiat ex cillum. Minim voluptate anim sit minim do cupidatat est nulla ipsum irure eu elit.",
      "discountPercentage": 27
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
      "title": "Men's Performance Stretch",
      "images": [
        "https://m.media-amazon.com/images/I/71YtmP3vbPL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/717tyKX2NLL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/81Z07bSSZrL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71egJh4yd7L._AC_UL1500_.jpg",
      ],
      "rating": "1.33",
      "category": "pants",
      "createdAt": "2011-10-20T23:26:04.229Z",
      "thumbnail": "https://m.media-amazon.com/images/I/71YtmP3vbPL._AC_UL1500_.jpg",
      "description": "Ipsum ex occaecat exercitation proident anim mollit commodo laboris et sit. Nisi tempor excepteur esse pariatur consequat aliqua qui cupidatat aute velit sint.",
      "discountPercentage": 19
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
      "title": "Unisex Combs Canvas",
      "images": [
        "https://m.media-amazon.com/images/I/81UbEhLLocL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71B7NdtWV6L._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/81OirsPHgcL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/81PDDMcSWuL._AC_UL1500_.jpg"
      ],
      "rating": "3.28",
      "category": "boots",
      "createdAt": "2014-12-31T04:52:06.401Z",
      "thumbnail": "https://m.media-amazon.com/images/I/81UbEhLLocL._AC_UL1500_.jpg",
      "description": "Dolor fugiat anim cillum dolor laboris officia. Reprehenderit excepteur pariatur Lorem minim proident nulla deserunt sunt excepteur dolor sunt nisi consectetur.",
      "discountPercentage": 16
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
      "title": "Boys' Pullover Hoodie",
      "images": [
        "https://m.media-amazon.com/images/I/71Z8NoD59IL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71uHe74N7RL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/61cv0Oei79L._AC_UL1386_.jpg",
        "https://m.media-amazon.com/images/I/81yxmiOkPNL._AC_UL1500_.jpg"
      ],
      "rating": "1.73",
      "category": "sweter",
      "createdAt": "2012-04-15T14:19:52.127Z",
      "thumbnail": "https://m.media-amazon.com/images/I/71Z8NoD59IL._AC_UL1500_.jpg",
      "description": "Eiusmod pariatur dolore ex reprehenderit id in nulla qui ipsum laborum proident. Cupidatat tempor nulla ex non cupidatat ex labore.",
      "discountPercentage": 44
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
      "title": "Women's Neck Dress",
      "images": [
        "https://m.media-amazon.com/images/I/51lNPbYRzXL._AC_UL1200_.jpg",
        "https://m.media-amazon.com/images/I/51JICMnMwyL._AC_UL1200_.jpg",
        "https://m.media-amazon.com/images/I/515WrnB2GSL._AC_UL1200_.jpg"
      ],
      "rating": "1.11",
      "category": "dress ",
      "createdAt": "2013-09-07T21:43:58.523Z",
      "thumbnail": "https://m.media-amazon.com/images/I/51lNPbYRzXL._AC_UL1200_.jpg",
      "description": "Dolore quis ut quis officia duis aliqua commodo non laboris. Velit aute consectetur pariatur veniam adipisicing culpa enim dolore sunt dolore consectetur tempor.",
      "discountPercentage": 10
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
      "title": "Rose Gold Child Costume",
      "images": [
        "https://m.media-amazon.com/images/I/812nMSvemuL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71vrYyiNGUL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/81u3Gx-Q-XL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/917UwCjRVSL._AC_UL1500_.jpg"
      ],
      "rating": "2.39",
      "category": "dress ",
      "createdAt": "2012-02-08T13:23:49.596Z",
      "thumbnail": "https://m.media-amazon.com/images/I/812nMSvemuL._AC_UL1500_.jpg",
      "description": "Cillum in nostrud dolor excepteur duis excepteur minim. In culpa aliquip aliquip nulla est.",
      "discountPercentage": 29
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
      "title": "Men's Grand Sneaker",
      "images": [
        "https://m.media-amazon.com/images/I/61FbqzPD8TL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/61fK-mfFO5L._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/61-bV+CZVmL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/61VE0mY4T9L._AC_UL1500_.jpg"
      ],
      "rating": "3.95",
      "category": "shoes",
      "createdAt": "2013-06-07T12:04:45.092Z",
      "thumbnail": "https://m.media-amazon.com/images/I/61FbqzPD8TL._AC_UL1500_.jpg",
      "description": "Irure ut magna minim id proident cupidatat elit ea culpa proident pariatur veniam consequat duis. Deserunt ad esse voluptate cillum dolore ex dolore nulla non ipsum tempor qui proident duis.",
      "discountPercentage": 44
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
      "title": "Women's Iii Jacket",
      "images": [
        "https://m.media-amazon.com/images/I/61IiPDooGbL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/61O96E3RxXL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/61aze7MeQML._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/61qSNCpsNpL._AC_UL1500_.jpg"
      ],
      "rating": "2.95",
      "category": "jacket ",
      "createdAt": "2011-09-28T19:07:50.878Z",
      "thumbnail": "https://m.media-amazon.com/images/I/61IiPDooGbL._AC_UL1500_.jpg",
      "description": "Eiusmod incididunt anim dolore excepteur cupidatat dolore officia. Proident fugiat pariatur minim nostrud incididunt culpa ut tempor mollit labore pariatur velit laborum veniam.",
      "discountPercentage": 47
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
      "title": "Neckline FIT Dress",
      "images": [
        "https://m.media-amazon.com/images/I/71md7jGqpcL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71Qw+77r-qL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/71ODq9Gv3zL._AC_UL1500_.jpg",
      ],
      "rating": "4.69",
      "category": "dress ",
      "createdAt": "2013-03-30T18:55:17.395Z",
      "thumbnail": "https://m.media-amazon.com/images/I/71Qw+77r-qL._AC_UL1500_.jpg",
      "description": "Commodo enim sunt aute aute pariatur deserunt ea exercitation ullamco. Nulla occaecat et nulla elit veniam qui ullamco.",
      "discountPercentage": 35
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
      "title": "Flannel Shirt Jacket",
      "images": [
        "https://m.media-amazon.com/images/I/61J2YWfGrXL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/81N-zvzwHEL._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/61KtGhXi19L._AC_UL1500_.jpg",
        "https://m.media-amazon.com/images/I/61VQIfLk+CL._AC_UL1500_.jpg"
      ],
      "rating": "2.13",
      "category": "jacket ",
      "createdAt": "2014-03-16T20:54:53.180Z",
      "thumbnail": "https://m.media-amazon.com/images/I/61J2YWfGrXL._AC_UL1500_.jpg",
      "description": "Adipisicing deserunt id ad culpa elit consectetur nostrud irure pariatur sint ad. Voluptate aute magna aliqua reprehenderit nostrud aliquip.",
      "discountPercentage": 44
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