import styled from "styled-components";
import CenterBlock from "helpers/CenterBlock";
import Title from "components/Title";
import Button from "components/Button";
import {useState} from "react";
import Input from "components/Forms/Input";
import whiteListImage from "public/pic/whitelist-decor.png"
import whiteListHand from "public/pic/whitelist-hand.png"
import Image from "next/image";
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
		<Wrapper id="white_list_form">
			<CenterBlock>
				<div className="left_image">
					<Image src={whiteListImage} width={268} alt="Join the Whitelist"/>
				</div>
				<div className="form_block">
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
					<span className="decor top"/>
					<span className="decor right"/>
					<span className="decor bottom"/>
					<span className="decor left"/>
				</div>
				<div className="right_image">
					<Image src={whiteListHand} width={554} alt="Be Whitelisted"/>
				</div>
				<span className="blur_round"/>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.section`
	padding-top: 260px;
	position: relative;
	@media only screen and (max-width: 1024px) {
		padding-top: 120px;
	}
	@media only screen and (max-width: 600px) {
		padding-top: 80px;
	}
	.form_block{
    width: 760px;
    height: 740px;
    border-radius: 30px;
    background: #0D0D0D;
		padding: 30px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 10;
		&:before{
			content: "";
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
      border-radius: 20px;
      border: 1px solid #B29E77;
      width: 696px;
      height: 675px;
		}
	}
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
	.decor{
		position: absolute;
		&:before{
			content: url("/pic/form-decor.svg");
		}
		&.top{
			top: 20px;
			left: 50%;
			transform: translateX(-50%);
		}
    &.bottom{
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
		&.left{
			left: 21px;
			top: 50%;
			transform: translateY(-50%);
		}
    &.right{
      right: 21px;
      top: 50%;
      transform: translateY(-50%);
    }
	}
	.left_image{
		position: absolute;
		left: -80px;
		top: 0;
		z-index: 20;
	}
	.right_image{
		position: absolute;
		right: -200px;
		bottom: 0;
		z-index: 20;
	}
	.blur_round{
		border-radius: 50%;
		background: #FBBF60;
		filter: blur(140px);
		width: 400px;
		height: 400px;
		position: absolute;
		right: -200px;
		bottom: -100px;
	}
	.message_block{
		margin-top: 20px;
		color: #FBBF60;
		border: 1px solid #FBBF60;
		padding: 10px 20px;
	}
`
