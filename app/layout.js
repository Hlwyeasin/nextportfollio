// ################ Import the font functions########################
import { Outfit, Ovo } from 'next/font/google';
import './globals.css';

// ############ Call them at the top level################
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const ovo = Ovo({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata = {
  title: 'Portfollio - yeasinChowdhuriy',
  description: '',
};

export default function RootLayout({ children }) {
  return (

    <html lang="en" className='scroll-smooth dark'>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme  dark:text-red`}
      >
        {children}
      </body>
    </html>
  );
}


