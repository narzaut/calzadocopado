import React, { useState} from 'react';
import { About } from './About'

import { Products } from './Products'
import { Footer } from './Footer'
import { Combos } from './Combos'

			
const TopBar = () => {
	return (
		<div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2))`}} className='backdrop-filter backdrop-blur-sm bg-transparent w-full items-center flex flex-col md:flex-row lg:flex-row shadow-xl'>
				<a href='#'className='p-4 flex items-center justify-center lg:justify-start px-0 lg:px-20 h-full w-full lg:w-2/4'>
					<div className='w-24 h-24' style={{backgroundImage: `url(${process.env.PUBLIC_URL + `/images/sneakers.svg`})`,backgroundPosition:'center',backgroundRepeat:'no-repeat', backgroundSize: 'cover'}} />
				</a>
				<div className='flex w-full justify-center lg:justify-end items-center h-full py-4 text-lg px-0 lg:px-20  lg:text-xl uppercase'>
					<a href='#productos' className='hover-press-animation smoothscroll products pl-4 hover:text-blue-400 transition'>
						<h1>Productos</h1>
					</a>
					<a href='#combos' className='hover-press-animation pl-4 lg:pl-10 hover:text-blue-400 transition'>
						<h1>Combos</h1>
					</a>
					<a href='#nosotros' className=' hover-press-animation px-4 lg:px-10 hover:text-blue-400 transition'>
						<h1>Nosotros</h1>
					</a>
				</div>
			</div>
	)
}

const Header = () => {

	
	return(
		<div className='h-screen w-full ' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.2)) ,url(${process.env.PUBLIC_URL + `/images/background.webp`})`,backgroundPosition:'center',backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}>
			<TopBar />
			<div className=' flex items-center justify-center h-2/3 '>
				<div className='px-10 lg:px-0 flex-col'>
					<div className='pt-20 lg:pt-0 w-full text-center  lg:justify-center h-full flex flex-col pb-20'>
						<h1 className='text-bold text-4xl lg:text-6xl text-shadow'>El Calzado Copado</h1>
						<p className='text-lg lg:text-2xl py-4'>El lugar mas copado para encontrar los calzados bien copados.</p>
					</div>
					<div className='text-center smoothscroll'>
						<a className='smoothscroll' href='#productos'> <i class="fas fa-arrow-circle-down text-5xl animate-bounce cursor-pointer hover:text-blue-400 transition-colors" ></i></a> 
					</div>
				</div>
			</div>
		</div>
	)
}

export const Home = () => {
  	
	return (
    <div  className='text-shadow  w-screen  overflow-x-hidden text-white'>
			<Header />
			
			<Products />
			<About />
			<Combos />
			
			<Footer />
		</div>
  );
}
