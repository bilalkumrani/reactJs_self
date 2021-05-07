/* 

    What is reat?
        - A javascript liberary for building user interfaces.
        - React is not a framework.
        - React knows only one thing that is to create awesome UI.

        History:
        - React was designed by Jordan Walke, a software engineer at facebook.
        - In 2013, React was open sourced at Js conference.


        About React:
        - component based approach
        - React uses declarative approach.
        Declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow.
        - DOM updates are handled gracefully.
        - Reusable code
        - React is designed for speed, speed of implementing the application simplicity and scalablity.



    :::Should Know before using react:::
    - html
    - css
    - javascript
    - ES6 features
    - usage of npm


    Extensions in vs code:
    - Babel javascript -> to highlight react code syntax
    - javaScript(ES6/7) code snippets
    - vscode icons -> for file icons in vscode



    Complete ReactJS Environment Setup:
        1- Install NodeJs
        2- Install vscode
        3- Install React from terminal
            a: npm install -g create-react-app
            b: create-react-app --version
            c: create-react-app <project name>


        :::package.json file:::
        It is used to store the metadata associated with the project as well as store the list of depedency packages.


        :::node_modules folder:::
        It is the repository of the modules/liberary which you are using inside the project, what ever you are importing in your project that module or liberary should be present inside the node_module folder. when you do npm install that time that module or liberary install inside the node_module folder and one entry added in the package.json file.



        :::Intro to JSX:::
        - javascript extension or javascript XML
        - <h1>Hello world</h1> it is not html in render, it is JSX expression
        - If we want to use JSX then react must be imported
        - Babel is modern javascript compiler
        

      :::  React.Fragment  :::
      - To add multiple JSX elements in DOM we can use <React.Fragment> multiple elements here <React.Fragment>
      - <> </> these empty also means React.Fragment so we can also write this
      - if we want to write javascript code inside that html like looking tag we have to use {} braces {variableName} or {4+4} these will be cosidered as javascript
      - we can't use statements inside braces like if conditions etc we can only use expresion which directly returns the values.
      - Template literals are availabele in react we can use -> {` ${fName} ${lName} `}



      :::JSX Attributes:::
      - <a href="gogle.com"> </a> a has href attribute
      - same we use in react


      ::: Reactjs componenets:::
      - First letter should be capital in component file name. eg Heading.jsx
      - Create a function with the same file name in that file
      - return the element you want to return eg: return <h1>my name is bilal</h1>
      - export that function


      :::App.jsx:::
      - we write all the code in the app.jsx file and import all the files / custom components there everything means we create complete page there and in last what we do is just import app.jsx in index.js to show the effect on DOM.



      :::Import and export:::

      export {add, sub, mul, div};

      import {add, sub, mul, div} from './Calc.jsx';

      ::: props :::
      It stands for properties 
      React props are like function arguments in javascript and attributes in HTML
      it gives us power to create our own attributes in html
        - As we create JSX component so the attribute will go to as arguments to that function which return the component
        - eg: there is one card which has some data like name etc so we created its component so we can use it multiple places
        but now the problem is the name and other info written in that card is hardcoded and we want different data in each card
        so here propes come into play we can use it to changed data inside of components.

        function Card(props){
            document.write(props.name)    -> (access like this.)
        }



        ::: Developer tool Debugging and Error handling :::

         -every child propertt should have unique key otherwise it will give warning.
         - goto >> and components you will see all the components here. -> for this first install react developer tool extension in your browser.

         -keys help React identify which element have changed, to give a uniqe identity to everry elelment iside the array, a key is required.


        ::: Array Distructuring :::
        The Distructuring assignment syntax is javascript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.  

        before Es6:-
        let myprolang = ['js','php','c','python','java'];
        var top1 = myprolang[0];
        var top2 = myprolang[1];
        var top3 = myprolang[2];


        after Es6:-
        let [top1,top2,top3,top4,top5] = myprolang;  -> Now 5 varibles are initialized with values of myprolang array.


        ::: React Hooks :::
        - Hooks are new feature introduced in the React 16.8 version.
        - It allows you to use state and other React features without writing a class. Hooks are the functions which "Hook into" React state and lifecycle features from function conponents.
        - It doest work inside classes 
        - Node version 6 or above. NPM version 5.2 or above.
        - one of the its functions is useState() it helps in changing the state dynamically actually it re render that component so the current state value can be shown on the dom.

        eg:
        const [muName, setmyname] = useState('bilal')  -> it retunts the array on the [0] index there will be the value and [1] index there will be the function which we call to change the value or change the state.




        -> In react there is two types of components controlled and un-controlled.
            - An input form element whose value is controlled by react is a controlled component.



        ::: FORMS :::
        - HTML form elements works little bit difference other DOM elements in React, because form elements naturaly keep some internal state.












*/