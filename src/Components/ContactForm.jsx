function ContactForm() {
	return (
		<div>
			<form>
				<input type="text" placeholder='name' />
				<br />
				<input type="email" placeholder='email' />
				<br />
				<textarea placeholder='message' />
				<button type='submit'>
				submit
				</button>
			</form>
		</div>
	)
}

export default ContactForm