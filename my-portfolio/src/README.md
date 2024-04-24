### How to update portfolio

Update `portfolio-sheet.csv` with new pieces.
The paths in portfolio-sheet should be relative to the `/portfolio/my-portfolio/src/` directory.
The source path can be either a single file or a directory to display multiple files (`BethlehemBrand` is the only current example)

Once `portfolio-sheet.csv` is updated, run the following command in the `src` folder.
```
python3 generate.py
```
This will update the `Pieces.js` file which should look like `PiecesTest.js`

run `npm start` from the `/my-portfolio` folder to make sure everything looks as intended.

once everything is set, run the deployment step
```
npm run deploy
```