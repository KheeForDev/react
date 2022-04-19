![react](https://user-images.githubusercontent.com/52060358/163780980-aa0a6b4c-283e-426f-977d-6464a8c4d1b9.png)

# What is React
It is a JavaScript library for building user interfaces based on UI components.

# Features of React
1. JavaScript XML or JSX
    - An extension to ECMAScript (JavaScript standard) with the purpose of designing a more concise and easy-to-understand syntax for building DOM tree structures and attributes
    - Can write HTML structures in the same file as JavaScript code.
        - JSX is closer to JavaScript than to HTML, React DOM uses **camelCase property naming convention** instead of HTML attribute names.
            - For example, **class** becomes **className** in JSX, and **tabindex** becomes **tabIndex**.
    - Easy to define and describe the UI components in React
    - **The Role of Babel in React**
        - JSX should not be implemented directly by browsers, but instead requires a compiler to transform it into ECMAScript
        - A compiler to convert code written in ECMAScript2015+ into backwards compatible version of JavaScript in current and older browsers or environments
2. Virtual Document Object Model (VDOM)
    - What is the Document Object Model (DOM)?
      - DOM (Document Object Model) treats an XML or HTML document as a tree structure in which each node is an object representing a part of the document. 
    - **React's lightweight version of the Real DOM**. Real DOM manipulation is substantially slower than virtual DOM manipulation. When an object's state changes, **Virtual DOM updates only that object in the real DOM rather than all of them**
    - How do Virtual DOM and React DOM interact with each other?
      - When the **state of an object changes in a React application**, VDOM gets updated. It then **compares its previous state and then updates only those objects in the real DOM instead of updating all of the objects**. This makes things move fast, especially when compared to other front-end technologies that have to update each object even if only a single object changes in the web application.
    - How Virtual DOM helps React?
      - React **maintains two Virtual DOM at each time**, one contains the **updated Virtual DOM** and one which is just the **pre-update version of this updated Virtual DOM**. Now it compares the pre-update version with the updated Virtual DOM and **figures out what exactly has changed in the DOM like which components have been changed**. This process of comparing the current Virtual DOM tree with the previous one is **known as diffing**. Once React finds out what exactly has changed then it **updated those objects only, on real DOM**. React uses something called as **batch updates** to update the real DOM. It just mean that the **changes to the real DOM are sent in batches instead of sending any update for a single change in the state of a component**. We have seen that the re-rendering of the UI is the most expensive part and React manages to do this most efficiently by ensuring that the Real DOM receives batch updates to re-render the UI. This entire proces of transforming changes to the real DOM is called **Reconciliation**
3. One-way Data Binding
    - Designed in a manner that follows **unidirectional data flow** or **one-way data binding**.
    - The benefits of one-way data binding give better control throughout the application.
    - If the data flow is in another direction, then it requires additional features. It is because components are supposed to be immutable and the data within them cannot be changed. **Flux** is a pattern that helps to keep your data unidirectional. This makes the application more flexible that leads to increase efficiency
4. Components
    - Components are the building blocks that comprise a React application representing a part of the user interface.
    - Each component has its own logic and controls.
    - Components can be reusable which help to maintain the code when working on larger scale projects.
5. Performance
    - React uses virtual DOM and updates only the modified parts. So, this makes the DOM to run faster. DOM executes in memory so we can create separate components which makes the DOM run faster.
6. Extension
    - Has many extensions that can use to create full-fledged UI applications.
      - React Native supports mobile app development
      - Redux to manage and centralizing application state
