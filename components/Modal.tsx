import styled from "styled-components";
import {ReactNode} from "react";

interface ModalProps {
	visible: boolean
	onClick: (value: boolean) => void
	children: ReactNode
}

/**
 * Modal Component
 * @constructor
 */
export default function Modal({visible, onClick, children}: ModalProps) {
	return (
		visible ? (
			<Wrapper>
				<div className="modal">
					<button onClick={() => onClick(false)} className="close_button">close <img src="/pic/close-icon.svg" alt="close"/></button>
					<div className="modal_content">{children}</div>
				</div>
				<div onClick={() => onClick(false)} className="overlay"/>
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	.modal{
		position: relative;
		z-index: 20;
		max-width: 900px;
		width: calc(100% - 40px);
		border-radius: 30px;
		background: #0D0D0D;
		padding: 30px;
	}
	.overlay{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		background: rgba(29, 29, 29, 0.70);
		backdrop-filter: blur(0px);
	}
	.close_button{
		width: auto;
		margin-left: auto;
		color: #B29E77;
		font-size: 14px;
		font-weight: 300;
		line-height: 100%;
		img{
			margin-left: 10px;
		}
	}
	.modal_content{
		margin-top: 15px;
		overflow-y: auto;
		max-height: 85vh;
	}
`
