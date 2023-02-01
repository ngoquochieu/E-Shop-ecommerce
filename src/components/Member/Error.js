function Error(props) {
    const {err} = props
    console.log(err)
    if(Object.keys(err).length > 0 ) {
        return Object.keys(err).map((key, index) => {
            return (
                <li key={index}>{err[key]}</li>
            )
        })
    }
}
export default Error