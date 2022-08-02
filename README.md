# redirector

A dead simple userscript to redirect you to privacy-friendly alternatives.

## Install

1. Install a userscript manager like [Violentmonkey](https://github.com/violentmonkey/violentmonkey)
2. [Click Here](https://github.com/kevinfiol/redirector/raw/main/redirector.user.js)

## Adding more redirects

You'll have to edit the userscript itself.

1. Add a `@match` tag to the `==UserScript==` header at the top of the script matching whatever site you want to redirect from, e.g. `*.youtube.com/*`.
2. Add a property to the `redirects` object where the key is the site name you're redirecting from, and the value is the domain of the privacy-friendly alternative. For example:
  ```js
  let redirects = {
    'imgur': 'i.bcow.xyz',
    'twitter': 'notabird.site',
    'medium': 'scribe.rip',
    'youtube': 'piped.kavin.rocks'
  };
  ```
