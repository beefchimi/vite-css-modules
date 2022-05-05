*:where(:not(iframe, canvas, img, svg, video):not(svg *, symbol *)) {
  all: unset;
  display: revert;
}

:where([hidden]) {
  display: none;
}

///
/// Foundation

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  font-family: sans-serif;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

///
/// Media Elements

img,
svg,
canvas,
picture,
video {
  display: block;
  max-width: 100%;
}

///
/// Form Elements

:where([contenteditable]) {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
  overflow-wrap: break-word;
  -webkit-line-break: after-white-space;
}

:where([draggable='true']) {
  -webkit-user-drag: element;
}

::placeholder {
  all: unset;
}

input,
button,
textarea,
select {
  font: inherit;
}

textarea {
  white-space: revert;
}

meter {
  -webkit-appearance: revert;
  appearance: revert;
}

///
/// Interactive Elements

a,
button {
  cursor: revert;
}

///
/// Typographic Elements

code {
  font-family: monospace;
}

strong {
  font-weight: 700;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

ol,
ul,
menu {
  list-style: none;
}

table {
  border-collapse: collapse;
}