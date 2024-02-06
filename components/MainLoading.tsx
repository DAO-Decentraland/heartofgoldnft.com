import styled from "styled-components";
import {useSnapshot} from "valtio";
import {state} from "state";
export default function MainLoading() {
	const snap = useSnapshot(state)
	return (
		<Wrapper className={snap.mainLoading ? "visible" : ""}>
			<img src="/pic/logo.svg" alt="HOG Loading"/>
			<p>Loading...</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background: #1D1D1D;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	z-index: 999999;
	opacity: 0;
	visibility: hidden;
	transition: all .3s ease-in-out;
	&.visible{
		opacity: 1;
		visibility: visible;
		transition: all .3s ease-in-out;
	}
	p{
		margin-top: 20px;
		font-size: 16px;
	}
`
