# Here are the major changes that have been introduced:

## standalone_components/Menu/setup.js

The callback function now takes 3 arguments, ev, dc, and context. This is because the existing callback used *this* rather than context, but *this* does not work after defining the function higher up in the tree, even after binding *this* to the callback. If there is a way to allow *this* to work, then it is easy to fix.

# Current Bugs

## standalone_components/Menu

There is a problem with the menu currently. After going through and clicking on several link options in both submenus and top menu, the top menu will delay and not catch keyboard input for some reason. It takes exactly 4 presses of the down arrow before one can move to the next item. This delay behavior happens until escape is pressed and the menu is closed.



