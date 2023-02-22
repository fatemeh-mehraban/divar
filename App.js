
import El from "./src/library/EG";
import header from "./src/components/header/header";
import filter from "./src/components/header/filter";
import sectionmain from "./src/container/sectionmain";


 const App =()=>{
   const app = El({
      element:'div',
      child:[header(), filter() , sectionmain()]
      })
      
      return app
      
    
   }
 export default App;