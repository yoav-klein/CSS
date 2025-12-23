# Controll the scroll
---

We saw that we can set `overflow: auto` on main and have that as the scroll container.
What if I want the scroll container to be the `.container` or `.two`?

Let's try setting:
```
.two {
    height: 40%;
    overflow: auto;
}
```

what happens? something very strange:
The 40% is 40% out of the height of the enclosing container - `.container`. And what is this height? The height of the inner content! Now something funny happens - the height of the `.container` remains the height of the content, so that the `<html>` is still scrollable, but the height of `.two` is actually only 40% out of it! This is fucked up!
According to Claude, this is due to the grid calculation algorithm or something like that. 
The way to handle it is to give the enclosing `.container` a concrete height, and then the percentage will be calculated out of it.
