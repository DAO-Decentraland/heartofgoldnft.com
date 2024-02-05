import styled from "styled-components";
import Title from "components/Title";
import htmlContent from "helpers/htmlContent";
import CenterBlock from "helpers/CenterBlock";
import Marquee from "react-fast-marquee";
import {useState} from "react";

interface FaqInputProps {
	item: {title: string, description: string}
}

/**
 * FaqInput Component
 * @constructor
 */
export default function FaqInput({item}: FaqInputProps) {
	const [visible, setVisible] = useState(false)
	return (
		<Wrapper>
			<CenterBlock>
				<div className="top_line"/>
				{!visible && (
					<Title className="faq_heading">
						<h3 onClick={() => setVisible(true)}>{item.title}</h3>
					</Title>
				)}
			</CenterBlock>
			{
				visible && (
					<>
						<div onClick={() => setVisible(false)} className="faq_scroll_heading">
							<Marquee autoFill={true}>
								<div className="faq_heading_item">{item.title}</div>
							</Marquee>
						</div>
						<CenterBlock>
							<div className="description">{htmlContent(item.description)}</div>
						</CenterBlock>
					</>
				)
			}
			<CenterBlock>
				<div className="bottom_line"/>
			</CenterBlock>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	.top_line{
		border-top: 1px solid #545454;
		padding-bottom: 15px;
	}
	.bottom_line{
		padding-bottom: 15px;
	}
	&:last-child .bottom_line{
		border-bottom: 1px solid #545454;
	}
	.faq_heading{
		cursor: pointer;
    transition: all .3s ease-in-out;
		&:hover{
			color: #EFBC6A;
      transition: all .3s ease-in-out;
		}
	}
	.faq_scroll_heading{
    cursor: pointer;
	}
	.faq_heading_item{
		margin: 15px 30px 15px 0;
    color: #EFBC6A;
    font-size: 40px;
    font-weight: 100;
    line-height: 100%;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    font-family: "BoogyBrutPoster-White", sans-serif;
	}
  .description {
    margin-top: 10px;
    margin-bottom: 30px;
    font-weight: 300;
    font-size: 20px;
    line-height: 160%;
    @media only screen and (max-width: 600px) {
      font-size: 14px;
      line-height: 160%;
    }
    a {
      color: #EFBC6A;
      text-decoration: underline;
    }
    p, ul, ol {
      margin: 10px 0;
      max-width: 900px;
      width: 100%;
      @media only screen and (max-width: 600px) {
        margin: 20px 0;
      }
    }
	  ol{
		  padding-left: 23px;
      @media only screen and (max-width: 600px) {
	      padding-left: 16px;
      }
	  }
    ul li{
      margin-bottom: 15px;
      padding-left: 26px;
      position: relative;
      &:before {
        content: url("/pic/list-icon.svg");
        position: absolute;
        left: 0;
        top: 2px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`
