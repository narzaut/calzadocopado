import React, { useState} from 'react';
import { About } from './About'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Products } from './Products'
import { Footer } from './Footer'
const TopBar = () => {
	return (
		<div  className='bg-transparent w-full h-48 lg:h-20 flex flex-col md:flex-row lg:flex-row '>
				<a href='#'className='p-4 flex items-center justify-center lg:justify-start lg:px-10 h-full w-full lg:w-2/4'>
					<div className='w-24 h-24' style={{backgroundImage: `url(${process.env.PUBLIC_URL + `/images/sneakers.svg`})`,backgroundPosition:'center',backgroundRepeat:'no-repeat', backgroundSize: 'cover'}} />
					<h1 className='lg:pl-4 hidden lg:flex lg:visible uppercase text-xl'>Los Calzados Copados</h1>
				</a>
				<div className='flex w-full justify-center lg:justify-end items-center h-full py-4 text-xl text-lg uppercase'>
					<a href='#products' className='smoothscroll products pl-4 hover:text-blue-400 transition'>
						<h1>Productos</h1>
					</a>
					<a href='' className='combos pl-4 lg:pl-10 hover:text-blue-400 transition'>
						<h1>Combos</h1>
					</a>
					<a href='#about' className='about px-4 lg:px-10 hover:text-blue-400 transition'>
						<h1>Quienes somos</h1>
					</a>
				</div>
			</div>
	)
}

const Header = () => {
	return(
		<div className='h-screen w-full ' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url(${process.env.PUBLIC_URL + `/images/calzado.jpg`})`,backgroundPosition:'center',backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}>
			<TopBar />
			<div className=' flex items-center justify-center h-2/3'>
				<div className='px-10 lg:px-0 w-full lg:w-2/3 h-96 flex-col items-center justify-center '>
					<div className='pt-20 lg:pt-0 w-full text-center items-center justify-start lg:justify-center h-full flex flex-col '>
						<h1 className='text-bold text-4xl lg:text-6xl text-shadow'>El Calzado Copado</h1>
						<p className='text-base lg:text-2xl py-4'>El lugar mas copado para encontrar los calzados bien copados.</p>
					</div>
					<div className='text-center smoothscroll'>
						<a className='smoothscroll' href='#products'> <i class="fas fa-arrow-circle-down text-5xl animate-bounce cursor-pointer hover:text-blue-400 transition-colors" ></i></a> 
					</div>
				</div>
			</div>
		</div>
	)
}

export const Home = () => {
	const [width, setWidth] = useState(window.innerWidth);
  	
	return (
    <div  className='text-shadow  w-screen  overflow-x-hidden text-white'>
			<Header />
			
			<Products />
			<About />
			<div className='flex h-full w-full items-start justify-center '>
				<div className='flex flex-col w-full px-10 lg:px-10 lg:w-3/4 h-full py-20 items-center justify-center'>
					<div className='pb-6'>
						<p className='border-b-4 text-lg lg:text-2xl border-blue-400 max-w-max text-gray-700 uppercase'>COMBOS</p>
					</div>
					{width > 600 ? 
						<Carousel plugins={['arrows']}>
    					<img src={'https://topperarg.vteximg.com.br/arquivos/ids/254621/inviernosale-slider-13-08-21-dsk.gif?v=637644937729000000'} />
    					<img src={'https://topperarg.vteximg.com.br/arquivos/ids/248337/especialnaranja-260521-slider-desk-v2.gif?v=637590281630800000'} />
    					<img src={'https://topperarg.vteximg.com.br/arquivos/ids/254621/inviernosale-slider-13-08-21-dsk.gif?v=637644937729000000'} />

  					</Carousel>
					:
						<Carousel>
    					<img src={'https://topperarg.vteximg.com.br/arquivos/ids/254621/inviernosale-slider-13-08-21-dsk.gif?v=637644937729000000'} />
    					<img src={'https://topperarg.vteximg.com.br/arquivos/ids/248337/especialnaranja-260521-slider-desk-v2.gif?v=637590281630800000'} />
    					<img src={'https://topperarg.vteximg.com.br/arquivos/ids/254621/inviernosale-slider-13-08-21-dsk.gif?v=637644937729000000'} />
  					</Carousel>
					}
				</div>
				
			</div>
			
			<Footer />
		</div>
  );
}
