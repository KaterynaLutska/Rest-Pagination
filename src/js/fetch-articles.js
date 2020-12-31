// забирає з бекенду інформацію //

// const apiKey = "3fcb5f94d98c476a99c30839142ea172";

// function fetchArticles() {
//   const url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}&language=ru&page=${page}`;
//   const options = {
//     methode: "GET", // по замовчуванням
//     headers: {
//       Authorization: apiKey, // заголовок службова метаінформація. Деякі АPI не підтримують заголовки
//       // Accept: "application/json ",
//     },
//   };

//   return fetch(url, options)
//     .then((response) => response.json())
//     .then((data) => data.articles)
//     .catch((error) => console.log(error)); // зловимо помилку
// }

// export default fetchArticles;
