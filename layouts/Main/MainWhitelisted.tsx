import styled from "styled-components";
import Title from "components/Title";
import Button from "components/Button";
import {useState} from "react";
import Input from "components/Forms/Input";
import axios from "axios";
import {useSnapshot} from "valtio";
import {state} from "state";

export default function MainWhitelisted() {
	const snap = useSnapshot(state)
	const [active, setActive] = useState(false)
	const [email, setEmail] = useState("")
	const [wallet, setWallet] = useState("")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)

	const onHandleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault()
		setLoading(true)
		axios.post("/api/whitelist-form", {email, wallet, utm: snap.utm})
			.then(() => {
				setLoading(false)
				setEmail("")
				setWallet("")
				setSuccess(true)
			})
			.catch(() => {
				setLoading(false)
				setError(true)
			})
	}
	return (
		<Wrapper>
			{
				active ? (
					<>
						<Title><h2>Join the<br/>Whitelist</h2></Title>
						<p className="description">We invite you to be whitelisted – simply submit your email address and wallet details.</p>
						{
							success ? (
								<p className="message_block success">You have successfully signed up for the whitelist</p>
							) : (
								error ? (
									<p className="message_block error">You have already signed up for the whitelist</p>
								) : (
									<form onSubmit={onHandleSubmit}>
										<Input
											disabled={loading}
											value={email}
											onChange={setEmail}
											placeholder="Enter your email address"
											type="email"
										/>
										<Input
											disabled={loading}
											value={wallet}
											onChange={setWallet}
											placeholder="Enter your BSC wallet address"
										/>
										<Button disabled={loading} className="submit_button">
											{loading ? "Loading" : "Get Whitelisted"}
										</Button>
									</form>
								)
							)
						}
					</>
				) : (
					<>
						<Title><h2>Be<br/>Whitelisted</h2></Title>
						<p className="description">To take advantage of our Whitelist community, kindly submit your email address and wallet details. This will grant you immediate access to a broad spectrum of exclusive benefits and privileges.</p>
						<Button className="start_button" onClick={() => setActive(true)}>join the Whitelist</Button>
					</>
				)
			}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.title{
		text-align: center;
	}
	.description{
		max-width: 410px;
		margin: 20px auto 0 auto;
		text-align: center;
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    line-height: 140%;
    @media only screen and (max-width: 600px) {
	    font-size: 14px;
    }
	}
	form{
		max-width: 360px;
		margin: 40px auto 0 auto;
	}
	.start_button{
		max-width: 360px;
		margin: 70px auto 0 auto;
	}
	.submit_button{
    max-width: 360px;
		margin: 5px auto 0 auto;
	}
	.form_input{
		margin-bottom: 15px;
	}
	.message_block{
		margin-top: 20px;
		color: #FBBF60;
		border: 1px solid #FBBF60;
		padding: 10px 20px;
    @media only screen and (max-width: 600px) {
	    padding: 5px 10px;
    }
	}
	.error{
		margin-top: 20px;
		text-align: center;
		font-size: 12px;
	}
`
