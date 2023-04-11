import './upload_img.css';
import React, {useEffect, useState} from 'react';
export default function Masuk(){
	//const [gambar, setGambar] = useState(url);
	const lihat_gbr = async (e) => {
		
		const file = e.target.files[0];
		const respon = await convertBase64(file);
		//let gbr = document.getElementById('tb_upload_gbr').value;
		document.getElementById('tb_gbr').src = respon;
		document.getElementById('tb_base64').value = respon;
		
	}
	
	const convertBase64 = (file) =>{
		return new Promise ((resolve, reject) => {
			let file_render = new FileReader()
			file_render.readAsDataURL(file)
			file_render.onload = () =>{
				resolve(file_render.result)
			}
			file_render.onerror = (error) => {
				reject(error)
			}
		}) 
	}
	return (
		<>
		<div className='kotak_latar'>
			<div className='kotak_konten'>
				<div className='kotak_brand_tb'>
					<p className='brand'>Foru64~</p>
					<div className='kotak_tb'>
						
						<label>
						Upload image :
						</label>
						<br />
						<input type='file' onChange={lihat_gbr} id='tb_upload_gbr'/>

						
					</div>
					
				</div>
				
				<div className='kotak_gbr'>
					<img id='tb_gbr' />
					<div className='kotak_teks_base64'>
						<h1>Image to base64</h1>
						<textarea id='tb_base64' rows={5}/>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}