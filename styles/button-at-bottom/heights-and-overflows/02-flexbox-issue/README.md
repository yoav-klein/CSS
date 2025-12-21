# Heights and overflows - flexbox
---

Now chech this shit out: 
1. we set the `main` to be a fixed height - without it, it will stretch to the height of the content
2. we set the `main` to be a flexbox, centering all its content with `justify-content: center`

What happens? some of the flex items are above the `main` container. why??
The way to understand it is as such:
imagine the content put centered to the containing block, so the same height that overflows beneath also overflows above.
Now, the scrolling is only for the beneath, but not for the above!

Now see the next phase to see how it's fixed