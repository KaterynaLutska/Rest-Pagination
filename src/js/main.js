import newsService from "../js/news-service.js";
import updateArticlesMarkup from "./updates-articles-marup.js";
import LoadMoreBtn from "./components/load-more-btn.js";
import refs from "./refs";

const loadMoreBtn = new LoadMoreBtn({
  selector: "button[data-action='load-more']",
  hidden: true,
});

refs.searchForm.addEventListener("submit", searchFormSubmitHander);

loadMoreBtn.refs.button.addEventListener("click", fetchArticles);

function searchFormSubmitHander(event) {
  event.preventDefault();

  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  clearArticleContainer();
  form.reset(); // очищає значення імпута

  newsService.resetPage();
  fetchArticles();
}

function fetchArticles() {
  loadMoreBtn.disable();

  newsService.fetchArticles().then((articles) => {
    updateArticlesMarkup(articles);
    loadMoreBtn.enable();
    loadMoreBtn.show();
  });
}

function clearArticleContainer() {
  refs.articlesContainer.innerHTML = ""; // очищає форму перед наступним сабмітом
}
