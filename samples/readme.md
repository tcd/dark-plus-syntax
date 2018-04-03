# Web Animations API

<!-- TOC -->

- [Web Animations API](#web-animations-api)
    - [Why?](#why)
    - [What?](#what)
        - [Benifits](#benifits)
    - [How](#how)
        - [Browser process for applying changes:](#browser-process-for-applying-changes)
        - [Built-in Easing Functions:](#built-in-easing-functions)
    - [Additional Resources](#additional-resources)
        - [Basic Example:](#basic-example)

<!-- /TOC -->

## Why?
1. Users expect it.
2. Enhances the user's experience. 
  - Provides an extra dimension of communication.
3. Can provide joy & personality.

## What?
- The **Web Animations API** is a standardized JavaScript API baked into browsers for animating DOM elements.
- Write animation logic in JavaScript with the performance of CSS by running on the GPU

### Benifits
- Performant animations using the GPU
- Dynamic animations with JavaScript
- Easy playback control
  - Pause, Rewind, Skip, etc.
- Promise-based (Chainable)
- No externam dependencies.
- Fits perfectly in a componentized architecture.

## How

### Browser process for applying changes:
1. Calculate Style
2. Generate geometry & position (**Layout**)
  - `left`, `right`, `top`, `bottom`, `margin`, `padding`, `width`, `height`
3. Paint elements onto layers (**Paint**)
  - `color`, `background`, `box-shadow`, `border-radius`, `background-size`
4. Draw layers on the screen (**Composite**)
  - `Opacity`
  - `Transform`: `Position`, `Scale`, `Translate`, & `Rotation`

### Built-in Easing Functions:
- `ease` (Default)
- `linear`
- `ease-in`
- `ease-out`
- `ease-in-out`
- `step-start`
- `step-end`

---

## Additional Resources
- https://csstriggers.com/
- [Mozilla - Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- https://bitsofco.de/css-animations-vs-the-web-animations-api/
- [High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
- https://developers.google.com/web/fundamentals/design-and-ux/animations/animations-and-performance
- [Cubic Bezier](http://cubic-bezier.com/#.17,.67,.83,.67)
- [The Basics of Easing](https://developers.google.com/web/fundamentals/design-and-ux/animations/the-basics-of-easing)

### Basic Example:
```JavaScript
/* element.animate(keyframes, options); */

const $box = document.getElementById("box");

$box.animate([
  { transform: "translateX(0)" },   // Start state
  { transform: "translateX(100%)" } // End state]
], {
  duration: 1000,   // How long
  iterations: 1,    // How many times
  fill: "forwards", // Leave the box in the end state after animation
});

```

> While the other keywords require that all subschemas are valid against all child instances to which they apply.
> Several keywords determine which subschemas are applied to array items, object property values, and object property names. 
> They are: "items", "additionalItems", "contains", "properties", "patternProperties", "additionalProperties", and "propertyNames". 
> The "contains" keyword only requires its subschema to be valid against at least one child instance, 
> while the other keywords require that all subschemas are valid against all child instances to which they apply.
