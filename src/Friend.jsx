export const Friend = (props) => {
  return (<>
  <div className="card">
    <div>{props.data.firstName}</div>
    <div>{props.data.lastName}</div>
    <div>{props.data.age}</div>
    <div>{props.data.city}</div>
    <button>Delete</button>
    </div>
    </>)
}