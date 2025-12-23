# Heights and overflows - flexbox issue fixed
---

The fix for this is to set `justify-content: safe center`
this way, when content is less than the height, it'll be centered. But when it's taller than the height, it'll act like it's `justify-content: start`