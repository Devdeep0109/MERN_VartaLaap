
const GenderCheck = () => {
  return (
    <div className="flex mt-2">
        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="text-white label-text pr-2">Male </span> 
                <input type="checkbox" defaultChecked className="checkbox  border-white" />
            </label>
        </div>

        <div className="form-control">
            <label className="label cursor-pointer">
                <span className="text-white label-text pr-2">Female</span> 
                <input type="checkbox" defaultChecked className="checkbox border-white" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheck
