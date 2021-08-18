import React from 'react'

export const About = () => {
	const AddressMap=()=>{
    return (
        <div className="google-map-code">
          <iframe title='Maps Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.3076451655284!2d-64.37013968480969!3d-33.10099498087544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2007cd12ab3d3%3A0x37bc4c9dac1f610e!2sITec%20Instituto%20Tecnol%C3%B3gico%20R%C3%ADo%20Cuarto!5e0!3m2!1ses!2sar!4v1629253117191!5m2!1ses!2sar" width="400" height="300" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    );
 }
	return(
		<div id="nosotros" class="flex bg-gray text-white flex-row justify-center ">
      <div className='container flex flex-col  items-center md:text-left md:items-start md:flex-row  py-20 '>
				<div className='w-full lg:w-1/3 flex items-center justify-center'>
					<AddressMap />
				</div>
				<div className='w-2/3 flex flex-col pt-12 md:pt-0 justify-center items-center lg:items-start text-center lg:text-left'>
					<div className='flex flex-col items-center lg:items-start'>
						<h1 className='border-b-4 border-blue-400 max-w-max font-bold text-2xl  '>
							Sobre nosotros
						</h1>
						<p className='text-base pt-4 text-gray-300 leading-8'>
							Somos una empresa fundada por personas a quienes les gusta andar con buenas zapas por la vida. Como se debe. Este emprendimiento comenzo en askldaklsakl askldjasl djakl sjdl aksdlja skld asjklfj asfjd ajklsdjkla sjkld jlasdlk asfnlask fasdkl asldjl asjkdl jasld
						</p>
					</div>

					<div className='flex flex-col items-center   '> 
						<h1 className='border-b-4 border-blue-400 max-w-max font-bold text-2xl  pt-8'>Detalles de contacto</h1>
						<p className='flex flex-col pt-4 text-base text-gray-300 leading-8'>				
							<span>El Calzado Copado S.R.L</span>
							<span>Río Cuarto, Córdoba, 5800</span>
							<span>+54 3584 42069</span>
							<span>contacto@calzadocopado.com</span>
						</p>
					</div>
				</div>
			</div>
			
    </div>
	)
}
