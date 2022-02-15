import { Link } from 'react-router-dom'
import Tour from './tour/Tour'

function Tours(props) {
    return (
        <>
            {props.data.map((val, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`/city/${val.id}`}>
                            <Tour Tour={val}></Tour>
                        </Link>
                    </div>
                )
            })}
        </>
    );
}

export default Tours;