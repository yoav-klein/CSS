
In this example, we create a <div> to be our checkbox, and hide the original checkbox.

Notes:
* The checkmark is the `::after` of this div
* The trick is to use the next-sibling selector `.custom-checkbox input[type="checkbox"]:checked + .checkbox-box` to select our <div> that is after the hidden checkbox.
