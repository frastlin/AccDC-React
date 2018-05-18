# Here are the major changes that have been introduced:

## standalone_components/Menu/setup.js

The callback function now takes 3 arguments, ev, dc, and context. This is because the existing callback used *this* rather than context, but *this* does not work after defining the function higher up in the tree, even after binding *this* to the callback. If there is a way to allow *this* to work, then it is easy to fix.

# Current Bugs

Generally, there are a whole lot of warnings from the linter that may be good to resolve.

## standalone_components/Menu

There is a problem with the menu currently. After going through and clicking on a link in both top menu and in a submenu, the top menu will delay and not catch keyboard input for some reason. It takes exactly 4 presses of the down arrow before one can move to the next item in the top menu. This delay behavior happens until escape is pressed and the menu is closed. Escape before the delay doesn't help. There is the following log in the console after one of these occurrences;
~Object { height: 34, width: 301, right: NaN, bottom: NaN }~
This has something to do with the [rect object.](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
Normally, the object looks something like:
~Object { left: 0, top: 200, height: 34, width: 301, right: 301, bottom: 234 }~


# Questions

## standalone_components/Menu/setup.js

What are the following items?

-	Role name
-	Beginning and ending text
-	State text
-	ariaLevel
-	autoPosition
-	offsets
-	Overrides


## standalone_components/DataGrid/aria_data_grid_module.js

Where does ~type: 'toggle'~ come from in the gridcell object in the last colum in the for loop?


