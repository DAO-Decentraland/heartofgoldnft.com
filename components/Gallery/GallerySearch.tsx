import styled from "styled-components";
import axios from "axios";
import {state} from "state";
import {useState} from "react";
import {useSnapshot} from "valtio";

interface GallerySearchProps {

}

/**
 * GallerySearch Component
 * @constructor
 */
export default function GallerySearch({}: GallerySearchProps) {
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
		<Wrapper onSubmit={onHandleSubmit}>
			<button><img src="/pic/search-icon.svg" alt="Search by id"/></button>
			<input
				placeholder="Search by ID"
				min={1}
				max={process.env.TOTAL_TOKENS}
				type="number"
				value={id}
				onChange={(e) => onHandleChange(e.target.value)}
				required={true}
				onWheel={e => e.currentTarget.blur()}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.form`
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
`
