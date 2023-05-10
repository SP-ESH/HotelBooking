import { Nunito } from 'next/font/google';


import Navbar from './components/navbar/Navbar';

import Modal from './components/modals/Modal';
import RentModal from './components/modals/RentModal';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';

import ToasterProvider from './providers/ToasterProvider';

import './globals.css';
import ClientOnly from './components/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';
import SearchModal from './components/modals/SearchModal';

export const metadata = {
  title: 'Airbnb',
  description: 'AirBnb clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
