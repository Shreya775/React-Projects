import React, {useState} from "react";
function App() {
  //const [headingText, setHeadingText] = usestate("Hello!")
  //const [name,setName] = useState("");
  //const [submitText, setSubmitText] = useState("");
  //function handleClick(){
  //  setHeadingText("Submitted!");
  //}
  const [isMouseOver, setMouseOver] = useState(false);
  const [contact, setContact] = useState({
    fName:"",
    lName:"",
    email:""
  });
 
  function handleMouseOver(){
    setMouseOver(true);
  }
  function handleMouseOut(){
    setMouseOver(false);
  }
  function updateContact(event){
    const {name,value}=event.target;
    setContact((prevValue)=>{
      return{
        ...prevValue,
        [name]:value
      }

    });
  }
  //function handleChange(event){
  //  console.log("changed!");
  //  setName(event.target.value)}
  //function handleSubmit(event){
  //  setSubmitText(name);
  // event.preventDefault();
  //}
  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}!</h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange={updateContact} placeholder="First Name" value={contact.fName}/>
        <input name="lName" onChange={updateContact} placeholder="Last Name" value={contact.lName}/>
        <input name="email" onChange={updateContact} placeholder="Email" value={contact.email}/>
        <button type="submit"
        style={{backgroundColor:isMouseOver?"black":"white"}}
        //onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
