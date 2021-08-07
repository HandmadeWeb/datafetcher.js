[![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE.md)

dataFetcher.js is a small library to swap the content of an element with the response from an ajax response.

## Adding dataFetcher.js to your project

### Building from the source
- Run `npm install` & ( `npm run dev` or `npm run prod` )
- Add `/dist/data-fetcher.min.js` to your project.

## Usage

Load `data-fetcher.min.js` in your footer.

`data-fetcher.js` will look for elements which have a `data-fetcher` data attribute, it will then trigger a GET request to the url specified in the `data-fetcher` attribute, and will replace the contents of the element with the contents of the GET request, so be sure to return a Html response.

If we wanted to fetch the latest news, the below example will do just that.
```html
<div data-fetcher="/ajax/news"></div>
```

If we wanted to fetch the latest news, but also display some placeholder content until the news has been loaded, then the below example will do that.
```html
<div data-fetcher="/ajax/news">
    <p>Man drops egg, goes without breakfast! You won't believe what happened next!</p>
</div>
```

## Changelog

Please see [CHANGELOG](https://github.com/handmadeweb/datafetcher.js/blob/main/CHANGELOG.md) for more information what has changed recently.

## Contributing

Please see [CONTRIBUTING](https://github.com/handmadeweb/datafetcher.js/blob/main/CONTRIBUTING.md) for details.

## Credits

- [Handmade Web & Design](https://github.com/handmadeweb)
- [Michael Rook](https://github.com/michaelr0)
- [John Pieters](https://github.com/sliver37)
- [All Contributors](https://github.com/handmadeweb/datafetcher.js/graphs/contributors)

## License

The MIT License (MIT). Please see [License File](https://github.com/handmadeweb/datafetcher.js/blob/main/LICENSE.md) for more information.
