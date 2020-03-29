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