import React, { useEffect, useState } from "react";


// const TextView = React.memo(({ text }) => {
//     useEffect(() => {
//         console.log(`Update :: Text : ${text}`);
//     })
//     return <div>{text}</div>
// });

// const CountView = React.memo(({ count }) => {
//     useEffect(() => {
//         console.log(`Update :: Count : ${count}`);
//     })
//     return <div>{count}</div>
// });

const CounterA = React.memo(({ count }) => {

    useEffect(() => {
        console.log(`CounterA Upddate - count : ${count}`);
    });

    return <div>{count}</div>
});

const CounterB = ({ obj }) => {

    useEffect(() => {
        console.log(`CounterB Update -count : ${obj.count}`);
    });

    return <div>{obj.count}</div>
};

const areEqual = (pervProps, nextProps) => {
    // return true // 이전 프롭스 현재 프롭스가 같다 => 리렌더링을 일으키지 않게됩니다.
    // return false // 이전 과 현재가 다르다 => 리렌더링을 일으키라.

    // if(pervProps.obj.count === nextProps.obj.count) {
    //     return true;
    // }
    // return false;
    return pervProps.obj.count === nextProps.obj.count;
}

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {

    // const [count, setCount] = useState(1);
    // const [text, setText] = useState("");
    /* <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
    <div>
        <h2>text</h2>
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
    </div> */

    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1,
    });

    return (
        <div style={{ padding: 50 }}>
            <div>
                <h2>Counter A</h2>
                <CounterA count={count} />
                <button onClick={() => setCount(count)}>A button</button>
            </div>
            <div>
                <h2>Counter B</h2>
                <MemoizedCounterB obj={obj} />
                <button
                    onClick={() =>
                        setObj({
                            count: obj.count,
                        })
                    }
                >
                    B button
                </button>
            </div>
        </div>
    );
};

export default OptimizeTest;