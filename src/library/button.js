import El from "./EG";
const button = ({element = "button" , child})=>{
    return(El({
        element:element,
        className: "border-2 rounded-3xl px-4 py-1 flex items-center",
        child:child
    }))
}
export default button


