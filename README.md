# crawler-service

middleware for crawlers

See doc on https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget#improve_crawl_efficiency

The crawler service should:
- have scripts to generate sitemaps with Etag and last modified date
- have scripts to update the sitemaps based on the git repos
- have a version of robots.txt that:
   * includes all the sitemaps
   * prevents crawling of etexts / image viewer based on the #open... fragment ?
- return true HTTP codes (200, 301, 403, 404)
- handle http headers Etag, If-Modified-Since and If-None-Match
- send http header max-age Cache-Control
- send Website object with some information (see [here](https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox))
- cache rendered html pages (?) with etag / last modified (?) on S3 (?)
- ability to pre-cache html pages based on the sitemaps, database of cached pages

other actions:
- use proper routing to open the viewers
- add structured data for biblio info: https://developers.google.com/search/docs/appearance/structured-data/book
- add structured data for breadcrumbs: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- don't use permalinks as canonical urls for crawlers
- use rel="nofollow" for links to search
- use noimageindex? https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag

possible solutions:
- https://github.com/veliovgroup/spiderable-middleware/
- https://github.com/prerender/prerender
- using https://react.dev/reference/react-dom/server/renderToReadableStream directly?

legacy solution:
- https://github.com/GoogleChrome/rendertron

Non-free options:
- https://www.seo4ajax.com