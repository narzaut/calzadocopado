import React from 'react'

export const Footer = () => {
	return(
		<footer id="footer" className='relative bg-gray pt-20 pb-10 flex flex-col items-center text-gray-400 text-sm'> 
      <a href='#' className='h-12 w-12 rounded-full bg-lightgray hover:bg-blue-400 transition absolute  flex items-center justify-center cursor-pointer -top-5 animate-bounce'>
				<i class="fas fa-arrow-up text-3xl text-white "></i>
			</a>
			<div className='flex justify-center'>
				<a href=''><i class="hover-press-animation pr-10 fab fa-instagram-square pb-4 text-5xl cursor-pointer hover:text-blue-400 transition"></i></a>
				<a href=''><i class="hover-press-animation  pr-10 fab fa-facebook-square pb-4 text-5xl cursor-pointer hover:text-blue-400 transition"></i></a>
				<a href=''><i class="hover-press-animation fab fa-twitter-square pb-4 text-5xl cursor-pointer hover:text-blue-400 transition"></i></a>
			</div>
			

			<div>El Calzado Copado S.R.L <span className='text-blue-400'>© 2021</span></div>
			
    </footer>
	)
}