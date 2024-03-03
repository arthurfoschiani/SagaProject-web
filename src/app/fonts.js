import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({
  weights: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
});


export { montserrat };
