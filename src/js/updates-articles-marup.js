import articlesTpl from "../templates/articles.hbs";
import refs from "./refs";
// створює розмітку для статтей //

function updateArticlesMarkup(articles) {
  const markup = articlesTpl(articles);
  console.log(markup);
  refs.articlesContainer.insertAdjacentHTML("beforeend", markup);
}

export default updateArticlesMarkup;
