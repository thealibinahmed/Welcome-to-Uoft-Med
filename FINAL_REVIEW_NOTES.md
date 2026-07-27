# Final checks after adding assets

These are not missing page rewrites. They are checks that need the final assets, live deployment or form destination.

## Feedback form

- Submit one test for every category and confirm that every expected field reaches the Google Sheet.
- Confirm that **Housing review** submissions populate the housing-review data used on the Housing page.
- Confirm that **Privacy update or removal** is an accepted Apps Script category.
- The current `no-cors` submission flow can show that the browser sent the request, but cannot prove that the sheet received it. Verify the sheet directly before launch.

## Finances

- An accessible annotated ACORN invoice pop-up has been added using a 2026–27 domestic St. George example.
- The example shows which Fall and Winter subtotals to add and reconciles them to the full-session total. The source screenshot itself is not published.

## Links, assets and responsive behaviour

- Run one final external-link audit after the assets are added and the site is deployed.
- Confirm that every image path resolves, then add useful alt text where an image conveys information.
- The homepage has the newer mobile navigation treatment. Apply and test the same treatment site-wide only after the final shared header/assets are in place.
- Consider converting large photographic assets to WebP after visual comparison; do not sacrifice image quality.

## Final content synchronization

- When a page section is added or renamed, update `site-search-index.js` and the Quick Links directory in the same pass.
- Keep official Faculty pages first where current instructions, dates, forms or fees can change.
- Recheck time-sensitive labels and “last verified” dates immediately before publication.
