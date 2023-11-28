export const metadata = {
  title: 'Fribble',
  description: 'Dribble Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        Navabar
        <main>
               {children}
        </main>
        Footer
        </body>
    </html>
  )
}
