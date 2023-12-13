"use strict"

var images = document.querySelectorAll("#img_contain");
var nature_group = document.querySelectorAll(".img_nature");
var city_group = document.querySelectorAll(".img_city");
var city_na = document.querySelectorAll(".city_nature");
var maindiv = document.querySelector("#main-div");
var modal = document.querySelector("#modal_imgs");
var modal1 = document.querySelector("#modal_imgs1");
var mainimg = document.querySelector(".main-img");
var mainimg1 = document.querySelector(".main-img1");
var next_pre_btn = document.querySelectorAll(".btn");
var next_pre_btn1 = document.querySelectorAll(".btn1");
var modal_img = document.querySelectorAll(".modal-img");
var modal_cit = document.querySelectorAll(".modal-img1");
var close_btn = document.querySelectorAll(".close-btn");

//Nature_Group_container

nature_group.forEach((nat_img, index) => {
    nat_img.addEventListener("click", () => {
        modal.classList.remove("display");
        maindiv.classList.add("dis-n");
        mainimg.src = store_img[index];

        modal_img.forEach((img, inx) => {
            if (inx == index) {
                img.classList.remove("opacity");
            }
            else {
                img.classList.add("opacity")
            }
        });
    });
});

//City_Group_Container

city_group.forEach((city_img, index) => {
    city_img.addEventListener("click", () => {
        maindiv.classList.add("dis-n");
        modal1.classList.remove("display1");
        mainimg1.src = store_img1[index];

        modal_cit.forEach((img, inx1) => {
            if (inx1 == index) {
                img.classList.remove("opacity");
            }
            else {
                img.classList.add("opacity")
            }
        });
    });
});

//Rigth - Left Btn For Nature Concept

// var store_img = ["nature-1.jpeg", "nature-2.jpeg", "nature-3.jpeg"];
// var data = 0;

// next_pre_btn.forEach((pre, index) => {
//     pre.addEventListener("click", () => {
//         modal_img.forEach((img, inx) => {
//             img.classList.add("opacity");
//         });
//         data = (index === 0) ? (data === 0 ? store_img.length - 1 : data - 1) : (data === store_img.length - 1 ? 0 : data + 1);
//         console.log(data);
//         mainimg.src = store_img[data];
//         modal_img[data].classList.remove("opacity");
//     });
// });


var store_img = ["nature-1.jpeg", "nature-2.jpeg", "nature-3.jpeg"];
var data = 0;


modal_img[0].classList.remove("opacity");

next_pre_btn.forEach((pre, index) => {
    pre.addEventListener("click", () => {
        modal_img.forEach((img, inx) => {
            img.classList.add("opacity");
        });
        data = (index === 0) ? (data === 0 ? store_img.length - 1 : data - 1) : (data === store_img.length - 1 ? 0 : data + 1);
        console.log(data);
        mainimg.src = store_img[data];
        modal_img[data].classList.remove("opacity");
    });
});


modal_img.forEach((touh_img, ind_ex) => {
   touh_img.classList.add("opacity");
    touh_img.addEventListener("click", () => {
        mainimg.src = store_img[ind_ex];
        modal_img.forEach((img, inx) => {
            img.classList.add("opacity");
        });
        touh_img.classList.remove("opacity");
        data = ind_ex;
    });
});

var store_img1 = [
    "city-1.jpeg",
    "city-2.jpeg",
    "city-3.jpeg",
    "city-4.jpeg",
    "city-5.jpeg",
];

//Rigth - Left Btn For City Concept
var data1 = 0;

next_pre_btn1.forEach((pre1, index1) => {
    pre1.addEventListener("click", () => {
        modal_cit.forEach((img, inx) => {
            img.classList.add("opacity");
        });
        data1 = (index1 === 0) ? (data1 === 0 ? store_img1.length - 1 : data1- 1) : (data1 === store_img1.length - 1 ? 0 : data1 + 1);
        mainimg1.src = store_img1[data1];
        modal_cit[data1].classList.remove("opacity");
    });
});

modal_cit.forEach((image, index) => {
    image.classList.add("opacity");

    image.addEventListener("click", () => {
        mainimg1.src = store_img1[index];
        modal_cit.forEach((img, ind) => {
            img.classList.add("opacity");
        });
        image.classList.remove("opacity");
        data1 = index;
    });
});

//Close Btn

close_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        location.href = "index.html"
    })
})


















// var store_img = ["nature-1.jpeg", "nature-2.jpeg", "nature-3.jpeg"];
// var data = 0;

// next_pre_btn.forEach((pre, index) => {
//     pre.addEventListener("click", () => {
//         modal_img.forEach((img, inx) => {
//             if (inx == data) {
//                 img.classList.remove("opacity")
//             }
//             else {
//                 img.classList.add("opacity")
//             }

//         });

//         if (index === 0) {
//             data = (data === 0) ? store_img.length - 1 : data - 1;
//         } else {
//             data = (data === store_img.length - 1) ? 0 : data + 1;
//         }

//         mainimg.src = store_img[data];
//         modal_img.forEach((img, inx) => {
//             if (inx == data) {
//                 img.classList.remove("opacity")
//             }
//             else {
//                 img.classList.add("opacity")
//             }
//         });
//     });
// });


// next_pre_btn1.forEach((pre1, index1) => {
//     pre1.addEventListener("click", () => {
//         modal_cit.forEach((img, inx1) => {
//             if (inx1 == data1) {
//                 img.classList.remove("opacity")
//             }
//             else {
//                 img.classList.add("opacity")
//             }
//         });

//         if (index1 === 0) {
//             data1 = data1 === 0 ? store_img1.length - 1 : data1 - 1;
//         } else {
//             data1 = data1 === store_img1.length - 1 ? 0 : data1 + 1;
//         }

//         mainimg1.src = store_img1[data1];
//         modal_cit.forEach((img, inx1) => {
//             if (inx1 == data1) {
//                 img.classList.remove("opacity")
//             }
//             else {
//                 img.classList.add("opacity")
//             }
//         });

//     });
// });