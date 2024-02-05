import styled from "styled-components";
import {useState} from "react";
import useClickOutside from "helpers/useClickOutside";

interface CustomSelectProps {
	array: string[] | number[]
	value: string | number
	onClick: (value: string | number) => void
}
export default function CustomSelect({array, value, onClick}: CustomSelectProps) {
	const ref = useClickOutside(() => setVisible(false));
	const [visible, setVisible] = useState(false)
	const onHandleClick = (value: number | string) => {
		onClick(value)
		setVisible(false)
	}
	return (
		<Wrapper className={`custom_select ${visible ? "visible" : ""}`} ref={ref}>
			<button
				type="button"
				onClick={() => setVisible(!visible)}
				className={`custom_select_button ${visible ? "visible" : ""}`}
			>{value ? value : "Choose a value"}
				<svg className="select_drop_icon" width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.36677 7.47656L0.36676 0.476562C0.36676 0.476562 5.57353 4.49747 7.36677 4.49747C9.16001 4.49747 14.3668 0.476562 14.3668 0.476562L7.36677 7.47656Z"/>
				</svg>
			</button>
			<div className={`custom_select_list ${visible ? "visible" : ""}`}>
				<ul>
					{
						array.map((item, index) => {
							return (
								<li className={value === item ? "active" : ""} onClick={() => onHandleClick(item)} key={index}>{item}</li>
							)
						})
					}
				</ul>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: relative;
	&.visible{
		z-index: 30;
	}
	.custom_select_button{
		height: 70px;
		min-width: 140px;
		border: 1px solid rgb(246, 213, 149);
		padding: 20px;
		font-size: 16px;
		font-weight: 400;
		line-height: 18px;
		color: #FFFFFF;
		justify-content: space-between;
		text-transform: uppercase;
		transition: .2s ease-in-out;
		&.visible{
			background: #EFBC6A;
			color: #1D1D1D;
			transition: .2s ease-in-out;
			.select_drop_icon{
				transform: rotate(180deg);
				transition: .2s ease-in-out;
				fill: #1D1D1D;
			}
		}
	}
	.select_drop_icon{
		fill: #FFFFFF;
		transition: .2s ease-in-out;
	}
	.custom_select_list{
		width: 100%;
		position: absolute;
		top: 70px;
		left: 0;
		visibility: hidden;
		opacity: 0;
		transition: .2s ease-in-out;
		overflow-y: auto;
		height: 350px;
		&.visible{
			visibility: visible;
			opacity: 1;
			transition: .2s ease-in-out;
		}
		ul{
			background: #EFBC6A;
		}
		li{
			text-transform: uppercase;
			cursor: pointer;
			color: #1D1D1D;
			transition: .2s ease-in-out;
			border-top: 1px solid #E2AF5C;
			padding: 15px 20px;
			display: flex;
			height: 70px;
			font-size: 16px;
			font-weight: 400;
			line-height: 18px;
			justify-content: space-between;
			align-items: center;
			&:hover, &.active{
				color: #1D1D1D;
				background: #E2AF5C;
				transition: .2s ease-in-out;
			}
		}
	}
`
