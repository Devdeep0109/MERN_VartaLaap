import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input type="text" placeholder="Search.." className="input input-bordered w-full max-w-xs rounded-3xl " />
      
    <button className="btn btn-circle  text-black">
    <IoSearchSharp  className='w-6 h-6 outline-none'/>
    </button>
    </form>
  )
}

export default SearchInput
