function Tours(props) {
    return (
      <>
      {props.data.map(val =>{
          return(
              <div>
                  <p>Name: {val.name}</p>
                  <img src={val.image} alt={val.name} />
              </div>
          )
      })}
      </>
    );
  }
  
  export default Tours;