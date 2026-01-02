# Explicit and Implicit grids
---

The terminology is a bit confusing here, so I'll try to make it simple.

When you set `grid-template-columns` or `grid-template-rows`, you're dealing with the _explicit grid_. So for example in the basic example
we have a grid with 3 columns in the explicit grid, but then we have more than 3 items in it. So the extra 2 are going to something called the _implicit grid_,
the grid automatically creates row tracks for those items.

By default, those grid rows are auto-sized. Using `grid-auto-rows` you can tell the grid how tall to make implicit rows.