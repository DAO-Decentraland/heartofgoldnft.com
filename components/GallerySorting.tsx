import styled from "styled-components";
import {state} from "state";
import {useState} from "react";
import {useSnapshot} from "valtio";
import axios from "axios";

export default function GallerySorting() {
	const snap = useSnapshot(state)
	const [id, setId] = useState("")
	const onHandleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault()
		if (id.length > 0) {
			axios.get(`/api/gallery/${id}`)
				.then(r => state.galleryArray = r.data.data)
				.catch(error => console.log(error))
		}
	}
	
	const onHandleChange = (e: string) => {
		setId(e)
		if (e.length === 0) {
			axios.get("/api/gallery", {
				params: {
					page: snap.galleryPage,
					limit: 12,
					filter: JSON.stringify(snap.galleryFilters),
					sorting: JSON.stringify(snap.gallerySorting)
				}})
				.then(r => state.galleryArray = r.data.data)
				.catch(error => console.log(error))
		}
	}
	
	return (
		<Wrapper className="gallery_sorting">
			<form onSubmit={onHandleSubmit}>
				<button><img src="/pic/search-icon.svg" alt="Search by id"/></button>
				<input
					placeholder="Search by id"
					min={1}
					max={process.env.TOTAL_TOKENS}
					type="number"
					value={id}
					onChange={(e) => onHandleChange(e.target.value)}
					required={true}
					onWheel={e => e.currentTarget.blur()}
				/>
			</form>
			<div className="sort_filters">
				<p>Sort by:</p>
				<button
					className={`${snap.gallerySorting.orderBy === "rarity" ? "active" : ""} ${snap.gallerySorting.orderBy === "rarity" && snap.gallerySorting.sortBy}`}
					onClick={() => state.gallerySorting = {
					sortBy: snap.gallerySorting.sortBy === "asc" ? "desc" : "asc",
					orderBy: "rarity"
				}}>
					Rarity rank
					<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.89143 12.5147C3.89143 12.5147 3.39214 10.7856 2.72063 9.54493C2.08965 8.37916 0.72378 6.97525 0.72378 6.97525C0.72378 6.97525 1.89607 8.0723 3.89143 8.0723C5.88679 8.0723 7.05908 6.97525 7.05908 6.97525C7.05908 6.97525 5.64339 8.42361 5.02776 9.54493C4.33879 10.7998 3.89143 12.5147 3.89143 12.5147Z" fill="#937444"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M4.13802 0.936934L4.13802 8.14595L3.6448 8.14595L3.6448 0.936934L4.13802 0.936934Z"/>
					</svg>
				</button>
				<button
					className={`${snap.gallerySorting.orderBy === "token" ? "active" : ""} ${snap.gallerySorting.orderBy === "token" && snap.gallerySorting.sortBy}`}
					onClick={() => state.gallerySorting = {
					sortBy: snap.gallerySorting.sortBy === "asc" ? "desc" : "asc",
					orderBy: "token"
				}}>
					Token ID
					<svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.89143 12.5147C3.89143 12.5147 3.39214 10.7856 2.72063 9.54493C2.08965 8.37916 0.72378 6.97525 0.72378 6.97525C0.72378 6.97525 1.89607 8.0723 3.89143 8.0723C5.88679 8.0723 7.05908 6.97525 7.05908 6.97525C7.05908 6.97525 5.64339 8.42361 5.02776 9.54493C4.33879 10.7998 3.89143 12.5147 3.89143 12.5147Z" fill="#937444"/>
						<path fillRule="evenodd" clipRule="evenodd" d="M4.13802 0.936934L4.13802 8.14595L3.6448 8.14595L3.6448 0.936934L4.13802 0.936934Z"/>
					</svg>
				</button>
			</div>
			<button className="filter_button" onClick={() => state.galleryFiltersModal = true}>
				<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M5.31738 10.2363C5.01369 10.0606 4.67634 9.93666 4.31738 9.87644L4.31738 0.63623C4.31738 0.360088 4.09353 0.13623 3.81738 0.13623C3.54124 0.13623 3.31738 0.360088 3.31738 0.63623L3.31738 9.87644C2.95842 9.93666 2.62107 10.0606 2.31738 10.2363C1.42068 10.755 0.817383 11.7245 0.817383 12.835C0.817383 13.9454 1.42068 14.9149 2.31738 15.4336C2.62107 15.6093 2.95842 15.7333 3.31738 15.7935V17.6362C3.31738 17.9124 3.54124 18.1362 3.81738 18.1362C4.09352 18.1362 4.31738 17.9124 4.31738 17.6362V15.7935C4.67634 15.7333 5.01369 15.6093 5.31738 15.4336C6.21408 14.9149 6.81738 13.9454 6.81738 12.835C6.81738 11.7245 6.21408 10.755 5.31738 10.2363ZM3.87359 14.8342C4.95217 14.8044 5.81738 13.9207 5.81738 12.835C5.81738 11.7447 4.94503 10.8582 3.86025 10.8354C3.84601 10.8351 3.83172 10.835 3.81738 10.835C3.79926 10.835 3.7812 10.8352 3.76323 10.8357C2.68369 10.8644 1.81738 11.7485 1.81738 12.835C1.81738 13.9252 2.68974 14.8117 3.77451 14.8345C3.78876 14.8348 3.80305 14.835 3.81738 14.835C3.8362 14.835 3.85494 14.8347 3.87359 14.8342ZM11.3174 3.53758C11.0137 3.3619 10.6763 3.23793 10.3174 3.17771V0.63623C10.3174 0.360088 10.0935 0.13623 9.81738 0.13623C9.54124 0.13623 9.31738 0.360088 9.31738 0.63623L9.31738 3.17771C8.95842 3.23793 8.62107 3.3619 8.31738 3.53758C7.42068 4.05629 6.81738 5.02581 6.81738 6.13623C6.81738 7.24665 7.42068 8.21617 8.31738 8.73488C8.62107 8.91056 8.95842 9.03453 9.31738 9.09475V17.6362C9.31738 17.9124 9.54124 18.1362 9.81738 18.1362C10.0935 18.1362 10.3174 17.9124 10.3174 17.6362L10.3174 9.09475C10.6763 9.03453 11.0137 8.91056 11.3174 8.73488C12.2141 8.21617 12.8174 7.24665 12.8174 6.13623C12.8174 5.02581 12.2141 4.05629 11.3174 3.53758ZM9.87276 8.13549C10.9517 8.10616 11.8174 7.22228 11.8174 6.13623C11.8174 5.04599 10.945 4.15949 9.86025 4.13668C9.84601 4.13638 9.83172 4.13623 9.81738 4.13623C9.79947 4.13623 9.78163 4.13646 9.76386 4.13693C8.68403 4.16529 7.81738 5.04956 7.81738 6.13623C7.81738 7.22647 8.68974 8.11297 9.77451 8.13578C9.78876 8.13608 9.80305 8.13623 9.81738 8.13623C9.83592 8.13623 9.85438 8.13598 9.87276 8.13549ZM17.3174 10.2363C17.0137 10.0606 16.6763 9.93666 16.3174 9.87644V0.63623C16.3174 0.360088 16.0935 0.13623 15.8174 0.13623C15.5412 0.13623 15.3174 0.360088 15.3174 0.63623L15.3174 9.87644C14.9584 9.93666 14.6211 10.0606 14.3174 10.2363C13.4207 10.755 12.8174 11.7245 12.8174 12.835C12.8174 13.9454 13.4207 14.9149 14.3174 15.4336C14.6211 15.6093 14.9584 15.7333 15.3174 15.7935V17.6362C15.3174 17.9124 15.5412 18.1362 15.8174 18.1362C16.0935 18.1362 16.3174 17.9124 16.3174 17.6362V15.7935C16.6763 15.7333 17.0137 15.6093 17.3174 15.4336C18.2141 14.9149 18.8174 13.9454 18.8174 12.835C18.8174 11.7245 18.2141 10.755 17.3174 10.2363ZM15.8716 14.8342C16.9511 14.8055 17.8174 13.9214 17.8174 12.835C17.8174 11.7447 16.945 10.8582 15.8603 10.8354C15.846 10.8351 15.8317 10.835 15.8174 10.835C15.7989 10.835 15.7805 10.8352 15.7622 10.8357C14.6832 10.8649 13.8174 11.7488 13.8174 12.835C13.8174 13.9252 14.6897 14.8117 15.7745 14.8345C15.7888 14.8348 15.803 14.835 15.8174 14.835C15.8355 14.835 15.8536 14.8347 15.8716 14.8342Z"/>
				</svg>
				Filters
			</button>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
	margin-top: 60px;
	.sort_filters{
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
	}
  .filter_button{
    width: auto;
    color: #FFF;
    font-size: 14px;
    line-height: 160%;
    text-transform: uppercase;
    &:hover{
      color: #EFBC6A;
      svg{
        fill: #EFBC6A;
      }
    }
    svg{
      fill: #FFFFFF;
      margin-right: 8px;
      transition: all .3s ease-in-out;
    }
  }
	form{
		display: flex;
		align-items: center;
    width: auto;
		input{
      width: 100px;
      color: #FFF;
      font-size: 14px;
      line-height: 160%;
			margin-left: 10px;
      &::-webkit-input-placeholder {color:#fff;}
      &::-moz-placeholder          {color:#fff;}/* Firefox 19+ */
      &:-moz-placeholder           {color:#fff;}/* Firefox 18- */
      &:-ms-input-placeholder      {color:#fff;}
		}
		button{
      width: auto;
		}
	}
`
