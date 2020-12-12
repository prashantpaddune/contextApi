import React from "react";
import Context from "../store/context";

const MissionDetails = () => {
    return(
        <Context.Consumer>
            {
                (context) => (
                    <>
                        <h1>Agent Information</h1>
                        <p>Name: {context.data.name}</p>
                        <p>Mission: {context.data.accept}</p>
                        <button onClick={() => context.isMissionAccepted()}>Click to Accept</button>
                    </>
                )
            }
        </Context.Consumer>
    )
}

export default MissionDetails;
