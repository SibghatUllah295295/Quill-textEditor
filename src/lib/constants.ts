import localFont from 'next/font/local';

export const ManropeFont = localFont({
	src: [
		{
			path: '../../public/font/textual.ttf',
			weight: '300',
			style: 'black',
		},
		{
			path: '../../public/font/Roboto-Black.ttf',
			weight: '400',
			style: 'regular',
		},
	],
	variable: '--font-manrope-sans',
	display: 'swap',
});