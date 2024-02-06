import styled from "styled-components";
import {state} from "state";
import {useSnapshot} from "valtio";

export default function ProfileSortingButtons() {
	const snap = useSnapshot(state)
	return (
		<Wrapper className="sort_filters">
			<p>Sort by:</p>
			<button
				className={`${snap.profileSorting.orderBy === "rarity" ? "active" : ""} ${snap.profileSorting.orderBy === "rarity" && snap.profileSorting.sortBy}`}
				onClick={() => state.profileSorting = {
					sortBy: snap.profileSorting.sortBy === "asc" ? "desc" : "asc",
					orderBy: "rarity"
				}}>
				Rarity rank
				<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3.89143 12.5147C3.89143 12.5147 3.39214 10.7856 2.72063 9.54493C2.08965 8.37916 0.72378 6.97525 0.72378 6.97525C0.72378 6.97525 1.89607 8.0723 3.89143 8.0723C5.88679 8.0723 7.05908 6.97525 7.05908 6.97525C7.05908 6.97525 5.64339 8.42361 5.02776 9.54493C4.33879 10.7998 3.89143 12.5147 3.89143 12.5147Z" fill="#937444"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M4.13802 0.936934L4.13802 8.14595L3.6448 8.14595L3.6448 0.936934L4.13802 0.936934Z"/>
				</svg>
			</button>
			<button
				className={`${snap.profileSorting.orderBy === "token" ? "active" : ""} ${snap.profileSorting.orderBy === "token" && snap.profileSorting.sortBy}`}
				onClick={() => state.profileSorting = {
					sortBy: snap.profileSorting.sortBy === "asc" ? "desc" : "asc",
					orderBy: "token"
				}}>
				Token ID
				<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3.89143 12.5147C3.89143 12.5147 3.39214 10.7856 2.72063 9.54493C2.08965 8.37916 0.72378 6.97525 0.72378 6.97525C0.72378 6.97525 1.89607 8.0723 3.89143 8.0723C5.88679 8.0723 7.05908 6.97525 7.05908 6.97525C7.05908 6.97525 5.64339 8.42361 5.02776 9.54493C4.33879 10.7998 3.89143 12.5147 3.89143 12.5147Z" fill="#937444"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M4.13802 0.936934L4.13802 8.14595L3.6448 8.14595L3.6448 0.936934L4.13802 0.936934Z"/>
				</svg>
			</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  p{
    color: #FFF;
    font-size: 14px;
    line-height: 160%;
    text-transform: uppercase;
    margin-right: 10px;
  }
  button{
    width: auto;
    font-size: 14px;
    line-height: 160%;
    color: #937444;
    text-transform: uppercase;
    margin-right: 15px;
    &.asc svg{
      transform: rotate(-180deg);
    }
    svg{
      fill: #937444;
      margin-left: 5px;
    }
    &:hover{
      color: #EFBC6A;
      svg{
        fill: #EFBC6A;
      }
    }
    &.active{
      color: #EFBC6A;
      svg{
        fill: #EFBC6A;
        transition: none;
      }
    }
  }
`
