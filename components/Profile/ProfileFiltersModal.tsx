import styled from "styled-components";
import array from "public/data/filters.json"
import {state} from "state";
import {useSnapshot} from "valtio";
import {CollectionFilters} from "app-lib/interface/collection";
import Responsive from "helpers/Responsive";
import GallerySortingButtons from "components/Gallery/GallerySortingButtons";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function ProfileFiltersModal() {
	const {asPath} = useRouter()
	const snap = useSnapshot(state)

	useEffect(() => {
		state.profileFiltersModal = false
	}, [asPath]);

	const onHandleChange = (value: string, label: keyof CollectionFilters) => {
		let filteredArray: string[] = [...snap.profileFilters[label]];
		if (filteredArray.find((item: string) => item === value)) {
			filteredArray = filteredArray.filter((item: string) => item !== value);
			state.profileFilters[label] = filteredArray;
		} else {
			filteredArray.push(value);
			state.profileFilters[label] = filteredArray;
		}
	};

	const onHandleClick = () => {
		state.profileFilters = {
			metal: [],
			augmentation: [],
			color: [],
			pattern: [],
			stone: [],
			planet: [],
			star: []
		}
		state.profileFiltersModal = false
	}

	const renderListArray = (array: string[], label: keyof CollectionFilters) => {
		return (
			array.map((item: string, index: number) => {
				return (
					<li
						className={snap.profileFilters[label].find((searchItem: string) => searchItem === item) ? "active" : ""}
						onClick={() => onHandleChange(item, label)}
						key={index}>
						<span/><p>{item}</p>
					</li>
				)
			})
		)
	}
	return (
		<Wrapper className={snap.profileFiltersModal ? "visible" : ""}>
			<div className={`filters_modal ${snap.profileFiltersModal ? "visible" : ""}`}>
				<button
					onClick={() => state.profileFiltersModal = false}
					className="close_filters">close <img src="/pic/close-icon.svg" alt="close"/></button>
				<Responsive width={600} mobile={
					<GallerySortingButtons/>
				}/>
				<div className="filters_list">
					{
						array.map((item: any, index: number) => {
							const label = item.label as keyof CollectionFilters;
							return (
								<div className="filter_item" key={index}>
									<h4>{item.title}</h4>
									<ul className="filter_selects">{renderListArray(item.array, label)}</ul>
								</div>
							);
						})
					}
				</div>
				<button
					onClick={onHandleClick}
					className="clear_filters">Clear all filters</button>
			</div>
			<div onClick={() => state.profileFiltersModal = false} className="overlay"/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	position: fixed;
  width: 100%;
	height: 100%;
	top: 0;
	left: 0;
  z-index: 999999;
	opacity: 0;
	visibility: hidden;
  transition: all .3s ease-in-out;
  @media only screen and (max-width: 600px) {
    background: #0D0D0D;
  }
	&.visible{
		opacity: 1;
    visibility: visible;
    transition: all .3s ease-in-out;
		.overlay{
      background: rgba(0, 0, 0, .4);
      transition: all .3s ease-in-out;
		}
	}
	.overlay{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
    z-index: 10;
		background: rgba(0, 0, 0, 0);
    transition: all .3s ease-in-out;
	}
	.filters_modal{
    position: fixed;
    width: 500px;
    height: 100%;
    top: 0;
    right: -500px;
    background: #0D0D0D;
    padding: 35px 70px;
    overflow-y: auto;
    z-index: 99999999;
    transition: all .3s ease-in-out;
    @media only screen and (max-width: 600px) {
      width: 100%;
      right: -100%;
	    padding: 30px;
    }
    &::-webkit-scrollbar { width: 3px; height: 3px; opacity: 0; visibility: hidden}
    &.visible{
      right: 0;
      transition: all .3s ease-in-out;
    }
	}
	.close_filters{
		width: auto;
		margin-left: auto;
		color: #B29E77;
		text-align: center;
		font-size: 14px;
		font-weight: 300;
		line-height: 100%;
		img{
			margin-left: 10px;
		}
	}
	.filter_item{
		margin-bottom: 80px;
		&:last-child{
			margin-bottom: 0;
		}
	}
	.filters_list{
		margin-top: 20px;
    @media only screen and (max-width: 600px) {
	    margin-top: 40px;
    }
	}
	h4{
		color: #FFF;
		font-family: "Graphik", sans-serif;
		font-size: 18px;
		font-weight: 400;
		line-height: 160%;
		text-transform: uppercase;
	}
	.filter_selects{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 40px;
		margin-bottom: -15px;
		li{
			width: calc(50% - 20px);
			display: flex;
			align-items: center;
			margin-bottom: 15px;
			cursor: pointer;
			&.active{
				p{
          color: #EFBC6A;
          transition: all .3s ease-in-out;
				}
        span {
          border: 1px solid #EFBC6A;
          transition: all .3s ease-in-out;
	        &:before{
            width: 14px;
            height: 14px;
            background: #EFBC6A;
            transition: all .3s ease-in-out;
	        }
        }
			}
			&:hover{
				p{
					color: #EFBC6A;
					transition: all .3s ease-in-out;
				}
				span{
					border: 1px solid #EFBC6A;
					transition: all .3s ease-in-out;
				}
			}
			p{
				width: calc(100% - 24px);
				padding-left: 20px;
				color: #937444;
				font-size: 18px;
				line-height: 160%;
				transition: all .3s ease-in-out;
			}
			span{
				border: 1px solid #937444;
				width: 24px;
				height: 24px;
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all .3s ease-in-out;
				position: relative;
				&:before{
					content: "";
          width: 5px;
          height: 5px;
          background: transparent;
          transition: all .3s ease-in-out;
				}
			}
		}
	}
	.clear_filters{
    width: auto;
		margin-top: 80px;
    color: #EFBC6A;
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
		border-bottom: 1px dashed #EFBC6A;
	}
	.sort_filters{
    @media only screen and (max-width: 600px) {
	    margin-top: 30px;
    }
	}
`
