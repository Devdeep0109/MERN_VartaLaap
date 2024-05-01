import GenderCheck from "./GenderCheck";

const SignUp = () => {
  return (
    <div>
       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp</h1>

        <form action="">
        <div>
						<label className='label p-2'>
							<span className='text-white text-base label-text'>Full name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered h-10'
						/>
					</div>

        <div>
						<label className='label p-2'>
							<span className='text-white text-base label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className=' text-white text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
					</div>

          <div>
						<label className='label'>
							<span className=' text-white text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='confirm Password'
							className='w-full input input-bordered h-10'
						/>
					</div>
          {/*  GENDER CHECKBOX... */}
          <GenderCheck/>

          <a href="#" className="text-white text-sm hover:underline hover:text-blue-600 mt-4 inline-block" >Already have an account?</a>

          <div>
          <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>

        </form>
      </div>
      
    </div>
    </div>
  )
}

export default SignUp;
