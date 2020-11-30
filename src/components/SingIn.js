import React from 'react'

function SingIn() {

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = e.target.elements;
        console.log(email.value, password.value);
        // pass props to other component
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-field">
                    <button className="btn blue lighent-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    );
};

export default SingIn;