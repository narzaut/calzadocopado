
export const Product = ({ url, name, price}) => {
	return(
		<div className='hover-press-animation transition container p-10 flex flex-col md:flex-row items-center justify-center'>
			<div className='shadow-lg hover:shadow-2xl cursor-pointer mx-6 w-60 md:w-96 bg-gray text-white  max-w-xs text-center hover:text-blue-400 my-8 md:my-0'>
				<img alt = 'Alta zapa pa' className='' src={url}/>
				<div className='p-2 flex items-center justify-center flex-col '>
					<p className=' font-bold text-base border-b-2 border-blue-400 text-center text-lg'>{name}</p>
					<p className='pt-2 text-base pb-4 font-bold'>$ {price}</p>
					<div className='pb-4'>
						<button className='border-2 border-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-gray-800 font-bold hover-press-animation'><i class="fas fa-shopping-cart pr-2"></i>Comprar</button>
					</div>
				</div>		
			</div>
		</div>	
	)
}