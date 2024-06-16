// App is the parent and Student is the child
import Student from './Student.jsx'

function App() 
{
     return(
               <>
               <Student name ="Tekken" age={23} isStudent={true}/> 
               <Student name ="Bankhai" age={21} isStudent={true}/> 
               <Student name ="Goku" age={21} isStudent={false}/> 
               <Student/>
               
               </>
               
     );
}

export default App
