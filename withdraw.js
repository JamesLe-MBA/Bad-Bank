function Withdraw(){
  const [balance, setBalance] = React.useState('');
  const [withdrawl, setWithdrawl] = React.useState('');
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
  setWithdrawl('');
  setShow(true);
};

// it recognizes the deposit and its amount, but isn't updating state.
  function makeWithdrawl(){
    console.log("Withdran amount", withdrawl ,"USD.")
    if (!validate(withdrawl,"Withdrawn amount must be a number.")) return;
    if (withdrawl < 0) return (window.alert("Withdraw must be greater 0."), clearForm());
    console.log(parseFloat(balctx.balance) - parseFloat(withdrawl));
    let newBalance = parseFloat(balctx.balance) - parseFloat(withdrawl);
    balctx.balance = newBalance;
    setShow(false);
    console.log(balctx.balance);
    return balctx.balance;
  } 

  return (
    <Card
      bgcolor="danger"
      header="Digital Asset"
      status={status}
      body={show ? (  
        
        <>
        	<h5 className="deposit mb-4">24/7 Global Wealth Management</h5>
       Current Crypto Balance: $ {balctx.balance}<br/>
        Request Liquidated Amount <br/>
        <input type="number" className="form-control" id="withdrawl" placeholder="Amount"
        value={withdrawl} onChange={e => setWithdrawl(e.currentTarget.value)} /><br />
        <button type="submit" className="btn btn-light"
        onClick={makeWithdrawl}>Submit request</button>
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
