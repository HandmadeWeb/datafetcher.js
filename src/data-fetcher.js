window.addEventListener('DOMContentLoaded', async () => {
  for (let el of document.querySelectorAll("[data-fetcher]")) {
    try {
      const res = await fetch(el.dataset.fetcher);
      el.innerHTML = await res.text()
    } catch (err) {
      console.log(err)
    }
  }
});