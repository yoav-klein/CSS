# Heights chain - Flexbox weirdness
---

Now let's turn our `main` to a flebox, and remove the `height` from the `.sections`.

You'll see something weird - toggle `overflow: auto` on `.sections`: when it's there, the height of `.sections` is 
the height of the containing main. When it's not there, the height of the `.sections` is the height of the contained content.
The scrolling box is the `.sections`, although there's no `height` set on it.

The explanation may be that a flex item has a fixed height, which is the height of it's enclosing flexbox.
