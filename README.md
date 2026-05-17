# Maxicare Google Review Dashboard

This folder is a complete GitHub Pages-ready Google Review dashboard package.

- `index.html` is the live dashboard page.
- `scripts/update-reviews.js` updates the JSON file.
- `.github/workflows/update-reviews.yml` runs the updater every 15 minutes and can also run manually.
- `data/reviews.json` stores the live dashboard numbers.

## How To Publish With GitHub

1. Create a new GitHub repository, for example `google-review-dashboard`.
2. Upload everything inside this `google Review` folder to the repository.
3. Go to **Settings > Pages**.
4. Choose **Deploy from a branch**.
5. Select branch `main` and folder `/root`.
6. Open:

   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## How Updates Work

GitHub Pages is static, so the HTML cannot directly save new data. The dashboard updates by loading:

`data/reviews.json`

The GitHub Action refreshes that file every 15 minutes. The page itself checks the JSON file every 60 seconds while open.

## Important

`scripts/update-reviews.js` currently keeps your sample data and updates the `collectedAt` time. To pull real Google reviews automatically, replace `getLatestReviewData()` with a Google Business Profile API connection or a parser for an exported CSV/JSON file.

## Upload With Git Command

From inside this folder:

```bash
git init
git add .
git commit -m "Add Google review dashboard"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```
