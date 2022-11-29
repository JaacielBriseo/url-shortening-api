
export const MobileMenu = ({isOpen}) => {
  return (
    <div className={`absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 ${isOpen?'flex':'hidden'}`}>
    <div className='flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm'>
        <a href='' className='w-full text-center'>
            Features
        </a>
        <a href='' className='w-full text-center'>
            Pricing
        </a>
        <a href='' className='w-full text-center'>
            Resources
        </a>
        <a href='' className='w-full pt-6 border-t border-gray-400 text-center'>
            Login
        </a>
        <a href='' className='w-full py-3 rounded-full bg-cyan text-center'>
            Sign up
        </a>
    </div>
</div>
  )
}
