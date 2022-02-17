
import React from 'react';

import './css/A01Style.css';
function A01Style() {
    const clzName = 'title color';
    const style = {
        backgroundColor: 'black',
        fontSize: '24pt',
        fontWeight: 'bold',
        padding: '20px',
        color: 'white'
    };
    return (
        <div>
            {/* css 이름으로 참조 */}
            <h3 className='title color'>A01 Style</h3>
            {/* css 변수로 참조 */}
            <h3 className={clzName}>A01 Style</h3>
            {/* style과 변수로 참조 */}
            <h3 style={style}>A01 Style</h3>
            {/* style로 참조 */}
            <h3 style={{
                backgroundColor: 'black',
                fontSize: '24pt',
                fontWeight: 'bold',
                padding: '20px',
                color: 'yellow'
            }}>A01 Style</h3>
        </div>
    );
}

export default A01Style;
