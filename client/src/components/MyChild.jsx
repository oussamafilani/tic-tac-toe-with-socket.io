import { useEffect } from "react"

const myCallback = () => console.log("callback");

const MyChild = ({style = {}})=>{

    useEffect(()=> myCallback);

    return <div style = {style}/>


}

export default MyChild;