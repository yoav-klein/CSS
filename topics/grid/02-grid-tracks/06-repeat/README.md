# repeat
---

The `repeat` function is very useful for `grid-template-columns` or `grid-template-rows`.

## 01-simple
Simple use of repeat, just repeat a fixed number of tracks

## 02-auto-fill
`auto-fill` means: fill the row with as many tracks you can, even if there are no items.
Open with Live Server and play with the width of the viewport, and you'll see that it creates as many columns it can.

## 03-auto-fit
`auto-fit` is like `auto-fill`, except that it collapses empty columns. If you do the same experiment, you'll see that grid-wise it creates 
more columns, but they have 0 width - which means collapsed.

## 04-auto-fill-minmax
This is how you do responsive grid. By defining `minmax(200px, 1fr)` you make sure that the grid tracks fill the width of the viewport

## 05-auto-fit-minmax
This is if you want the items to fill all the space.