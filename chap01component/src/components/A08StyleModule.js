
import React from 'react';

//Module 방식이라 imp로 가져온다.
import one from './css/A02Style1.module.css';
import two from './css/A02Style2.module.css';

function A02StyleModule() {
    return (
        <div>
            <h3 className={one.title}>A02 Style <span>Module</span> Component</h3>
            {/* 이어서 쓰려면 `` 로 씀 */}
            <h3 className={`${two.title} ${two.reverse}`}>A02 Style Module Component</h3>
            {/* 혹은 배열로 씀 */}
            <h3 className={[two.title, two.reverse].join(' ')}>A02 Style Module Component</h3>
            {/* [two.title, two.reverse] => [.title .revers]랑 같은 말. */}
        </div>
    );
}

export default A02StyleModule;
