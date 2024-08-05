import ClipLoader from "react-spinners/ClipLoader";

const Spinners = ({loading}) => {
    const override = {
         display: "block",
         margin: '100px auto'
    } 
  return (
    <ClipLoader
        color='#333'
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
  )
}

export default Spinners