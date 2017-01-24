import React from 'react';

export const Login = ({ params: { nextUrl } }) => (
    <div id="login">
        <form>
            <fieldset>
                <label>Username: </label>
                <input id="uname" type="text"/>
            </fieldset>
            <fieldset>
                <label>Password: </label>
                <input id="passwd" type="password"/>
            </fieldset>
            <input type="submit" onClick={e => {
                e.preventDefault();
                const http = new XMLHttpRequest();
                const uname = document.getElementById('uname').value;
                const passwd = document.getElementById('passwd').value;
                http.open('POST', '/login', true);
                http.setRequestHeader('Authorization', `Basic ${btoa(`${uname}:${passwd}`)}`);
                http.send(null);
                http.onreadystatechange = () => {
                    if (http.readyState === XMLHttpRequest.DONE)
                        if (http.status === 401) window.location.reload(true);
                        else if (http.status === 200) window.location.replace(nextUrl || '/');
                };
            }}/>
        </form>
    </div>
);
