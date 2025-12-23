# Heights and overflows - Flexbox
---

Now let's make `main` a flexbox, and make it a fixed height.

Now, in the previous section (box in box) we saw that when the inner has no fixed height and the outer has fixed height, 
then the height of inner is the height of the content. Setting `overflow: auto` on inner has no effect, since there's no overflow!

But here, when inner is a flex item, setting `overflow: auto` gives it the size of the outer container, and makes it the scroll container.
Basically it's the same effect of setting its height AND setting `overflow: auto`