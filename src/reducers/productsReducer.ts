import { createSlice } from '@reduxjs/toolkit'
import { ProductsState } from '../app/types'

export const initialState: ProductsState = [
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