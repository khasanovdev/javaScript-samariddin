


// document.addEventListener("DOMContentLoaded", () => {
//   "use strict";

//   const promoBtn = document.querySelectorAll(".promo__btn button"),
//     promoList = document.querySelector(".promo__interactive-list"),
//     add = document.querySelector(".add button"),
//     addingInput = document.querySelector(".adding__input"),
//     checkbox = document.querySelector("[type='checkbox']");

//   const news = [
//     "FOOTBALL",
//     "UFC",
//     "AMERICAN FOOTBAL IN EU...",
//     "BOX",
//     "BASKETBALL",
//   ];

//   promoBtn[0].remove();
//   promoBtn[1].style.borderRadius = "50px";

//   document.querySelector(".promo__genre").textContent = "UzNews";
//   document.querySelector(".promo__genre").style.color = "red";
//   document.querySelector(".promo__bg").style.background =
//     "url(../img/2.jpg) no-repeat center center/cover ";

//   function createNewsList(newsList, parent) {
//     parent.innerHTML = " ";
//     sortArr(news);

//     newsList.forEach((item, index) => {
//       parent.innerHTML += `
//       <li class="promo__interactive-item">
//       ${index + 1} ${item}
//           <div class="delete"></div>
//       </li>
//   `;
//     });
//     document.querySelectorAll(".delete").forEach((btn, i) => {
//       btn.addEventListener("click", () => {
//         btn.parentElement.remove();
//         news.splice(i, 1);
//         createNewsList(newsList, parent);
//       });
//     });
//   }

//   const sortArr = (arr) => {
//     arr.sort();
//   };

//   createNewsList(news, promoList);
//   sortArr(news);

//   add.addEventListener("click", (event) => {
//     event.preventDefault();

//     let newsPap = addingInput.value.toUpperCase();
//     const myFav = checkbox.checked;

//     if (newsPap) {
//       if (newsPap.length > 21) {
//         newsPap = ` ${newsPap.substring(0, 21)} ... `;
//       }
//       if (myFav) {
//         console.log("checked clicked");
//       }
//       news.push(newsPap);
//       sortArr(news);
//       createNewsList(news, promoList);
//     }
//     addingInput.value = "";
//   });
// });