import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [image, setImage] = useState(null);

	const handleFileChange = (event: any) => {
		setImage(event.target.files[0]);
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		console.log(image, username, email);
		const formData = new FormData();
		formData.append('username', username);
		formData.append('email', email);
		formData.append('image', image);
		console.log(formData);
		try {
			const response = await axios.post('https://vatsalyaimagestore.tusqasi.repl.co', formData);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className='grid justify-center mt-4'>
				<img
					src="https://i.ibb.co/gwpJYPR/Vatsalya-logo-1.jpg"
					alt=""
					className='w-[100px] rounded-full' />
			</div>
			<div className='w-full lg:w-fit '>
				<form onSubmit={handleSubmit}
					className='bg-white px-8 pt-6 pb-8 mb-4'>

					<div className="mb-4">
						<label
							className="block text-teal-800 text-sm font-bold mb-2" >
							Name
						</label>

						<input
							type="text"
							value={username}
							onChange={(event) => {
								setUsername(event.target.value)
							}}
							placeholder='Name'
							className='shadow appearance-none border rounded 
							w-full py-2 px-3 text-teal-700 leading-tight 
							focus:outline-none focus:shadow-outline' />
					</div>





					<div className="mb-6">
						<label
							className="block text-teal-800 text-sm font-bold mb-2" >
							Email
						</label>
						<input
							type="email" value={email}
							onChange={(event) => setEmail(event.target.value)}
							placeholder='Email'
							className='shadow appearance-none border rounded
								   	   w-full py-2 px-3 text-teal-700 mb-3 
									   leading-tight focus:outline-none 
									   focus:shadow-outline' />
					</div>



					<input type="file" accept="image/*" onChange={handleFileChange}
						className='block w-full text-slate-500
								   file:mr-4 file:py-2 file:px-4
								   file:rounded-xl file:border-0
								   file:text-sm file:font-semibold
								   file:bg-teal-50 file:text-teal-800
								   hover:file:bg-teal-100 border p-2 rounded-l'/>

					<div className='m-3 flex justify-center'>
						<button type="submit" className='block text-teal-800 font-semi-bold text-xl mb-2 bg-teal-50 rounded border border-gray-50 p-2 pr-5 pl-5 ' >Submit</button>
					</div>
				</form>
			</div >
		</>
	);
};

export default UploadForm;

