
import React from 'react';

const A02ProductComponent = (props) => {

    const { history } = props;
    function back() {
        history.goBack();
    }
    const forword = () => history.goForward();
    const home = () => history.push('/');
    //location.assign('')과 같은 명령. 
    const assign = (url) => history.push(url);

    return (
        <div>
            <h5>Product Component</h5>
            <div>This is Product Component</div>
            <br />

            <div>
                <button onClick={back}>BACK</button>
                <button onClick={forword}>FORWARD</button>
                <button onClick={home}>HOME</button>
                <button onClick={() => assign('/currency')}>PARAMETER</button>
            </div>
        </div>
    );
};
export default A02ProductComponent;