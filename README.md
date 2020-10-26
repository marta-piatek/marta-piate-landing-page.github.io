# Table of Contents

- [Landing Page Project](#landing-page-project)
- [Features](#features)
  * [Dynamic Navigation Bar](#dynamic-navigation-bar)
  * [Scrolling to Anchor](#scrolling-to-anchor)
  * [Collapsible Sections](#collapsible-sections)
  * [Back-To-Top Button](#back-to-top-button)
  * [Highlighting](#highlighting)
    + [Sections Active State](#sections-active-state)
    + [Active State Navigation](#active-state-navigation)

# Landing Page Project

This is my project number 2 of the Front-End Developer Nanodegree, which primarily focuses on making the website dynamic using **Javascript**.

# Features

Here are the features that have been developed for this project.

## Dynamic Navigation Bar

When the website loads, the navigation bar items are built as **unordered list** into the HTML using Javascript. Javascript loops through all the sections of the page and create `a` and `li` tags under the navigation's `ul` tag.

## Scrolling to Anchor

When the user clicks on a navigation bar item, the page **scrolls** to the appropriate section on the page.

## Collapsible Sections

When the user clicks on a section's title (`h2`), the section expands to show its content. When an expanded section is clicked on, it **collapses** and only shows the title.

## Back-To-Top Button

When the user scrolls below the page fold, a **back-to-top button** appears on the bottom-right corner. When clicked, the page scrolls all the way to the top.

## Highlighting

These are the highlighting features included:

### Sections Active State

When the user hovers over a section, the **section's background changes** to gradient red. When the mouse is out of the section (`h2`), it goes back to its original background color.

### Active State Navigation

When the user hovers over a section, the corresponding navigation bar item is also highlighted (**active state** is added to change background of the item).
