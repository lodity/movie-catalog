import { useRef } from 'react';

export const useObserver = async (
	ref: any,
	canLoad: boolean,
	isLoading: boolean,
	callback: any
) => {
	const observer: any = useRef(null);
	if (isLoading) return;
	if (observer.current) {
		observer.current.disconnect();
	}
	let cb = function (entries: any[], observer: any) {
		if (entries[0].isIntersecting && canLoad) {
			callback();
		}
	};

	observer.current = await new IntersectionObserver(cb);
	observer.current.observe(ref.current);
};
