import styled from "styled-components";
import {ReactNode} from "react";

interface GalleryNotificationProps {
	children: ReactNode
}

/**
 * GalleryNotification Component
 * @constructor
 */
export default function GalleryNotification({children}: GalleryNotificationProps) {
	return (
		<Wrapper>
			<p>{children}</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 80px;
	p{
		padding: 10px 20px;
		color: #EFBC6A;
		font-size: 16px;
		font-weight: 500;
		line-height: 100%;
		border: 1px solid #EFBC6A;
	}
`
