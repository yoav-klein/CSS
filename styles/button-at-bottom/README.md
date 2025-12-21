# Button floating at bottom of page
---

This is easier said than done.

What we want is to have a button that is fixed in place, while the content behind it is scrolling.
Consider our Grocery application's "Current List" page, where there's the current list, and the "+" button
in the bottom.

## What we have here
---

First, we have the `html` taking 100% of the height, great.
Then, the `body` takes 90% of height and width, just to make things super clear.
Then, we have the `div.container`, which is the frame in which we want the button to be fixed inside.

Inside this, we have the `div.sections`, which contains a lot of `section` elements, which is our main content.

Now, we want the button to be fixed at the bottom, no matter if there's only one `section` or many.

So first, we define the `div.container` as `position: relative` so that it'll be the positioning context for the `position: absolute` of the button.
Then, we set `position: absolute` on the button and place it `left: 50%; bottom: 20px` so that it'll be in the center bottom of the container.

Now the interesting part. Note that we put all the sections in a `div.sections` container. why? if we'd just put the button below all the sections in 
the same container, then when we would scroll down, the button would remain at its position, meaning it would move around.
The trick is to have the scrollable content in its own container (which is scrollable with `overflow: auto`). So when we scroll, we actually scroll
the `div.sections`, and not the `div.container`. 

Another gotcha here is - we must set the height of the `div.sections`. Here I set it to 90% so that it'll be clear what is being scrolled - the `div.container` or the `div.sections`, but it may be 100% to take all the space of `div.container`.  WAIT - you don't have to set the height to make it work?? I'm confused...