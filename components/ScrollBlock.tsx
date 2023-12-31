import styled from "styled-components";
import React, {ReactNode, useRef, useState} from "react";

interface ScrollBlockProps {
	className?: string
	children: ReactNode
	scrollVisible?: boolean
}

/**
 * ScrollBlock Component
 * @constructor
 */
export default function ScrollBlock({className, children, scrollVisible = false}: ScrollBlockProps) {
	const galleryRef = useRef<HTMLDivElement>(null);
	let isMouseDown = false;
	let startX: number;
	let scrollLeft: number;

	const startDrag = (event: React.MouseEvent) => {
		isMouseDown = true;
		if (galleryRef.current) {
			startX = event.pageX - galleryRef.current.offsetLeft;
			scrollLeft = galleryRef.current.scrollLeft;
		}
	};

	const endDrag = () => {
		isMouseDown = false;
	};

	const handleMouseMove = (event: React.MouseEvent) => {
		if (!isMouseDown || !galleryRef.current) return;
		event.preventDefault();
		const x = event.pageX - galleryRef.current.offsetLeft;
		const walk = (x - startX) * 2;
		if (galleryRef.current) {
			galleryRef.current.scrollLeft = scrollLeft - walk;
		}
	};

	return (
		<Wrapper
			ref={galleryRef}
			onMouseDown={startDrag}
			onMouseUp={endDrag}
			onMouseLeave={endDrag}
			onMouseMove={handleMouseMove}
			className={`scroll_block ${className ? className : ""} ${scrollVisible ? "scroll" : ""}`}>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: none;
  scroll-behavior: auto;
	cursor: all-scroll;
  &::-webkit-scrollbar { opacity: 0; visibility: hidden; height: 0; width: 0;}
  &.scroll{
	  padding-bottom: 40px;
    &::-webkit-scrollbar { width: 3px; height: 3px;}
    &::-webkit-scrollbar-button {  display: none; }
    &::-webkit-scrollbar-track {  background-color: #EFBC6A;}
    &::-webkit-scrollbar-track-piece { background-color: #433520;}
    &::-webkit-scrollbar-thumb { height: 50px; background-color: #EFBC6A; border-radius: 3px;}
    &::-webkit-scrollbar-corner { background-color: #EFBC6A;}
    &::-webkit-resizer { background-color: #EFBC6A;}
  }
  .item {
    flex: 0 0 auto;
    scroll-snap-align: start;
  }
`
