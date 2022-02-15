function Tour(props) {

    return (
        <>
            <div>
                <img src={props.Tour.image} alt={props.Tour.name} />
                <h3>Name: {props.Tour.name}</h3>
            </div>
        </>
    )
}
export default Tour;