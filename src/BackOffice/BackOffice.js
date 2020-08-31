import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase'


function BackOffice() {

    const [{ user }, dispatch] = useStateValue();

    const history = useHistory();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                //user logged in
                dispatch({
                    type: "SET_USER",
                    user: authUser
                })
            }else{
                //user logged out
                dispatch({
                    type: "SET_USER",
                    user: null
                })
                history.push("/admin")
            }
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const signOut = () => {
        auth.signOut();
        history.push("/admin")
    } 

    console.log('user is : ' + user);

    return (
        <div className="backOffice">
            Back Office

            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}

export default BackOffice
