import styled from "styled-components";
import Title from "components/Title";
import {useState} from "react";
import Input from "components/Forms/Input";
import Button from "components/Button";
import axios from "axios";
import {state} from "state";
import {MintStatusEnum} from "app-lib/enums/mint.enum";

export default function MainWhiteListCheck() {
	const [email, setEmail] = useState("")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<null | string>(null)
	
	const obHandleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault()
		setError(null)
		setLoading(true)
		axios.get("/api/whitelist-form", {params: {email}})
			.then(() => {
				state.mintStatus = MintStatusEnum.MINT_START
				setLoading(false)
			})
			.catch(error => {
				setError(error.response.data.message)
				setLoading(false)
			})
	}
	return (
		<Wrapper>
			<Title><h2>Pre-Mint Event<br/>Is Now Open</h2></Title>
			<div className="description">
				<p>Pre-Mint Event Now Open for Whitelisted Users Only.</p>
				<p>Enter Your Email for Authorization.</p>
			</div>
			<form onSubmit={obHandleSubmit}>
				<Input value={email} type="email" onChange={setEmail} placeholder="Email" required={true}/>
				<Button disabled={loading}>{loading ? "Checking" : "Submit Email"}</Button>
			</form>
			{error && <p className="error">{error}</p>}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.title {
		text-align: center;
	}
	.description {
		max-width: 410px;
		margin: 20px auto 0 auto;
		text-align: center;
		color: #FFF;
		font-size: 16px;
		font-weight: 300;
		line-height: 140%;
		@media only screen and (max-width: 600px) {
			font-size: 14px;
		}
	}
	form{
		max-width: 360px;
		margin: 40px auto 0 auto;
		.button{
			margin-top: 20px;
		}
	}
	.error{
		margin-top: 20px;
		text-align: center;
		font-size: 14px;
		color: #FBBF60;
	}
`
