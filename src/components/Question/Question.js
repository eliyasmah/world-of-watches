
import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className="question-section">
            <h4>1. How react works?</h4>
            <p>Ans: React use a declarative paradigm that makes it easier. React designs simple views for each state of application. React will efficiently update and render just the right component when data well be  changes.React make a virtual DOM that basically a DOM tree representation in JS. When need to read or write to the DOM, use the virtual DOM representation of it. Then the virtual DOM will try to find out most efficient way to update the browser’s DOM.</p>
            <h4>2. Difference between props vs state.</h4>
            <p>Ans: State is limited to current component, props can be pass to any component. State is internal and controlled the component itself, on the other hand props are external and controlled by whatever renders the component. Props are used by a component to get data from external environment, states are used to manage the internal environment of a component. State is something like attributes in OOP,props are like parameters. State are mutable,props are immutable. State is the local state of the component which cannot be accessed and modified outside of the component, props make components reusable by giving components the ability to receive data from their parent component.</p>
        </div>
    );
};

export default Question;