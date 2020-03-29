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