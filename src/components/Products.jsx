import { Product } from './Product'
export const Products = () => {
	return(
		<div className='w-full h-full flex flex-col'>
			<div className='py-10 w-full text-gray-700 uppercase flex items-center justify-center'>
				<h1 className='border-b-4 border-blue-400 max-w-max text-xl'>Algunos de nuestros productos</h1>
			</div>
			<div className='flex flex-col lg:flex-row'>
				<Product url={'https://topperarg.vteximg.com.br/arquivos/ids/196952-1200-1200/025291.jpg?v=636740744326730000'} name='Zapacopada' price={4000}/>
				<Product url={'https://topperarg.vteximg.com.br/arquivos/ids/211304-1200-1200/052162.jpg?v=636979581357600000'} name='Zacapoda' price={4700}/>
				<Product url={'https://topperarg.vteximg.com.br/arquivos/ids/201431-1200-1200/29701.jpg?v=636801465800170000'} name='Zacapaca' price={4900}/>
				<Product url={'https://topperarg.vteximg.com.br/arquivos/ids/209353-1200-1200/051341.jpg?v=636969813643300000'} name='Zacacaca' price={'FUAAA'}/>
			</div>
			
		</div>
	)
}