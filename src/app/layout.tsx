import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import clsx from 'clsx'
import { relative } from 'path'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName, createClient } from '@/prismicio'

const mont = Montserrat({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.meta_title,
    description: settings.data.meta_desc,
    // openGraph: {
    //   images: [settings.data.og_image?.url || ""],
    // },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-sky-900 to-indigo-600 text-slate-100'>

      <body className={clsx(mont.className, "relative min-h-screen")}>
        <Header />
        {children}
        <Footer />
        <div className='absolute inset-0 -z-50 max-h-screen background-gradient'></div>
      </body>
      <PrismicPreview repositoryName={repositoryName  }/>
    </html>
  )
}
