# CSS

## Reference
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

```css
h1 {
    color: red;
    font-size: 5em;
}
```

#### No bullets on lists
```css
li {
  list-style-type: none;
}
```

#### Selecting a class
```css
.class-name {
    
}
```
#### Specify the element
```css
li.special {

}
```

#### Descendant combinator
Selects any element that is inside another element
```css
li em {
    color: rebeccapurple;
}
```
#### Adjacent sibling combinator
The second element directly follows the first
```css 
h1 + p {
    font-size: 200%;
}
```
### Styling based on state
Change the color of things based on their state. Here is an example of state styling for links:

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}
```

### Selectors
The following are examples of valid selectors:
- h1
- a:link
- .manythings
- #onething
- *
- .box p
- .box p:first-child
- h1, h2, .intro

#### Cascade and Specificity
Cascade is when the selectors are equal. In the following example, the paragraph is blue because it appears later in the style sheet:
```css
p {
  color: red;
}

p {
  color: blue;
}
```

Specificity is when a selector has more specificity than the element selector. In the following example, the .special selector wins:

```css
.special {
    color: red;
}

p {
    color: blue;
}
```

### Functions
calc() function:
```css
.box {
    padding: 10px;
    width: calc(90% - 30px);
    background-color: rebeccapurple;
    color: white;
}
```

rotate(), a type of transform function:
```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn)
}
```

### @rules
Special rules that give CSS instruction on how to behave.

#### @import
Add an additional stylesheet to your main css sheet
```css
@import 'styles2.css';
```

#### @media
Apply CSS only when certain conditions are true (when the screen resolution is above a certain amount, or the screen is wider than a certain width).

In the below CSS, we have a stylesheet that gives the 'body' element a pink background color. However, we then use @media to create a section of our stylesheet that will only be applied in browsers with a viewport wider than 30em. If the browser is wider than 30em then the background color will be blue.
```css
body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

## Shorthands
They allow you to set seeral property values in a single line
- font 
- background 
- padding 
- border 
- margin

In padding and margin, the order is top, right, bottom, left (clockwise from top). The following are equal:
```css 
p {
    padding: 10px 15px 15px 5px;
}

p {
    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 5px;
}
```
And these are equal:
```css
body {
    background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
}

body {
    background-color: red;
    background-image: url(bg-graphic.png);
    background-position: 10px 10px;
    background-repeat: repeat-x;
    background-attachment: fixed;
}
```

# Building blocks

## Cascade and inheritance

### Specificity
How the browser decides which rule applies if multiple rules have different selectors but could still apply to the same element.

```css
.main-heading { 
    color: red; 
}
        
h1 { 
    color: blue; 
}
```

### Inheritance
Some CSS property values set on parent elements are inherited by their child elements. In the following example, any span inside the body would normally be blue if you didn't create a different setting.   
```css
body {
    color: blue;
}

span {
    color: black;
}
```

#### Controlling inheritance

**inherit** - Sets the property value applied to a selected element to be the same as that of its parent element. Turns on inheritance.

**initial** - Sets the property value applied to a slected element to be the same as the value set for that property on that element in the browser's default style sheet. If not value is set by the browser, it is set to **inherit**. 

**unset** - Resets the property to its natural value. Use **all: unset;** to undo changes in the CSS and get back to a known starting point.
```css
.starting-point {
    all: unset;
}
```

#### Scoring specificity
**Thousands** Score one in this column if the declaration is inside a style attribute, aka inline styles. Such declarations don't have selectors, so their specificity is always simply 1000.

**Hundreds** Score one in this column for each ID selector contained inside the overall selector.

**Tens** Score one in this column for each class selector, attribute selector, or pseudo-class contained inside the overall selector.

**Ones** Score one in this column for each element selector or pseudo-element contained inside the overall selector.

#### !important
Overrides all CSS rules in your sheet and make a particular property and value the most specific thing.

## Selectors

If you combine selectors and one is invalid, the entire rule is ignored.

```css
h1, ..special { 
  color: blue; 
}
```

### Types of selectors

### HTML element
```css
h1 { }
```

### Class selector
```css
.box { }
```

### ID selector
```css
#unique { }
```

### Attribute selector

#### Presence and value selectors
```css
a[title] { }

a[href="https://example.com"]

p[class~="special"]

div[lang|="zh"]
```

#### Substring matching selectors

```css
li[class^="box-"]

li[class$="-box"]

li[class*="box"]
```


```css
a[href="https://example.com"]
```

### Pseudo-class
These style certain states of an element 

```css
a:hover { }

article p:first-child {
    font-size: 120%;
    font-weight: bold;
}

article p:last-child {
    font-weight: bold;
}
```

### Pseudo-elements
Select a certain part of the element rather than the element itself

```css
article p::first-line {
    font-size: 120%;
    font-weight: bold;
} 
```

### Combining pseudo-classes and pseudo-elements
The following example bolds the first line of the first paragraph of the article element. 
```css 
article p:first-child::first-line { 
  font-size: 120%; 
  font-weight: bold; 
}

.box::after {
    content: " ➥"
}

```

