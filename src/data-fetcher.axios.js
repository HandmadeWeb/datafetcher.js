window.addEventListener('DOMContentLoaded', () => {
  for (let el of document.querySelectorAll("[data-fetcher]")) {
    try {
      axios.get(el.dataset.fetcher)
        .then(response => response.text())
        .then(html => data.innerHTML = html);
    } catch (err) {
      console.log(err)
    }
  }
});