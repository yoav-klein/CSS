# Grid in grid - setting overflow
---

Now, set the `overflow: auto` on `.container` and/or `.two`.

1. Setting `overflow: auto` on `.two` - doesn't do nothing
2. Setting `overflow: auto` on `.container` - makes the height of `.container` to be `main` - `header`, and makes it the scroll container - so the whole container scrolls - `.one` and `.two`. NOTE that `.two` is still the height of the inner content.
3. Setting `overflow: auto` on both - makes `.two` the scroll container, sets its height to `main` - `header`.