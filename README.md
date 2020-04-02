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
    - headings (h1) and p tags are all block
2. Inline box 
    - Does not break onto a new line 
    - Width and height do not apply
    - Padding, margin, and border apply but do not cause other inline boxes to move away from the box
    - a span em strong are all examples of inline

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

# Background

## Background colors 
`background-color` defines the background color on any element in CSS and extends underneath the content and padding box of the element.

## Background images 
`background-image` lets you display an image in the background of an element. Background images are not scaled down when you use them.  

If you add a `background-color` with `background-image`, then the image is displayed on top of the color.

### Background repeat

The `background-repeat` property is used to control the tiling behavior of images. The available values are:

- `no-repeat` — stop the background from repeating altogether.
- `repeat-x` — repeat horizontally.
- `repeat-y` — repeat vertically.
- `repeat` — the default; repeat in both directions.

## Sizing the background image 

Use the `background-size property`, which can take length or percentage values, to size the image to fit inside the background.

- `cover` - browser makes the image just large enough so that it completely covers the box area while maintaining its aspect ratio. In some cases, part of the image may end up outside of the box.
- `contain` - browser makes the image the right size to fit inside the box. You may wind up with gaps on either side of the image if the aspect ration is different from the box.


## Positioning the background image 

`background-position` allows you to choose the position in which the background image appears on the box it is applied to. It uses a coordinate system where the top-left-hand corner of the box is (0, 0) and the box is positioned along the horizontal (x) and the vertical (y) axes.

**Examples:**
```css 
.box { 
  background-image: url(star.png); 
  background-repeat: no-repeat; 
  background-position: top center; 
}
```

```css 
.box { 
  background-image: url(star.png); 
  background-repeat: no-repeat; 
  background-position: 20px 10%; 
}
```

```css 
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px;
}
```

4-value syntax indicates a distance from certain edges of the box. The following is 20px from the top, 10px from the right.

```css
.box { 
  background-image: url(star.png); 
  background-repeat: no-repeat; 
  background-position: top 20px right 10px; 
}
```

## Gradient backgrounds 

Set using the `background-image` property. Here is a gradient generator:

https://cssgradient.io/

## Multiple background images 

Use `background-image` and separate each image with a comma:

```css
background-image: url(image1.png), url(image2.png), url(image3.png), url(image1.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position: 10px 20px,  top right;
```

In the above example, each property matches up with the corresponding property, comma-wise. (Ex pos 1 matches 1, pos. 2 matches with 2, etc). If there are not an equal number of values, then the values cycle back to the beginning. 

## Background attachment

Use `background-attachment` to specify how the image scrolls when the content scrolls. It can have the following values:

- `scroll` - Causes the element's background to scroll when the page is scrolled. In effect, the background is fixed to the same position on the page, so it scrolls as the page scrolls. 
- `fixed` - Fixes the element's background to the viewport, so it doesn't scroll when the page or element content is scrolled. The image stays in the same place the entire time. 
- `local` - Fixes the background to the element it is set on, so when ou scroll the element, the background scrolls with it. 

## Background shorthand property
 
 This shorthand lets you set all the different properties at once. If you are using multiple backgrounds, separate the properties for each background with a comma. 

 Shorthand rules:
 1. A `background-color` may only be specified after the final comma.
 2. The value for `background-size` may only be included immediately after `background-position`, separated with the '/' character, like this: center/80%.


 # Borders

 #### Shorthand 
 ```css 
.box { 
  border: 1px solid black; 
}
 ```

 #### Individual properties for shorthand

```css
.box { 
  border-width: 1px; 
  border-style: solid; 
  border-color: black; 
} 
```

You can also use `border-top-width`, etc, to get more granular. 

## Rounded corners

Use `border-radius` to created rounded corners. You can pass 2 lengths or percentages as the value: the first defines the horizontal radius, the second the vertical radius. Usually, you pass only one value.

```css
.box { 
  border-radius: 10px; 
} 
```
Or set each corner:
```css
.box { 
  border-top-right-radius: 1em 10%; 
} 
```

