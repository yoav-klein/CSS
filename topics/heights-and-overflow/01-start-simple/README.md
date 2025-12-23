# Heights and overflows - Start simple
---

We have a `html` and `body`.

We have a `main` which is visually distinguished, which is our main container for the content.
Inside we have a lot of content, which is heigher than the viewport (if you shrink the width).

Without setting height, the height of `main` will grow to the size of the inner content.

Now, let's set fixed height on main `main`. 
The default `overflow` value is `visible`, so we can see the content overflowing below the `main`. 
The scroll container is still the document ('<html>')

If we set the `overflow` to `auto`, we'll see a scroll bar in the `main`. Great, enough for now.
