import { AdminSidebar } from "@/components/admin/admin-sidebar"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Dashboard | JP Samuels Youth Foundation",
  description: "Admin dashboard for managing applications, announcements, and recipients.",
}

// TODO: protect admin routes with Supabase Auth
// TODO: restrict dashboard access to approved admin emails

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-muted/30">
      <AdminSidebar />
      <div className="lg:pl-64">
        {children}
      </div>
    </div>
  )
}