# Handling different text directions

Different writing directionalities are called **writing modes**.

The `writing-mode` property lets us switch from one writing mode to another.

```css
h1 {
  writing-mode: vertical-rl;
}
```

There are 3 positions for writing-mode:
1. `horizontal-tb`: Top-to-bottom block flow direction. Sentences run horizontally.
2. `vertical-rl`: Right-to-left block flow direction. Sentences run vertically.
3. `vertical-lr`: Left-to-right block flow direction. Sentences run vertically.

Blocks are displayed only from the top to the bottom of the page if you are using a writing mode that displays text horizontally, such as English. 

#### When you switch the writing mode, you are changing which direction is block and which is inline.

#### So, the **block dimension** is always the direction bolcks are displayed on the page in the writing mode in use.

#### Inline direction is always the direction the sentence flows. 

### Logical properties

When we write in different directions, we want to swap out the standard `width` and `height` with something that is more closely tied to the direction that the text is flowing. So, now we have **logical** or **flow-relative** versions.

| Original  | Logical |
|:-------------|:--------|
| `width` | `inline-size` |
| `height` | `block-size` |
|`margin-top`  | `margin-block-start` |
| `padding-left` | `padding-inline-start` |
| `border-bottom` | `border-block-end` |
| | |
| | |
|`top` | `block-start` |
|`right` | `inline-end` |
| `bottom` | `block-end` |
| `left` | `inline-start` |

# Overflowing content

Overflow is what happens when there is too much content to be contained comfortably inside a box.

## Overflow property 

`overflow` is how you take control of an element's overflow and tell the browser how you want it to behave. The default value is `visible`.

- To crop overflowed content, use `overflow: hidden`.
- To add scrollbars, use `overflow: scroll`.
- To scroll only on the y-axis, use `overflow-y: scroll` 
- To scroll only on the x-axis, use `overflow-x: scroll` **NOT RECOMMENDED**
- To have the browser decide about scrollbars, use `overflow: auto`

# Values and units

## RGB
RGBA - the `A` is opacity.

## HSL and HSLA values
Not well-supported 
Accepts hue, saturation, and lightness values.


https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS

# Sizing items

**Intrinsic size** is when the size comes from the image itself.
**Extrinsic size** is when a size is given to an element.

## Using percentages
You need to be aware of what it is a percentage of - it may be a percentage of the parent container.

### Percentage margins and padding 
When you use margin and padding set in percentages, the value is calculated from the **inline size** - the width, when working in horizontal language. If you set the margins and padding to 10%, then you have equal sized margins and padding all around the box. 

### min- and max- sizes 

`min-height` - if you have a box that might contain a variable amount of content, and you always want it to be at least a certain height
`max-width` - use to cause images to scale down if there is not enough space to display them at their intrinsic width, making sure they don't become larger than that width.
- For example, if you set `width: 100%` on an image, and its instrinsic width was smaller than its container, the image would be forced to stretch and become larger and then be more pixellated. So, use `max-width` to make sure the image stops at 100% of its size.
- This is making images **responsive**

### Viewport units

The viewport is the visible area of your page in the browser that you are using to view a site. It also has a size.

`vw` - viewport width
`vh` - viewport height

Viewport settings are relativea and change when you change the size of the viewport.

`1vw` = 1% of the viewport width

# Images, media, and form elements 

Images and video are **replaced elements** - this means that CSS cannot affect their internal layout. They also have **aspect ratio**, which is a size in both horizontal (x) and vertical (y) dimensions, and will be displayed using the intrinsic dimensions by default.

`object-fit` - size an image so that it completely covers a box. 

The following example sizes an image down to fit:
```css 
.cover {
  object-fit: cover;
}
```

