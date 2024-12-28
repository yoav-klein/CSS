# Popup
---

How it works?

The basic concept is having JavaScript play with the `display` property of the overlay.
We have a containing `<div>` which is the overlay. It has a semi-transparent background to convey that it's disabled.
Inside that div we have another div, which is our popup window.

NOTES:
* The `close` button has `absolute` positioning, because we want to position it in a specific location relative to the popup window.