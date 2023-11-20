import styled from "styled-components";
import RcPagination from 'rc-pagination';
import Responsive from "helpers/Responsive";
import Router, {useRouter} from "next/router";
interface PaginationProps {
	total: number | null
	page: number | string
	slug: string
}
export default function Pagination({total, page, slug}: PaginationProps) {
	const {push} = useRouter()
	const onHandleChange = (itemPage: string | number) => {
		if (itemPage !== page) {
			if (slug !== "all") {
				Router.push(`${slug}?page=${itemPage}`)
			} else Router.push(`${slug}?page=${itemPage}`)
		}
	}

	const onHandleClick = () => {
		if (slug !== "all") {
			Router.push(`${slug}?page=${+page + 1}`)
		} else Router.push(`${slug}?page=${+page + 1}`)
	}

	return (
		total && Number(total) > 1 ? (
			<Wrapper className="pagination">
				<Responsive mobile={
					<div className="mobile_more">
						<button onClick={() => push(`${slug}?page=1`)}>First page</button>
						<button onClick={onHandleClick}>Show more</button>
						<button onClick={() => push(`${slug}?page=${total}`)}>Last page</button>
					</div>
				}>
					<RcPagination
						defaultCurrent={Number(page)}
						total={total}
						defaultPageSize={1}
						pageSize={1}
						current={Number(page)}
						showSizeChanger={false}
						onChange={onHandleChange}
						prevIcon={
							<>
								<button
									className="prev"
									disabled={Number(page) === 1}
								>
									<svg width="30" height="14" viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0.264648 7.03072C0.264648 7.03072 3.77046 8.04301 6.28583 9.40448C8.64939 10.6838 11.4958 13.453 11.4958 13.453C11.4958 13.453 9.27155 11.0763 9.27155 7.03072C9.27155 2.98519 11.4958 0.608398 11.4958 0.608398C11.4958 0.608398 8.55926 3.47867 6.28583 4.72684C3.74157 6.1237 0.264648 7.03072 0.264648 7.03072Z" fill="#EFBC6A"/>
										<path fillRule="evenodd" clipRule="evenodd" d="M29.7236 6.53076L9.12221 6.53076V7.53076L29.7236 7.53076L29.7236 6.53076Z"/>
									</svg>
									Previous
								</button>
							</>
						}
						nextIcon={
							<>
								<button
									className="next"
									disabled={+total === +page}>
									Next
									<svg width="30" height="14" viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M29.7236 7.03072C29.7236 7.03072 26.2178 8.04301 23.7025 9.40448C21.3389 10.6838 18.4925 13.453 18.4925 13.453C18.4925 13.453 20.7167 11.0763 20.7167 7.03072C20.7167 2.98519 18.4925 0.608398 18.4925 0.608398C18.4925 0.608398 21.429 3.47867 23.7025 4.72684C26.2467 6.1237 29.7236 7.03072 29.7236 7.03072Z" fill="#EFBC6A"/>
										<path fillRule="evenodd" clipRule="evenodd" d="M0.264648 6.53076L20.8661 6.53076V7.53076L0.264648 7.53076L0.264648 6.53076Z"/>
									</svg>
								</button>
							</>
						}
					/>
				</Responsive>
			</Wrapper>
		) : null
	)
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	button{
		width: auto;
		font-size: 16px;
		line-height: 100%;
		color: #EFBC6A;
		&:disabled{
			cursor: default;
			color: #EFBC6A;
			opacity: .3;
			svg{
				fill: #EFBC6A;
			}
		}
		svg{
			fill: #EFBC6A;
		}
		&.prev{
			margin-right: 30px;
			svg{
				margin-right: 10px;
			}
		}
		&.next{
			margin-left: 30px;
			svg{
				margin-left: 10px;
			}
		}
	}
	ul{
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
	li{
		margin: 0 7px;
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border-radius: 5px;
		font-size: 14px;
		line-height: 0;
		cursor: pointer;
		&.rc-pagination-item-active{
			cursor: default;
			background: #EFBC6A;
			a{
				color: #1D1D1D;
			}
		}
	}
	.rc-pagination-next, .rc-pagination-prev{
		width: auto;
		&.rc-pagination-disabled{
			cursor: default;
		}
	}
	.rc-pagination-options{
		display: none;
	}
	.rc-pagination-jump-prev, .rc-pagination-jump-next{
		cursor: default;
		&:before{
			content: "..."
		}
		button{
			display: none;
		}
	}
	.mobile_more{
		display: flex;
		justify-content: space-between;
		width: 100%;
		button{
			width: auto;
			margin: 0 10px;
		}
	}
`