## Form elements 


 ```css
input[type="text"],
input[type="email"] {
  border: 2px solid #000;
  margin: 0 0 1em 0;
  padding: 10px;
  width: 100%;
}

input[type="submit"] {
  border: 3px solid #333;
  background-color: #999;
  border-radius: 5px;
  padding: 10px 2em;
  font-weight: bold;
  color: #fff;
}

input[type="submit"]:hover {
  background-color: #333;
}
 ```

### Setting inheritance on your forms for all browsers

Some browsers do not inherit font styling by default. Set the following in the CSS to make sure it works:

```css
button, 
input, 
select, 
textarea { 
font-family : inherit; 
font-size : 100%; 
} 
```

### Setting box-sizing on your forms for all browsers

Some browsers do not inherit box-styling by default. Set the following in the CSS to make sure it works:

```css
button, 
input, 
select, 
textarea {  
  box-sizing: border-box; 
  padding: 0;
  margin: 0; 
}
```

### Textarea settings on your forms for all browsers

Use this setting to stop IE from showing a scrollbar when there is no need for one
```css
textarea {
  overflow: auto;
}
```

## Final form settings
```css
button, 
input, 
select, 
textarea { 
  font-family: inherit; 
  font-size: 100%; 
  box-sizing: border-box; 
  padding: 0; margin: 0; 
} 

textarea { 
  overflow: auto; 
}
```
# Styling tables

`table-layout: fixed` - set to `fixed` bc it usually makes the table behave a bit more predictably by default. This allows you to size your columns according to th ewidth of their headings, and then deal with their content as appropriate. 

`border-collapse: collapse` - standard best practice. When you set borders on table elements, they will all have spacing between them. `border-collapse` gets rid of the spacing. 

`border` - put one around the whole table. 

`padding` - put some on the th and td elements of the table.

## Table styling tips

- Use percentages to make the design more responsive 
- Use `table-layout: fixed` to create a more predictable table layout that allows you to easily set column widths by setting `width` on their headings
- Use `border-collapse: collapse` to make the borders collapse into each other
- Use `thead`, `tbody`, and `tfoot` to break up your table into logical chunks and provide extra opportunities to apply CSS to
- Use zebra striping to make alternative rows easier to read
- Use `text-align` to line up you `th` and `td` text to make things neater
- `vertical-align: top` is good for placing header rows at the top of the box 

# Debugging your CSS

## DOM vs view source 

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS

# Organizing your CMS

```css
/* || GENERAL STYLES */

body { ... }

h1, h2, h3, h4 { ... }

ul { ... }

blockquote { ... }

/* || UTILITIES */
A few things that you want to apply to a lot of different elements
.nobullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* || SITEWIDE */
Basic page layout, etc.
.main-nav { ... }

.logo { ... }

/* || STORE PAGES */
This is for the specific things

.product-listing { ... }

.product-box { ... }
...
```

## OOCSS (Object Oriented CSS)

Nicole Sullivan https://github.com/stubbornella/oocss/wiki

## Defining variables

```css
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

## Design plan

https://www.lauraleeflores.com/design/design-process

# Styling text

## 2 categories of text styling properties
1. Font styles - What font, how it is applied, how big it is, bold, italic, etc
2. Text layout styles - Spacing and other layout features of the text, how it is aligned in the box

## Fonts

### Color
Use for the color of the text, underline and overline
### font-family: arial
Use this to specify a font or list of fonts for the browser to apply to the selected items
#### Web-safe fonts:
- Arial
- Courier new
- Georgia
- Times New Roman
- Trebuchet MS 
- Verdana 

Use a font stack since you can't guarantee the availability of some fonts. Its a series of font fallbacks:
```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```
### Font size
#### px
The number of pixels high that you want the font to be 
#### em
Equal to the font size set on the parent element of the current element we are styling
#### rem
Like `em`, but 1 `rem` is equal to the font size set on the root element of the document, not the parent element.

`font-style` - turns italic on and off  
`font-weight` - Sets how bold the text is  
`text-transform` - allows you to set your font to be transformed  
`text-decoration` - sets/unsets decorations on font, like underline, overline, line-through  
`text-shadow: 4px 4px 5px red;` - applies drop shadow. Use px most often  
`text-align` - controls how the text is aligned with its containing content box. Choose left, right, center, or justify (spreads the text out)  
`line-height` - sets the height of each line of text. Recommended between 1.5 - 2   

### Font shorthand

```css
font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
```

# Styling lists

Make sure that lists keep the same horizontal and vertical spacing as the surrounding text. 

## List-specific styles
- `list-style-type`: Sets the bullets to use for the list
```css
ol {
  list-style-type: upper-roman;
}
```
- `list-style-position`: Sets whether the bullets appear inside the list items, or outside them before the start of each item.
```css
ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
```
- `list-style-image`: Add a custom image for the bullet 
```css
ul {
  list-style-image: url(star.svg);
}
```

### Finished example

```css
ul {
  padding-left: 2rem;
  list-style-type: none;
}

