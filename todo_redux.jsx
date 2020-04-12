import React from 'react';
import ReactDOM from 'react-dom';

function Content(){
    return(
        <div>
            <h1>Todos App</h1>
        </div>
    );
}

document.addEventListener("DOMContentLoaded", ()=> {
    ReactDOM.render(<Content/>, document.getElementById("root"));
});