import React from 'react';

export const Login = ({ nextUrl }) => (
    <div id="login">
        <script>
        </script>
        <form>
            <fieldset>
                <label>Username: </label>
                <input type="text"/>
            </fieldset>
            <fieldset>
                <label>Password: </label>
                <input type="password"/>
            </fieldset>
            <input type="submit" onSubmit={c => {
                console.log('submitted');
            }}/>
        </form>
    </div>
);
