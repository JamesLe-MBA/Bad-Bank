
function Deposit(){
  const [balance, setBalance] = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const balctx = React.useContext(BalContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}
function clearForm(){
  setDeposit('');
  setShow(true);
};

// it recognizes the deposit and its amount, but isn't updating state.

  function makeDeposit(){
    console.log("You deposited", deposit ,"USD.")
    if (!validate(deposit,'Deposit amount be a number!')) return;
    if (deposit < 0) return (window.alert("Depost must larger than 0."), clearForm());
    console.log(parseFloat(balctx.balance) + parseFloat(deposit));
    let newBalance = parseFloat(balctx.balance) + parseFloat(deposit);
    balctx.balance = newBalance;
    setShow(false);
    console.log(balctx.balance);
    return balctx.balance;
  }

  return (
    
    <Card
      bgcolor="success"
      header="Crypto Deposit"
      status={status}
      body={show ? (  
        
        <>
        <h5 className="deposit mb-4"> Global 24/7 Wealth Management</h5>
        Current Crypto Balance: $ {balctx.balance}<br/>
        Please Deposit.<br/>
        <input type="number" className="form-control" id="deposit" placeholder="Amount"
        value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br />
        <button type="submit" className="btn btn-light"
        onClick={makeDeposit}>Upload Button</button>
       </>
            ):(
              <>
              <h5>Successful transaction. The balance is $ {balctx.balance}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Transaction</button>
              </>
            )}
    />
  )
            }
