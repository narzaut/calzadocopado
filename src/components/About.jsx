import React from 'react'

export const About = () => {
	return(
		<div id="products" class="flex bg-gray text-white flex-row justify-center">
      <div className='container flex flex-col text-center items-center md:text-left md:items-start md:flex-row lg:px-40 py-20'>
				<div className='w-1/4'>
					<img className='rounded-full' src={process.env.PUBLIC_URL + '/assets/profilepic.jpg'}/>
				</div>
				<div className='w-3/4 flex flex-col pt-12 md:pt-0'>
					<div>
						<h1 className='font-bold text-2xl text-center md:text-left lg:text-left'>
							Sobre mi
						</h1>
						<p className='text-base pt-4 text-gray-500 leading-8'>
							Soy un estudiante oriundo de Río Cuarto - Córdoba. Me considero una persona de pensamiento crítico y me encanta estar al frente de la computadora, esos dos factores me llevaron a despertar mi vocación por la programación. En este momento estoy principalmente enfocado en el front-end con React, pero aspiro en un futuro a convertirme en MERN Stack Developer.
						</p>
					</div>

					<div >
						<h1 className='font-bold text-2xl  pt-8'>Detalles de contacto</h1>
						<p className='flex flex-col pt-4 text-base text-gray-500 leading-8'>				
							<span>Ignacio Arzaut</span>
							<span>Río Cuarto, Córdoba, 5800</span>
							<span>+54 3584 158246</span>
							<span>i.arzaut@itecriocuarto.org.ar</span>
						</p>
					</div>
				</div>
			</div>
			
    </div>
	)
}
