import articlesTepl from "../templates/articles.hbs";
import refs from "./refs";
// створює розмітку для статтей //

const { articlesContainer, searchForm } = refs;

function updateArticlesMarkup(articles) {
  const markup = articlesTepl(articles);
  console.log(markup);
  refs.articlesContainer.insertAdjacentHTML("beforeend", markup);
}

export default updateArticlesMarkup;
