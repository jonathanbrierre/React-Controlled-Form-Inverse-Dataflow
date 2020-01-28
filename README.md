# Controlled Form and Inverse Data Flow

In React, information can be passed from one component to one component.

The simplest case is when a parent component is passing information down to one of its children - the parent passes information down via the `props` object.

Sometimes, however, information needs to be passed up from a child to a parent. This is called "Inverse Data Flow" in React and Inverse Data Flow is important because that is how sibling components communicate with each other in React.

In addition to Inverse Data Flow, controlled forms is another key aspect of React. Controlling your forms means that the values of your inputs are held in a component's state. _Keep in mind that this does not mean that the state needs to be in the same component as where the form is rendered._ Using the idea of Inverse Data Flow, sometimes the state that controls a form need to be in the parent component.

*IMPORTANT IDEA:* All controlled forms in React need to have at least two attributes: a `onChange` and a `value` and where the values of those two attributes come from will *always* need to be the same.


## Deliverables

 This lab is designed to test your knowledge of Inverse Data Flow as well controlled forms. The hierarchy of your application is the following:

 ```
         App
        |   |
        |   |
     ---     ---
    |           |
    |           |
  FormInput  DisplayedPTag
 ```

The end result of this lab is to have the user type something in the FormInput component and have the DisplayedPTag render what's being typed.

Consider how the two sibling components (DisplayedPTag and FormInput) need to communicate with each other. Since they're siblings, the App component is critical in passing/receiving information from the two components. Think about what that means in terms of state. Where should that live? How should that state change?

Here is a demonstration of how the App should function:

![Demonstration](Demonstration.gif)

The things you need to change in the code are denoted by the phrase: "You will need to change this in code."
