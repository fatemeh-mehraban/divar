import El from "../library/EG"
import Container from "./container"
import aside from "./aside"
import footer from "./footermobile"
const sectionmain =()=>{
   return(El({
        element:"div",
        className:"w-full h-full lg:flex justify-center lg:pr-34 relative",
        child:[aside(),Container() , footer()]
    })
    )
}
export default sectionmain