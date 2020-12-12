import React from "react";
import Context from "../store/context";

const DeveloperDetails = () => {
    return(
        <Context.Consumer>
            {
                (context) => (
                    <>
                        <h1>Dev Info:</h1>
                        <p>Dev name: {context.developers.Developer1}</p>
                        <p>Available: {context.developers.Available}</p>
                        <button onClick={() => context.isDeveloperAvailable()}>Click to Available</button>
                    </>
                )
            }
        </Context.Consumer>
    )
}

export default DeveloperDetails;
