import React, { useCallback, useState } from 'react';

function A09Currency() {
    const [data, setData] = useState({
        qty: 3,
        cost: 5,
        inCurr: 'USD'
    });
    const currencies = ['USD', 'EUR', 'CNY'];
    const rate = { 'USD': 1, 'EUR': 1.35, 'CNY': 6.87 };

    const changeData = useCallback((evt) => {
        setData({ ...data, [evt.target.name]: Number(evt.target.value) });
    }, []); //참조변수 없으므로 의존관계 없음. ..data 풀기만하고 꺼내와서 쓰진 않음. 

    const changeCurr = useCallback((evt) => {
        setData({ ...data, [evt.target.name]: evt.target.value });
    }, []);
    const total = useCallback(() => {
        return currencies.map(item => {
            const value = (data.qty * data.cost * rate[data.inCurr] / rate[item]).toFixed(2);
            return <span key={item}> {item}: {value} </span>;
        }); //data를 꺼내써서 의존관계 필요
    }, [data]);

    return (
        <div>
            <h3>A06 Currency</h3>

            Qty: <input type="text" name="qty" className="form-control"
                value={data.qty} onChange={changeData} />
            Cost: <input type="text" name="cost" className="form-control"
                value={data.cost} onChange={changeData} />

            Country:
            <select className="form-control" name="inCurr"
                value={data.inCurr} onChange={changeCurr}>
                {currencies.map((item) => <option key={item}>{item}</option>)}
            </select>
            <br />

            <div>Total: {data.qty * data.cost}</div>
            <div>Total: {total()}</div>
        </div>
    );
}

export default A09Currency;
