# Heights chain - settings heights
---

Ok now let's set the height of `main` to be 95% of the containing container.

note that now the height of `main` is 849 or something like this, which is 95% of the height of the viewport.

The inner container `.sections` is now overflowing from the main container.
Setting `overflow: auto` on main will make the main as the container.
Note that `overflow: auto` on `.sections` will do nothing basically