ul li {
  padding-left: 2rem;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

- Set the padding-left of the ul down from the default 40px to 20px, then set the same amount on the list items. This is so that overall the list items are still lined up with the order list items and the description list descriptions, but the list items have some padding for the background images to sit inside. If we didn't do this, the background images would overlap with the list item text, which would look messy.
- Set the list-style-type to none, so that no bullet appears by default. We're going to use background properties to handle the bullets instead.
- Inserted a bullet onto each unordered list item
  - `background-image`: This references the path to the image file you want to use as the bullet.
  - `background-position`: This defines where in the background of the selected element the image will appear — in this case we are saying 0 0, which means the bullet will appear in the very top left of each list item.
  - `background-size`: This sets the size of the background image. We ideally want the bullets to be the same size as the list items (or very slightly smaller or larger). We are using a size of 1.6rem (16px), which fits very nicely with the 20px padding we've allowed for the bullet to sit inside — 16px plus 4px of space between the bullet and the list item text works well.
  - `background-repeat`: By default, background images repeat until they fill up the available background space. We only want one copy of the image inserted in each case, so we set this to a value of no-repeat.

### List style shorthand

Replace this:
```css
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

with this:
```css
ul {
  list-style: square url(example.png) inside;
}
```

## Controlling list counting

Change what number the list starts at with an attribute in the ol or ul tag. Also, use `value` to set your list items to a specific numeral:

<ol start="4">
  <li value="2">Toast pita, leave to cool, then slice down the edge.</li>
  <li value="4">Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li value="6">Wash and chop the salad.</li>
  <li value="8">Fill pita with salad, hummus, and fried halloumi.</li>
</ol>

Count down with the `reversed`:

<ol start="4" reversed>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>Fry the halloumi in a shallow, non-stick pan, until browned on both sides.</li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>

# Styling links

## Link states
- `a:default` link (unvisited) : Default state for a link
- `a:visited` visited: A link when it has already been visited
- `a:hover` hover: A link when it is being hovered over
- `a:focus` focus: A link when it has been focused (when it has been moved to by tabbing or with the HTMLElement.focus()). This is a pseudo-class
- `a:active` active: A link when it is being clicked on (activated)

## Typical link rules

**NOTE**: The order is important because each rule builds on the last one.

```css
body {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437A16;
}

a:focus {
  border-bottom: 1px solid; /* used instead or text-decoration for the underline */
  background: #BAE498;
}

a:hover {
  border-bottom: 1px solid;     
  background: #CDFEAA;
}

a:active {
  background: #265301;
  color: #CDFEAA;
}
```

## Including icons on links

```css
a[href*="http"] { /* add an icon to a link using background shorthand */
    background: url('https://mdn.mozillademos.org/files/12982/external-link-52.png') no-repeat 100% 0;
    background-size: 16px 16px;
    padding-right: 19px;
}
```

## Styling links as buttons

```css
body, html {
    margin: 0;
    font-family: sans-serif;
}
```
The following rule removes padding from the ul element and sets its width to span 100% of the outer container (the body, in this case)
```css
ul {
    padding: 0;
    width: 100%;
}
```
li elements are normally block. To create a horizontal list, you have to change it to inline.
```css
li {
    display: inline;
}
```

Next rule:
- turn off `text-decoration` and `outline`
- `display: inline-block`. li elements are inline by default. We don't want them to have their own lines (like they would using `block`), but we do want to be able to size them. `inline-block` lets us do that.
- `width`, `margin-right` are all sizing. I do not understand how this works. look it up again 
https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links
```css
a {
    outline: none;
    text-decoration: none;
    display: inline-block;
    width: 19.5%;
    margin-right: 0.625%;
    text-align: center;
    line-height: 3;
    color: black;
}

li:last-child a {
    margin-right: 0;
}

a:link, a:visited, a:focus {
    background: yellow;
}

a:hover {
    background: orange;
}

a:active {
    background: red;
    color: white;
}
```

# Web fonts

## Font families

Add this to the CSS to make the browser go through a list of fonts and apply whichever work with that browser.

```css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

## Web fonts
Allow you to specify font files to be downloaded along with your websites as it is accessed.

```css 
@font-face {
  font-family: "myFont";
  src: url("myFont.woff");
}

/* Then, specify the font in a font family rule */

html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```

### Free fonts
https://www.fontsquirrel.com/
https://www.dafont.com/
https://everythingfonts.com/

### Web-font generator
https://www.fontsquirrel.com/tools/webfont-generator

**TTF** - True Type Fonts
**OTF** - Open Type Fonts

## Online font service

### Google fonts
https://fonts.google.com/

### Explaining @font-face

```css
@font-face {
  font-family: 'ciclefina';
  src: url('fonts/cicle_fina-webfont.eot');
  src: url('fonts/cicle_fina-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/cicle_fina-webfont.woff2') format('woff2'),
         url('fonts/cicle_fina-webfont.woff') format('woff'),
         url('fonts/cicle_fina-webfont.ttf') format('truetype'),
         url('fonts/cicle_fina-webfont.svg#ciclefina') format('svg');
  font-weight: normal;
  font-style: normal;
}
```
- `font-family` The name that you want to refer to the font as. You can put anything you want here, just be consistent with using it in the CSS 
- `src` Specify the paths to the font files to be inmported into your CSS, and then the format for each font file
- `font-weight`, `font-style` specify the weight and whether the font is italic or not.

# CSS layout

CSS page layout techniques let us control where elements are positioned relative to their default position in normal layout flow, the other elements around them, their parent container, or the main viewport/window.

## Normal flow

This is how the browser lays out HTML pages bny default, with nothing done to control it. You should always check this first so that you know if you have good structure. 

### Block elements

Elements that appear one below the other. By default, these take up 100% of the width of its parent element, and are as tall as its content.


### Inline elements

Elements that appear beside each other. By default, they are as tall as their content and as wide as their content.

You can't set width or height on inline elements. If you want to set `width` or `height` on an inline element, you have to change its display with either `display: block` or `display: inline-block`. 

### CSS methods that change how elements are laid out
`display` property: Following values change how elements behave in normal flow:
  - `block`
  - `inline`
  - `inline-block`
Can also switch on `CSS Grid` and `Flexbox`.  

`float`: Causes block level elements to wrap alongside one side of an element, like the way images sometimes have text floating around them in magazine layouts.

`position`: Allows you to precisely control the placement of boxes inside other boxes. `static` is the default in normal flow.

`display:table`: you can use features desinged for styling the parts of an HTML table on non-table elements.

`Multi-column layout` properties can cause the content of a block to layout in columns, like a newspaper.

## The display property

The main methods of achieving page layout in CSS are all values of the `display` property. Everything in normal flow has a value of `display`, which is used as the default way that elements they are set on behave. For example, paragraphs display below each other because they are `display:block`.

You can change this. For example, li elements are `display:block` - they display underneath each other. But, you can set them to `display:inline` to make them display one after the other. This means that you can pick HTML elements for their semantic meaning, instead of how they look. You can edit how they look.

## Flexbox

Short for **Flexible Box Layout**, designed to make it easy to lay things out in one dimension, either as a row or a column. Items flex to fill additional space and shrink to fill smaller spaces.  

First, use `display:flex` on the **parent** of the elements that you want to lay out. Then, all its direct children become flex items. 
```css
.wrapper {
  display: flex;
}
```
**NOTE**: Use `display:inline-flex` f you want to layout inline items as flexible boxes. 
```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```
### About the flex model
- **main axis** - the axis that is running in the directin taht the flex items are being laid out. The start and end of this axis are called the **main start** and the **main end**.
- **cross axis** - is the axis running perpendicular to the direction the flex items are being laid out in. The start and end are called the **cross start** and the **cross end**. 
- **flex container** - the parent element that has `display:flex` set on it.
- **flex items** - the items being laid out as flexible boxes.

### Columns or rows?

Use `flex-direction` to change which direction the main axis runs in. It is `row` by default, but use `column` to have the flex items stacked. There is also `row-reverse` and `column-reverse`

### Wrapping 

When you have a fixed amount of width or height in your layout, the children overflow their container, breaking the layout.  

Use `flex-wrap:wrap` to fix this.  

Add `flex: XXXpx` to the flex items to make sure that each flex item is at least XXXpx wide. 

### flex-flow shorthand 

`flex-flow` is shorthand for `flex-direction` and `flex-wrap`. For example:

Replace the following:
```css
flex-direction: row;
flex-wrap: wrap;
```

With this:
```css
flex-flow: row wrap;
```

### Flexible sizing of flex items 

`flex: 1` is a unitless proportion value that dictates how much of the available space along the main axis each flex item takes up. The following example gives the article elements a value of 1, meaning that they all take up an equal amount of the spare space left after things like padding and margin have been set. 

```css
article {
  flex: 1;
}
```

If there are 3 articles,the following rule makes the 3rd article take up twice as much of the available width as the other two:

```css
article:nth-of-type(3) {
  flex: 2;
}
```

The first 2 take up 1/4 of the space each, and the 3rd one takes up 2/4 (1/2) of the space.  

The following defines the flex sizing AND the minimum size of each flex item:

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

### flex: shorthand vs longhand

`flex` is shorthand for the following three values:
1. `flex-grow` - the proportional values discussed above. Ex., `flex: 1`;
2. `flex-shrink` - when flex items are overflowing their container, this specifies how much of the overflowing amount is taken away from each flex item's size to stop them from overflowing
3. `flex-basis` - this is the `200px` in `flex: 1 200px`. 

### Horizontal and vertical alignment

# Toolbars

This is for a div of buttons with no other html tags:

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```
`align-items` controls where the flex items sit on the cross axis. The cross axis runs vertically for English text 
- `stretch` is the default value. It stretches all flex items to fill the parent in the direction of the cross axis. 
- `center` causes the elements to retain their intrinsic elements but be centered along the cross axis 
- `flex-start` and `flex-end` aligns all items at the start and end of the cross axis

To override `align-items`, use `align-self`:

```css
button:first-child {
  align-self: flex-end;
}
```
`justify-content` controls where the flex items sit on the main axis:  
- `flex-start` is default, which makes all the items sit at the start of the main axis   
- `flex-end` makes them sit at the end  
- `center` makes them sit at the center  
- `space-around` distributes all the items evenly along the main axis with a bit of space at both ends   
- `space-between` is the same as `space-around`, except that it doesn't leave space at the end  

## Ordering flex items 

You can change the layout order of flex items without affecting the source order.

```css
button:first-child {
  order: 1;
}
```

This moves the first button to the end of the row of buttons by doing the following:

- by default, all flex items have an order value of 0  
- flex items with higher order values set on them will appear later in the display order than items with lower order values  
- flex items with the same order value appear in their source order. For example, items ordered 2, 1, 1, 0 appear in 4th, 2nd, 3rd, 1st  
  - the 3rd item appears after the 2nd because it has the same source order value and is after it in the source order  

You can use negative values to make items appear earlier than items with 0 set on them:

```css
button:last-child {
  order: -1;
}
```

## Nested flex boxes 

First, set all of the children of the part with the nested HTML to be laid out as flexible boxes:

```css
section {
  display: flex;
}
```

## Complex flexbox CSS file

```css
html {
    font-family: sans-serif;
}

body {
    margin: 0;
}

header {
    background: purple;
    height: 100px;
}

h1 {
    text-align: center;
    color: white;
    line-height: 100px;
    margin: 0;
}



/* Add your flexbox CSS below here */




article {
    padding: 10px;
    margin: 10px;
    background: aqua;
}

section {
    display: flex;
}

article {
    flex: 1 200px;
}

article:nth-of-type(3) {
    flex: 3 200px;
    display: flex;
    flex-flow: column;
}

article:nth-of-type(3) div:first-child {
    flex: 1 100px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
}

button {
    flex: 1 auto;
    margin: 5px;
    font-size: 18px;
    line-height: 1.5;
}
```



There are also properties that can be applied to flex items. They can change the way that the items flex, enabling them to expand or contract to fit available space. 

The following example adds `flex` to all of our child items, with a value of 1. This causes the items to grow and fill the container rather than leaving space at the end.
```css
.wrapper {
    display: flex;
}

.wrapper > div {
    flex: 1;
}
```
```html
<div class="wrapper">
    <div class="box1">One</div>
    <div class="box2">Two</div>
    <div class="box3">Three</div>
</div>
```

## Grid layout 

Flexbox is designed for 1D layouts, but **Grid Layout** is desinged for 2D - lining up things in rows and columns.  
Use `display:grid` to switch on grid layout. 
```css
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px;
    grid-gap: 10px;
}
```
```html
<div class="wrapper">
    <div class="box1">One</div>
    <div class="box2">Two</div>
    <div class="box3">Three</div>
    <div class="box4">Four</div>
    <div class="box5">Five</div>
    <div class="box6">Six</div>
