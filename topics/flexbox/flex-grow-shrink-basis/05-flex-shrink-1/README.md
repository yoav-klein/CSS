# flex-shrink
---

`flex-shrink` determines how much the flex item will shrink in case there is negative free space - i.e. the sum of the widths of all flex items are more than the container's width.

A positive value means that the item will shrink. Setting to 0 means that it won't shrink.
The default value is 1.

In this example we demonstrate a situation where there's negative free space. I set the `flex-shrink: 0` so that there won't be shrinking - the content will overflow.