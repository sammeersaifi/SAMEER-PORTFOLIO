import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact =()=> {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const navigate = useNavigate();

	const collectData = async (e) => {

		e.preventDefault();
		console.log(name, email, subject, message);
		let result = await fetch(`${process.env.REACT_APP_API}/contact`, {
		  method: "post",
		  body: JSON.stringify({ name, email, subject, message }),
		  headers: { 'Content-Type': 'application/json' },
	
		});

		result = await result.json()
		console.log(result)
		localStorage.setItem("users", JSON.stringify(result));
		navigate("/page/home");

	  }
	  const notify = () => toast("Data Submit Successfully!");

  return (
    <div class="contact1" id='contact' data-aos="fade-up">
		<div class="container-contact1">
			<div class="contact1-pic js-tilt" data-tilt>
            <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_7wwm6az7.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
			</div>

			<form onSubmit={collectData} class="contact1-form validate-form" >
				<span class="contact1-form-title">
					Get in touch
				</span>

				<div class="wrap-input1 validate-input" data-validate = "Name is required">
					<input value={name} onChange={(e)=>setName(e.target.value)} class="input1" type="text" name="name"  placeholder="Name" required/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input value={email} onChange={(e)=>setEmail(e.target.value)} class="input1" type="text" name="email"  placeholder="Email" required/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Subject is required">
					<input value={subject} onChange={(e)=>setSubject(e.target.value)} class="input1" type="text" name="subject"  placeholder="Subject" required/>
					<span class="shadow-input1"></span>
				</div>

				<div class="wrap-input1 validate-input" data-validate = "Message is required">
					<textarea value={message} onChange={(e)=>setMessage(e.target.value)} class="input1" name="message"  placeholder="Message" required></textarea>
					<span class="shadow-input1"></span>
				</div>

				<div class="container-contact1-form-btn">
					<button onClick={notify} type='submit'  class="contact1-form-btn">
						<span>
							Send Email
							<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					<ToastContainer />
					</button>

				</div>
			</form>
		</div>
	</div>
  )
}

export default Contact