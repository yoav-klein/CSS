# minmax
---

Sometimes you want your grid rows to have a minimum height, so they won't shrink below it, but allow it to grow with content.

For this, you use the `minmax()` function, which takes a minimum and maximum values.

`grid-auto-rows: minmax(100px, auto)` will make it so that the created rows will be no less than 100px, but will allow the row to 
expand as needed as content is added, and also share available space.