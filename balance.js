function Balance(){
  const currentBalance = React.useContext(BalContext);
  return (
    <>
    <h1>GFC BALANCE PAGE!</h1>
    <h2>The current crypto currency is: {currentBalance}</h2>
    <h6>Blockchain is Delivering Value Around the World & Turning Talk Into Tangible Outcomes.</h6>
    
    </>
  );
}
