import React, {  useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addUser ,deleteuser,deleteall} from './counterSlice';
import '../App.css'
export function SignUp(){
    // const counter = useSelector((state) => state.counter.value);

    let {id,value,users} = useSelector((state) => state.counter);  
    //    console.log(counter)  //selecting the value of counter
    const dispatch = useDispatch();
    //  console.log(entries.length)
  // console.log(users)
    let date=new Date();
let time=date.toLocaleTimeString(); 
let newdatw=date.toDateString().slice(0,15);
    // const {count}=useContext(CounterContext);
    const [name,setName]=React.useState("");

    const [timee,setTime]=React.useState(0); 

useEffect( ()=>{
//   console.log(user)
    const interval=   setInterval(()=>{
        setTime(newdatw+" " +time);
     },1000)
   return(()=>{
    clearInterval(interval)
   })
},[timee]);




const handleSubmit=()=>{
 const newId = id + 1;
  console.log(id,value)
  if(id===newId || value===name|| name===''){
    
   window.alert('already')
  }else{
    dispatch(addUser({id:newId,value:name}));
   
  }
}
const handleDelete = (userId) => {
  dispatch(deleteuser({ id: userId }));
};

    // console.log('uasd',count)
    return(
        <div className="App">
            <div className="App-header">

<form className="form">
    
<label style={{justifyContent:'center',alignSelf:'center',marginTop:30}}> Name </label>   
    <input style={{width:'40%',borderRadius:5,justifyContent:'center',alignSelf:'center'}} type="text" /><br/>
    <label > Password </label>   
    <input  style={{width:'40%',borderRadius:5,justifyContent:'center',alignSelf:'center'}}onChange={(e)=>setName(e.target.value)} type="text"/><br/>
    <button style={{width:'45%',alignSelf:'center',margin:20}} onClick={()=>handleSubmit()}  type="button"  >Click</button>  
<p style={{justifyContent:'center',alignSelf:'center',fontSize:14}}>{timee}</p>
<button style={{width:'45%',alignSelf:'center',margin:20}} onClick={()=>dispatch(deleteall())}  type="button"  >Delete all</button>  

{/* <p style={{justifyContent:'center',alignSelf:'center',fontSize:14}}>{id} {value}</p> */}

</form>
 <p>{users.length}</p>
<ol>
            {users.map((user) => (
              <li key={user.id}>{user.value} <button onClick={() => handleDelete(user.id)}>Delete</button>
              </li>
            ))}
          </ol>
  {/* <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(email))}>Increment</button>
      <button onClick={() => dispatch(decrement(email))}>Decrement</button>
    </div> */}
</div>
</div>
    )
}