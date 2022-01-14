function Spa() {
  
  return (
    <HashRouter>
      <NavBar/>
      
      <UserContext.Provider value={{users:[{name:'Drew',email:'dsmyser1@gmail.com',password:'HEEhee',bal:50000}]}}>
      <BalContext.Provider value={{
            balance: 200
            
      }}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>

      </BalContext.Provider>
      </UserContext.Provider>
      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
