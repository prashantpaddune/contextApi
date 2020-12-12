import React,{useState} from "react";
import Context from './context';

const Provider = (props) => {
    const [mission, setMission] = useState({
        name: 'Prash',
        agent: '007',
        accept: 'mission not accepted'
    })

    const [Developers, setDevelopers] = useState({
        Developer1: 'Prash',
        Available: 'Not available',
    })

    return(
        <Context.Provider
            value={{
                data: mission,
                developers: Developers,
                isMissionAccepted: () => {
                    setMission({...mission, accept: 'ACCEPTED'});
                },
                isDeveloperAvailable: () => {
                    setDevelopers({...Developers, Available: 'YES'})
                }
            }}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider;
