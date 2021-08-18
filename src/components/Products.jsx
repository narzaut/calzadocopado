import { Product } from './Product'
export const Products = () => {
	return(
		<div id='productos' className='w-full h-full flex flex-col'>
			<div className='py-10 w-full text-gray-700 uppercase flex items-center justify-center'>
				<h1 className='border-b-4 border-blue-400 max-w-max text-xl'>Algunos de nuestros productos</h1>
			</div>
			<div className='flex flex-col lg:flex-row'>
				<Product url={process.env.PUBLIC_URL + '/images/producto1.webp'} name='Zapacopada' price={4000}/>
				<Product url={process.env.PUBLIC_URL + '/images/producto2.webp'} name='Zacapoda' price={4700}/>
				<Product url={process.env.PUBLIC_URL + '/images/producto3.webp'} name='Zacapaca' price={4900}/>
				<Product url={process.env.PUBLIC_URL + '/images/producto4.webp'} name='Zacacaca' price={'FUAAA'}/>
			</div>
			
		</div>
	)
}