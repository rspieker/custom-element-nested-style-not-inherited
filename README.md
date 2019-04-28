# Custom Element nested style not inherited

Having a custom element built using Sveltes' component inclusion results in the included component style not being inherited.
This appears to come from the premise that if the main component is a custom element, all components inside it must be custom elements too, whereas this is not fully reflected by the compiled code.

## Description
Event though Nested.svelte is intended for internal use by the Sample component, it _must_ have `<svelte:options tag="..." />` set, otherwise an error is thrown

```
Error: Cannot compile to a custom element without specifying a tag name via options.tag or <svelte:options>
```

(on a side note: `options.tag` will not help to solve this issue, as that leads into [duplicate element registration](https://github.com/sveltejs/svelte/issues/2603))

Judging from the generated source, Nested.svelte is assumed to be used as its own custom element

```
this.shadowRoot.innerHTML = `<style>.nested{color:green}</style>`;
```

In this case, the shadowRoot is never used, as it was rendered as Component by the main Sample.svelte. Tt will still apply the component features other than css (e.g. both the HTML-template and script will be functioning).


## Steps to reproduce

### Clone this repo and build it

```
$ git clone https://github.com/rspieker/custom-element-nested-style-not-inherited.git
$ cd custom-element-nested-style-not-inherited
$ npm run build
```

### See the demos

I was expecting both component.html and element.html to be the same on the main component (Sample) level, they're not.
