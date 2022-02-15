import Tours from '../tours/Tours'
import data from '../../data/db.json'

function Home() {
    return (
      <>
      
      <Tours data={data}/>
      
      </>
    );
  }
  
  export default Home;