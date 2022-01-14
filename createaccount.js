function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [error, setError]       = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),10000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,'name is blank'))     return;
    if (!validate(email,'email is blank'))    return;
    if (!validate(password,'password is blank')) return;
    if (!validate(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    'must be a real email')) return;
    if (!validate(password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/), 'password must be minimum five characters, at least one letter and one number')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
    window.alert("Account succesfully created! Welcome to new GCU customer.");
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  };

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} 
              onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} 
              onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" 
              onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Account succesfully created!</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Create Another Account or Navigate</button>
              </>
            )}
    />
  )
}