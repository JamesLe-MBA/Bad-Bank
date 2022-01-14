//add highlights and whatever else rubric wanted
function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" id="tooltip" href="#">Home<span id ="tooltiptext">Welcome to James Global Credit Union</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" id="tooltip" aria-current="page" href="#/CreateAccount/">Create Account
          <span id ="tooltiptext">Welcome GCU Valuable Customer</span></a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" id="tooltip" href="#/deposit/">Deposit<span id ="tooltiptext">Let James GCU Accelerate Your Wealth By 1,000,0000 X</span></a>
        </li>
        <li className="nav-item"  >
          <a className="nav-link" id="tooltip" href="#/withdraw/">Withdraw<span id ="tooltiptext">"At James GCU, appreciattion of Cashed Crypto Currency (new CCC) outweights Carat, Cut, & Color (old CCC) by a 1 million folds," CEO. </span></a>
        </li>
           <li className="nav-item"  >
          <a className="nav-link" id="tooltip" href="#/alldata/">All Data<span id ="tooltiptext">James Global Credit Union (GCU) Believes in Transparency Without Compromising Highest Encrypted Security</span></a>
        </li>
        </ul>
      </div>
    </nav>
    </>
  );
}