window.addEventListener('DOMContentLoaded', async () => {
  for (let el of document.querySelectorAll("[data-fetcher]")) {
    try {
      const res = await fetch(el.dataset.fetcher);
      const type = res.headers.get("content-type");
      if (! type.includes('text/html')) {
        throw new Error(`Expected HTML got ${type}`)
      }
      el.innerHTML = await res.text()
    } catch (err) {
      console.log(err)
    }
  }
});