### Combinators
Combine other selectors in order to target elements within documents. The following example uses the child combinator `>` to select paragraphs that are direct children of article elements.

```css
article > p { }
```

#### Child combinator

This example selects only `li`s that are direct children of a `ul`. 

```css
ul > li {
    border-top: 5px solid red;
} 
```

#### Adjacent sibling

Used to select something if it is right next to another element at the same level of the hierarchy. The following example styles any h1 and p elements that are right next to each other. 

```css
h1 + p {
    font-weight: bold;
    background-color: #333;
    color: #fff;
    padding: .5em;
} 
```

#### General sibling 

Select siblings of an element even if they are not directly adjacent. 

```css
h1 ~ p {
    font-weight: bold;
    background-color: #333;
    color: #fff;
    padding: .5em;
}
```

# Box model

2 types
1. Block box
    - Fills up all space available in its container
    - Will break onto a new line 
    - width and height are respected
    - Padding, margin, and border cause other elements to be pushed away from the box
    - headings (<h1>) and <p> tags are all block
2. Inline box 
    - Does not break onto a new line 
    - Width and height do not apply
    - Padding, margin, and border apply but do not cause other inline boxes to move away from the box
    - <a> <span> <em> <strong> are all examples of inline

More info: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow

## Inner and outer display types
- **Outer** - details whether the box is block or inline
- **Inline** - dictates how elements inside that box are laid out.
  - By default, they are laid out in normal flow
  - Can change the inner display type by using `display` values like `flex`. If you set `display: flex` on an element, the outer display type is `block` but the inner display type is changed to `flex`. Any direct children of this box are `flex` too. 

### IMPORTANT
Changing the value of the `display` property can change whether the outer display type of a box is block or inline. This changes the way it displays alongside other elements in the layout.

## What is the box model

The model defines how the different parts of a box - **margin, border, padding, and content** - work together to create a box that you can see on the page. 

- This applies to block boxes all the time.
- Inline boxes use only some of this behavior 
- There is also a standard and alternate box model

## Parts of a box
- **Content box**. The area where your text is displayed. Sized with `height` and `width` and other properties.
- **Padding box**. Padding sits around the content box like whitespace. Sized with `padding` and related properties. 
- **Border box**. Wraps the content and the padding. Sized with `border` and related properties. 
- **Margin box**. Outermost layer, wraps the content, padding, and border as whitespace between this box and other elements. Sized with `margin` and other properties.

## Standard CSS box model

**NOTE**: In the standard CSS box model, the `width` and `height` apply only to the content box.
```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

## Alternative box model

**NOTE**: In the alternative CSS box model, the `width` and `height` apply to the entire box, including content box, padding box, and border. 

Browsers use the standard box model. To tell the browser to use the alternative for an individual box, include the following rule:
```css
.box { 
  box-sizing: border-box; 
} 
```

#### TRICK: To tell the browser to use alternative box model for all of the HTML, set box-sizing on the <html> element, then set all elemments to inherit that value.

```css 
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

More tips: https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/

# Margins, padding, and borders 

## Margin

`margin` property controls all of the margins on the element at once. The following allow more control:
- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

## Margin collapsing 

If you hae two elements whose margins touch, and both margins are positive, those margins will combine to become one margin. The new margin is the size of the largest individual margin.

If one or both margins are negative, the amount of negative value will subtract from the total.

For example, if one box has a margin-bottom of 50px, and the box below it has a margin-top of 30px, the margins collapse to 50px instead of a total of 80px. One of the margins must go into the negative to close the gap between the two.

## Borders

If you're using the standard box model, the border is added to the `width` and `height` of the box. If you are using the alternative, then the size of the border makes the content box smaller as it takes up some of that available `width` and `height`.

### Format:
```css
border: <pixel/em> <style> <color>

Example:
border-top: 5px dotted green;
```

To set the properties of each side individually:

- `border-top`
- `border-right`
- `border-bottom`
- `border-left`

To set the width, style, or color of all sides:

- `border-width`
- `border-style`
- `border-color`

Here are the most granular properties:

- `border-top-width`
- `border-top-style`
- `border-top-color`
- `border-right-width`
- `border-right-style`
- `border-right-color`
- `border-bottom-width`
- `border-bottom-style`
- `border-bottom-color`
- `border-left-width`
- `border-left-style`
- `border-left-color` 

## Padding 

Sits between the border and the content area, and it must be a positive number. You can control it using the `padding` property, or one of the following individual methods:

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

## Box model and inline boxes 

If you use margin, padding, width, height on an inline box, the width and height will be ignored (you cannot set either). The padding, margin, and border are respected but they do not change the relationship of other content to our inline box and can overlap other elements or things nearby.

To get the inline box to respect the width and heigth, use the `display:` property.

## Using display:inline-block

Use `display:inline-block` for the following with inline blocks:
- width and height are respected 
- padding, margin, and border cause other elements to be pushed away from the box.

It does not break into a new line.

Use this when you want a larger target area for a <a display: inline-block> tag. This is used often with navigation bars.