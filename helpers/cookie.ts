export function createCookie({ name, value, days = null, date }: { name: string; value: string; days?: number | null; date?: string }): void {
	let expires = "";
	if (days) {
		const dateNow = new Date();
		dateNow.setTime(dateNow.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + dateNow.toUTCString();
	}
	if (date) {
		const expireDate = new Date(date);
		expires = "; expires=" + expireDate.toUTCString();
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

export function getCookie(name: string): string | null {
	let cookieValue: string | null = null;
	if (document.cookie && document.cookie !== '') {
		const cookies = document.cookie.split(';').map(function (cookie) {
			return cookie.trim();
		});
		const matchingCookies = cookies.filter(function (cookie) {
			return cookie.substring(0, name.length + 1) === (name + '=');
		});
		if (matchingCookies.length > 0) {
			cookieValue = decodeURIComponent(matchingCookies[0].substring(name.length + 1));
		}
	}
	return cookieValue;
}

export function getCookiesFromReq(ctx: { req: { headers: { cookie?: string } } }, name: string | null = null): string | Record<string, string> | null | false {
	if (ctx.req.headers.cookie) {
		const cookies = ctx.req.headers.cookie.split(';').reduce((acc: Record<string, string>, cookie) => {
			const [key, value] = cookie.trim().split('=');
			acc[key] = value;
			return acc;
		}, {});
		if (name) {
			if (cookies[name]) {
				return cookies[name];
			} else return null;
		} else return cookies;
	} else return false;
}

export function deleteCookie(name: string): void {
	document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
}
