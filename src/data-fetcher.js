window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll("[data-fetcher]").forEach((data) => {
        fetch(data.getAttribute('data-fetcher'))
            .then(response => response.text())
            .then(html => data.innerHTML = html);
    });
});