import React, { useState} from 'react';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
export const Combos = () => {
	const [width, setWidth] = useState(window.innerWidth);

	return(
		<div id='combos' className='flex h-full w-full items-start justify-center '>
				<div className='flex flex-col w-full px-10 lg:px-10 lg:w-3/4 h-full py-20 items-center justify-center'>
					<div className='pb-6'>
						<p className='border-b-4 text-lg lg:text-2xl border-blue-400 max-w-max text-gray-700 uppercase'>COMBOS</p>
					</div>
					{width > 600 ? 
					
							<Carousel plugins={['arrows']}>
    						<img alt='Alta zapa pa' src={process.env.PUBLIC_URL + '/images/combo1.gif'} />
    						<img alt='Alta zapa pa' src={process.env.PUBLIC_URL + '/images/combo.gif'} />
    						<img alt='Alta zapa pa' src={process.env.PUBLIC_URL + '/images/combo1.gif'} />
  						</Carousel>
					
					:
						<Carousel>
    					<img alt='Alta zapa pa' src={process.env.PUBLIC_URL + '/images/combo1.gif'} />
    					<img alt='Alta zapa pa' src={process.env.PUBLIC_URL + '/images/combo.gif'} />
    					<img alt='Alta zapa pa' src={process.env.PUBLIC_URL + '/images/combo1.gif'} />
  					</Carousel>
					}
				</div>
				
			</div>
	)
}
