console.log("Here we go");
let blogSection = document.getElementById("blog-section");
let blogSection2 = document.getElementById("blog-section2");

function generateCards(e) {
  // const newXHRRequest = new XMLHttpRequest();
  // let source = 'the-times-of-india';
  const type ={
    cat1: 'general',
    cat2: 'sports',
    cat3: 'business',
    cat4: 'science'
  }
  let category = '';
  // newXHRRequest.open(
  //   "GET",
  //   `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pagesize=3&apiKey=75da3b7678de41fcb76359915aabdc1d`,
  //   true
  // );
  // newXHRRequest.getResponseHeader("content-type", "application/json");

  // newXHRRequest.onload = function () {
  //   if (this.status === 200) {
  //     let myCards = JSON.parse(this.responseText);
  //       console.log(myCards);
  //     let articles = myCards.articles;
  //       // console.log(articles);
  //     let itemsHtml = "";
  //     articles.forEach((element) => {
  //       // console.log(articles);
  //       // category="sports";
  //       category = type.cat2;
  //       console.log(element);
  //       let items = `<div class="r1c1 block">
  //       <a href="${element["url"]}" target="_blank"><img class="img" src=${element["urlToImage"]} alt="img">
  //       <p class="blog-title">${element["title"]}</p></a>
  //       </div>`;
  //       itemsHtml += items;
  //     });
  //     blogSection.innerHTML = itemsHtml;
  //     blogSection2.innerHTML = itemsHtml;
  //   } else {
  //     console.log("Some error occured");
  //   }
  // };
  // newXHRRequest.send();

  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pagesize=3&apiKey=75da3b7678de41fcb76359915aabdc1d`;
  data="";

//  function getData(){

   fetch(url, {
     method: 'GET',
    }).then((response)=>response.json())
    .then((data)=>console.log(data.articles));
  }
  // getData();
// }
generateCards();








