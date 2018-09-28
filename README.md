SE100-Homework1
========================
## Vue.js - A Progressive JavaScript Framework
### Brief Introduction to Vue.js
Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

An easy way to experience Vue.js is to include it in the HTML file.
```
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
or:
```
<!-- production version, optimized for size and speed -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
npm can be also used to install Vue.js. For more details, please refer to [Vue.js's official page](https://vuejs.org/).
### Features
* Templates

    Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance’s data. All Vue templates are valid HTML that can be parsed by spec-compliant browsers and HTML parsers. Under the hood, Vue compiles the templates into virtual DOM render functions. Combined with the reactivity system, Vue is able to calculate the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.
* Reactivity (响应式)

    One of Vue’s most distinctive features is the unobtrusive reactivity system. Models are just plain JavaScript objects. When you modify them, the view updates. It makes state management very simple and intuitive. Vue provides optimized re-rendering out of the box without you having to do anything. Each component keeps track of its reactive dependencies during its render, so the system knows precisely when to re-render, and which components to re-render.
* Components
    
    Components are one of the most powerful features of Vue. In a large application, it is necessary to divide the whole app into small, self-contained, and often reusable components to make development manageable. Components extend basic HTML elements to encapsulate (封装) reusable code. At a high level, components are custom elements to which the Vue’s compiler attaches behavior. In Vue, a component is essentially a Vue instance with pre-defined options.

* Transitions

    Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM. This includes tools to: 
    
    * automatically apply classes for CSS transitions and animations
    * integrate third-party CSS animation libraries, such as Animate.css
    * use JavaScript to directly manipulate the DOM during transition hooks
    * integrate third-party JavaScript animation libraries, such as Velocity.js

### Advantages and Disadvantages compared with the technology stack before
In this section, I will talk about some personal feelings while learning Vue.js as a beginner.
* Advantages

    * Abstraction

        Compared with the technology stack I had before (html+js), I think Vue.js is at a higher abstract level. It doesn't matter if you don't know how it actually works at low level while using Vue.js. To some extent, it is like a car with a automatic transmission if the former technology stack is a car with a manual transmission. Higher abstraction is essential in application-level programming.
    * Useful wheels

        In Vue.js, many useful features or wheels are integrated, which can accelerate my development process if I can have a full command of it (not yet). For example, the feature 'v-' is a powerful tool, which can save me a lot of codes if I can use it properly.
* Disadvantages

    * Steep learing curve at beginning

        A relatively easy way to use Vue.js is to simply include it in the html file. Even so, it is hard for me to get used to it (compared with raw html+js). If someone install Vue.js using npm and webpack, he might be scared by so many folders and files pre-installed in the project. It takes time to get used to this new technology stack and I am still at this stage.