</div>
```

After you have a grid, you can place things on them where you want them, instead of having them placed automatically. `grid-column` and `grid-row` help set these:
```css
.wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 100px;
    grid-gap: 10px;
}

.box1 {
    grid-column: 2 / 4;
    grid-row: 1;
}

.box2 {
    grid-column: 1;
    grid-row: 1 / 3;
}

.box3 {
    grid-row: 2;
    grid-column: 3;
}
```
```html
<div class="wrapper">
    <div class="box1">One</div>
    <div class="box2">Two</div>
    <div class="box3">Three</div>
</div>
```

## Floats 

Floating changes the behavior of the element and all the block-level elements that follow it in normal flow. The element is moved left or right and removed from normal flow, and the other elements surround the floated item.

4 possible values:
- `left`: floats item to the left
- `right`: floats item to the right
- `none`: default, no floating
- `inherit`: the value of the `flaot` property should be inherited from its parent element 

## Positioning techniques

Allows you to move an element from where it would normally be placed into another location. This is more about fine-tuning things. Understanding position helps you unerstand normal flow, and what it means to take an item out of normal flow. 

5 types of positioning:
- **Static positioning**: default for every element - puts element in normal position
- **Relative positioning**: lets you modify an elements position relative to its position in normal flow. It can overlap with other elements. 
- **Absolute positioning**: moves an element out of the normal flow like it is sitting in its own layer. Then, you fix the position relative to the edges of the pages html element.  
- **Fixed positioning**: Similar to **absolute positioning**, except it fixes an element relative to the browser viewport instead of another element. Good for nav menus. 
- **Sticky positioning**: it is static until it is in the viewport, then it is fixed in the screen. 

## Table layout

Old method that people used before Flexbox. Should be considered legacy.

## Multi-column layout

Create a column layout. Use one of the following to create this layout:
- `column-count`: Tells the browser how many columns you want to have 
- `column-width`: Tells the browser to fill the container with as many columns of at least that width.