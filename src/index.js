/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		const { hostname, pathname } = url;
		switch (hostname) {
			case 'github.kresna.me':
				return Response.redirect(`https://github.com/kresnasatya${pathname}`, 301);
			case 'linkedin.kresna.me':
				return Response.redirect(`https://linkedin.com/in/kresnasatya`, 301);
			case 'youtube.kresna.me':
				let redirectUrl = 'https://youtube.com/@kresnasatya';
				switch (pathname) {
					case '/skripsi-bion':
						redirectUrl = 'https://youtu.be/dC9OSWHPi-M'
						break;
					default:
						redirectUrl = redirectUrl;
						break;
				}
				return Response.redirect(redirectUrl, 301);
			default:
				return Response.redirect(`https://kresna.me`, 301);
		}
	}
};
