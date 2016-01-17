PrevNextTabs module for ProcessWire
================

Processwire helper modules for adding page navigation within the editor. [ProcessWire CMS](http://processwire.com/).

Currently beta state - please use with caution and report all errors or things that don't work as expected.

## Overview

This is a very simple module that adds **Previous** and **Next** links inline with the tabs on the page editor.
Hovering over the tab shows the title of the previous or next page (using the admin's built in jqueryUI tooltips.)

### Usage

This module is typically used during development where you or your editors need to traverse through pages for the purpose of proofing, flagging and/or commenting. Rather than returning to the page tree or lister, they can navigate with these links.


### Warnings

If you are using PW version 2.6.1 or later, the system will prevent you from leaving the page if you have unsaved edits.

For earlier versions, to avoid accidentally losing changes made to a page that might occur if a user accidentally clicks on one of these, make sure to have the Form Save Reminder module installed.


![Desc](https://raw.githubusercontent.com/outflux3/PrevNextTabs/master/screen.png)
