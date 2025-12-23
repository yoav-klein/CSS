# Heights and overflows - Start simple
---

We have a `html` and `body`.

We have a `main` which is visually distinguished, which is our main container for the content.
The `main` has a fixed width and fixed height.
Inside we have a lot of content, which takes more than the fixed height.

The default `overflow` value is `visible`, so we can see the content overflowing below the `main`.

If we set the `overflow` to `auto`, we'll see a scroll bar in the `main`. Great, enough for now.

Another thing - if we remove the set height from `main`, then even without the `overflow: auto`, there will be no overflow,
since the height of `main` will be determined by the height of the content inside it.

See the next phase to understand how flexbox affects behaviors.