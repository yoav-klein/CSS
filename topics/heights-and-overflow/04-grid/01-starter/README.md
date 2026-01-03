# Grid
---

We start with:
1. `html` and `body` with height 100%
2. `main` - this is our frame container, width and height 95% .
3. `.container` - this is our gridbox
4. `.one` and `.two` containers
5. in `.two` - content that exceeds the height of the containing `main`

What happens?
1. `main` has a height of 95% of the height of the viewport - around 750px.
2. `.container`, `.one` and `.two` has heights of the inner content - around 1100.
3. The scroll container is the whole document (`<html>`)
4. Setting `overflow: auto` on main will make main to be the scrolling container
5. Setting `overflow: auto` on `.container`, `.one` or `.two` will have no effect, since there's no overflow there.

Everything is perfectly clear!
