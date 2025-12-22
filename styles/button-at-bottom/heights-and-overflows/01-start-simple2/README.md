# Heights and overflows - Start simple 2
---

Now what happens when you have 2 containers one inside the other.

Scenarios:
1. inner and outer has no fixed height - no overflow, both have height of inner content
2. inner has fixed height - there'll be overflow, inner and outer will have the same height - the fixed height for inner
2.a - if you set `overflow: auto` on inner - inner will be the scroll window. If you set `overflow: auto` on outer - outer will be the scroll window (and also interesting thing with the margin on top)
3. outer has fixed height - inner will have the height of the inner content (2000px), outer will be of the fixed height, and inner will overflow out of outer.
4. both have fixed height - both will have the height of the inner content. Setting `overflow: auto` on each will make it the scroll window.

Ok everything is ver