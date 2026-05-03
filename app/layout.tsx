import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SlackTicket — Convert Slack Threads into Support Tickets',
  description: 'Automatically detect support requests in Slack and create structured tickets in Linear, Jira, or GitHub. Built for small startups.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="566f8d0c-a91c-4e96-aa6a-5522468c8b27"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
