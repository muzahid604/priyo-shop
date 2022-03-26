import React from 'react';
import './Ans.css'
const Ans = () => {
    return (
        <div>
            <div className='ans'>
                <h4>How React work?</h4>
                <p>Our components are made of two main ingredients: state and props. These two ingredients mean we can organise our components in a hierarchical structure that ensures a one-way data flow (via props) so we only have one state.
                    We call this structure a tree, and it allows us to assign responsibility for a state to one component.
                </p>
            </div>
            <div className='ans'>
                <h4>Props vs State</h4>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
        </div>
    );
};

export default Ans;