# Balance

**Note:** This plugins affects layout and such it should be used only if truly needed. Always favor CSS over JavasScript for layouting.

Balance takes a group of elements, make them the same height (uses the height of the heighest element) and align them vertically. 

## Data Api

You can use `data-toggle="balance"` on a parent element to enable balance. By default, it will balance all its children with
class `balanced` and align them `top`.

    <div data-toggle="balance"></div>

You can change the defaults by using `data-selector="jQuery selector"` and `data-align="top|bottom` attributes.

    <div data-toggle="balance" data-align="bottom" data-selector="h3"></div>

## Options


- `align` : `top` or `bottom`, defaults to `top`. Aligns text vertically.
- `selector`: jQuery selector. defaults to `.balanced`. Uses this selector to search for children elements.
-  `cssClass`: `balanced`. Class name to apply to children elements. If you change this, make sure you also change the CSS.



        $.fn.balance.defaults = {
            selector: '.balanced', 
            align: 'top',
            cssClass: 'balanced'
        };
