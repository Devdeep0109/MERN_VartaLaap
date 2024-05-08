const GenderCheck = ({onCheckboxChange ,selectedGender}) => {
  return (
    <div className="flex mt-2">
        <div className="form-control">
            <label className={`label cursor-pointer ${selectedGender === "male" ? "selected" :""  } `}>
                <span className="text-white label-text pr-2">Male </span> 
                <input type="checkbox" defaultChecked className="checkbox  border-white"
                    checked={selectedGender === 'male'}
                    onChange={() => onCheckboxChange("male")  } />
            </label>
        </div>

        <div className="form-control">
            <label className={`label cursor-pointer ${selectedGender === "female" ? "selected" :""  } `}>
                <span className="text-white label-text pr-2">Female</span> 
                <input type="checkbox" defaultChecked className="checkbox border-white"
                checked={selectedGender === 'female'}
                onChange={() => onCheckboxChange("female")  } />
            </label>
        </div>
    </div>
  )
}

export default GenderCheck
