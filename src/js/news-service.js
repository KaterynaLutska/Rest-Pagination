// забирає з бекенду інформацію //

const apiKey = "3fcb5f94d98c476a99c30839142ea172";

export default {
  searchQuery: "",
  page: 1,
  fetchArticles() {
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&apiKey=${apiKey}&language=ru&pageSize=3&page=${this.page}`;
    const options = {
      methode: "GET", // по замовчуванням
      headers: {
        Authorization: apiKey, // заголовок службова метаінформація. Деякі АPI не підтримують заголовки
        // Accept: "application/json ",
      },
    };

    return fetch(url, options)
      .then((response) => response.json())
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      })
      .catch((error) => console.log(error)); // зловимо помилку
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
