# Balance

Balance takes a group of elements, make them the same height (uses the height of the heighest element) and align them vertically. 

**Note:** Make sure you set the same margins and padding to the balanced elements. 


## Data Api

You can use `data-toggle="balance"` on a parent element to enable balance. By default, it will balance all its children with
class `balanced` and align them `top`.

    <div data-toggle="balance"></div>

You can change the defaults by using `data-selector="jQuery selector"` and `data-align="top|bottom` attributes.

    <div data-toggle="balance" data-align="bottom" data-selector="h3"></div>

If you need to rebalance the elements when the window resizes you can add `data-update-resize="true"`.

You can specify a minimum window width needed to trigger the ballance with `data-min-width="768"`.

## Using it manually

    $('.parent').balance({align: 'bottom', selector: 'h3'});
    
## Options

    $.fn.balance.defaults = {
        selector: '.balanced', 
        align: 'top',
        cssClass: 'balanced',
        minWidth: 0,
        updateResize: false
    };

- `align` : `top` or `bottom`, defaults to `top`. Aligns text vertically.
- `selector`: jQuery selector. defaults to `.balanced`. Uses this selector to search for children elements.
- `cssClass`: `balanced`. Class name to apply to children elements. If you change this, make sure you also change the CSS.
- `minWidth`: `0`. Mininum window width needed to balance the elements.
- `updateResize`: `false`. Set this one to `true` if you need to rebalance the elements when the browser window resizes.



