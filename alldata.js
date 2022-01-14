
function AllData() {
    const ctx = React.useContext(UserContext);
    return(
        <>
        <Card 
        bgcolor="info"
        header="Global Credit Union Customers:"
        body= {ctx.users.map((user, i) => (
          <li key={i}>
              <div>
              Name: {user.name}<br/>
              Email: {user.email}<br/>
              Password: {user.password}<br/>
              Balance: {user.bal}<br/>
              </div>
         </li>
          ))}
         
        >
         </Card>
        </>
      );
    }