import { useEffect } from 'react';

export default function useInfiniteScroll(callback: (page: number) => void, page: number, total: number | null): void {
	useEffect(() => {
		const handleScroll = (): void => {
			const windowHeight: number = window.innerHeight;
			const documentHeight: number = document.documentElement.scrollHeight;
			const scrollTop: number = document.documentElement.scrollTop || document.body.scrollTop;
			if (windowHeight + scrollTop >= documentHeight - 300 && page !== total) {
				callback(page + 1);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [callback, page, total]);
}
