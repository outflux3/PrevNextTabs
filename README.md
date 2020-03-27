PrevNextTabs module for ProcessWire
================

Processwire helper modules for adding page navigation within the editor. [ProcessWire CMS](http://processwire.com/).


## Overview

This is a simple module that adds **Previous** and **Next** links to the page editor, for the purpose of allowing editors to navigate from one page to the next.

The links may be placed in the breadcrumbs, or in the editor tabs (on the right side).

The latest version avoids potential delays and overhead to the page editor load time, by offloading the work of getting the previous and next page ids to an ajax request, which upon completion populates the links with the URL and title of the adjacent pages.

As such this module should not cause any additional overhead to the page editor, aside from loading the CSS and JS. The links themselves become usable after the ajax request is complete, and this duration can take anywhere from .5 seconds up to 2 or more seconds depending on how many sibling pages exist. The module has been tested on sites with up to 9,000 sibling pages.

Hovering over the tab shows the title of the previous or next page (using the admin's built in jqueryUI tooltips.)

### Usage

This module is typically used during development where you or your editors need to traverse through pages for the purpose of proofing, flagging and/or commenting. Rather than returning to the page tree or lister, they can navigate with these links.


### Warnings

If you are using PW version 2.6.1 or later, the system will prevent you from leaving the page if you have unsaved edits.

For earlier versions, to avoid accidentally losing changes made to a page that might occur if a user accidentally clicks on one of these, make sure to have the Form Save Reminder module installed.


### Changelog

- .016: Complete module rewrite - The module no longer runs the $pages->find() within the hook, which could cause load delays. Module only outputs template markup which is modified client side by the results of the ajax request to the module, to obtain the links.