import React, {useEffect, useState} from "react";

const UnmountTest = () => {

    useEffect(() => {
        console.log("Mount!");

        return () => {
            // Unmount 시점에 실행되게 됨
            console.log("Unmount!");
        }
    }, [])

    return <div>Unmount Testing Component</div>
};

const Lifecycle = () => {

    // const [count, setCount] = useState(0);
    // const [text, setText] = useState("");

    // useEffect(() => {
    //     console.log("Mount!");
    // }, []);

    // useEffect(() => {
    //     console.log("Update");
    // });

    // useEffect(() => {
    //     console.log(`count id update : ${count}`);
    //     if (count > 5) {
    //         alert("count가 5를 초과했습니다 초기화합니다.");
    //         setCount(0);
    //     }
    // }, [count]);

    // useEffect(() => {
    //     console.log(`Text id update : ${text}`);
    // }, [text]);
        // <div>
        //     {count}
        //     <button onClick={() => setCount(count + 1)}>+</button>
        // </div>
        // <div>
        //     <input value={text} onChange={(e) => setText(e.target.value)} />
        // </div>

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);


    return (
        <div style={{ padding: 20 }}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest/>}
        </div>
)};

export default Lifecycle;