import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { 
  Settings, 
  Shield, 
  Mail, 
  Bell,
  Database,
  AlertCircle,
  Lock,
  User
} from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage admin settings and configurations.
        </p>
      </div>

      {/* Notice Banner */}
      <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-8 flex gap-3">
        <AlertCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-sm">Settings Preview</p>
          <p className="text-sm text-muted-foreground mt-1">
            Settings management is in preview mode. These options will be functional 
            once the backend is connected.
          </p>
        </div>
      </div>

      <div className="grid gap-6 max-w-3xl">
        {/* Admin Access */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-gold" />
              Admin Access
            </CardTitle>
            <CardDescription>
              Manage who has access to this admin dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Approved Admin Emails</Label>
              <div className="flex gap-2">
                <Input placeholder="admin@jpsamuelsyouthfoundation.org" disabled />
                <Button variant="outline" disabled>Add</Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Only users with these email addresses can access the admin dashboard.
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-muted/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium">admin@jpsamuelsyouthfoundation.org</p>
                    <p className="text-sm text-muted-foreground">Super Admin</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Authentication */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-gold" />
              Authentication
            </CardTitle>
            <CardDescription>
              Configure authentication settings for the admin area.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Supabase Auth</p>
                <p className="text-sm text-muted-foreground">
                  Use Supabase for admin authentication
                </p>
              </div>
              <Badge variant="outline">
                <Lock className="h-3 w-3 mr-1" />
                Not Configured
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              TODO: Connect Supabase Auth to protect admin routes and restrict access 
              to approved admin emails only.
            </p>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-gold" />
              Notifications
            </CardTitle>
            <CardDescription>
              Configure email notifications for new applications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Notification Email</Label>
              <Input placeholder="notifications@jpsamuelsyouthfoundation.org" disabled />
              <p className="text-sm text-muted-foreground">
                Receive notifications when new applications are submitted.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Database */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-gold" />
              Database Connection
            </CardTitle>
            <CardDescription>
              View database connection status.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Supabase</p>
                <p className="text-sm text-muted-foreground">
                  PostgreSQL database for applications and data
                </p>
              </div>
              <Badge variant="outline">
                <Database className="h-3 w-3 mr-1" />
                Not Connected
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              TODO: Connect Supabase to store applications, announcements, and recipient data.
            </p>
          </CardContent>
        </Card>

        {/* Email Service */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-gold" />
              Email Service
            </CardTitle>
            <CardDescription>
              Configure email service for application confirmations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Email Provider</p>
                <p className="text-sm text-muted-foreground">
                  Send confirmation emails to applicants
                </p>
              </div>
              <Badge variant="outline">
                <Mail className="h-3 w-3 mr-1" />
                Not Configured
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              TODO: Connect email service to send confirmation emails after application submission.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
