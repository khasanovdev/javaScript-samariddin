/* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor.
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/

window.addEventListener("DOMContentLoaded", () => {
  const news__btn = document.querySelector(".news__btn"),
    promo__genre = document.querySelector(".promo__genre"),
    promo__bg = document.querySelector(".promo__bg"),
    promo__btn = document.querySelectorAll(".promo__btn button"),
    promo__interactive = document.querySelector(".promo__interactive-list"),
    news = [
      "FOOTBALL",
      "UFC",
      "AMERICAN FOOTBAL IN EU...",
      "BOX",
      "BASKETBALL",
    ],
    addForm = document.querySelector(".add"),
    addInput = document.querySelector(".adding__input"),
    checkbox = document.querySelector("[type='checkbox']");

  news__btn.remove();
  promo__genre.textContent = "UzNews";
  promo__genre.style.color = "crimson";
  promo__bg.style.backgroundImage = "url(img/2.jpg)";
  promo__btn[1].style.borderRadius = "50px";

  function createNewsList(newsList, promoList) {
    promoList.innerHTML = " ";
    news.sort();

    newsList.forEach((item, index) => {
      promoList.innerHTML += `
    <li class="promo__interactive-item">
        ${index + 1}  ${item}
        <div class="delete"></div>
    </li>
    `;
    });

    document.querySelectorAll(".delete").forEach((btn, indeks) => {
      btn.addEventListener("click", () => {
        btn.parentElement.remove();
        news.splice(indeks, 1);
        createNewsList(newsList, promoList);
      });
    });
  }
  createNewsList(news, promo__interactive);

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newsPaper = addInput.value.toUpperCase(),
      check = checkbox.checked;

    if (newsPaper) {
      if (newsPaper.length >= 20) {
        newsPaper = ` ${newsPaper.substring(0, 20)} ... `;
      }
      if (check) {
        console.log("checked running");
      }
      news.push(newsPaper);
      createNewsList(news, promo__interactive);
    }
    addInput.value = "";
  });
});
