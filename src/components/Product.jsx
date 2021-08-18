
export const Product = ({ url, name, price}) => {
	return(
		<div className='hover-press-animation transition container p-10 flex flex-col md:flex-row items-center justify-center'>
			<a href='{link}' className='shadow-lg hover:shadow-2xl cursor-pointer mx-6 w-60 md:w-96 bg-gray text-white  max-w-xs text-center hover:text-blue-400 my-8 md:my-0'>
				<img alt = 'asd' className='' src={url}/>
				<div className='p-2 flex items-center justify-center flex-col h-24'>
					<p className=' font-bold text-base border-b-2 border-blue-400 text-center text-base'>{name}</p>
					<p className='pt-2 text-base '>${price}</p>
				</div>		
			</a>
		</div>	
	)
}