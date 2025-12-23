# flex-grow
---

After the items are laid out using their `flex-basis` values, if there's remaining space in the flex container, the value of `flex-grow` determines how this space is divided between the items.

In this example, we set `flex-grow: 1`, so that each of the items will get the same amount of free space.
This means that the last item will be the largest since it started with a larger `flex-basis`.