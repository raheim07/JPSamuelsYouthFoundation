import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FileText, 
  Clock, 
  Eye, 
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  AlertCircle
} from "lucide-react"

// TODO: fetch applications from Supabase

const stats = [
  {
    label: "Total Applications",
    value: "0",
    icon: FileText,
    change: "New",
    changeType: "neutral" as const,
  },
  {
    label: "Pending Review",
    value: "0",
    icon: Clock,
    change: "Awaiting",
    changeType: "warning" as const,
  },
  {
    label: "Under Review",
    value: "0",
    icon: Eye,
    change: "In Progress",
    changeType: "info" as const,
  },
  {
    label: "Accepted",
    value: "0",
    icon: CheckCircle,
    change: "Approved",
    changeType: "success" as const,
  },
]

const changeTypeColors = {
  neutral: "bg-muted text-muted-foreground",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800",
  success: "bg-green-100 text-green-800",
}

export default function AdminDashboardPage() {
  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome to the JP Samuels Youth Foundation admin dashboard.
        </p>
      </div>

      {/* Notice Banner */}
      <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-8 flex gap-3">
        <AlertCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-sm">Dashboard Preview</p>
          <p className="text-sm text-muted-foreground mt-1">
            This is a preview of the admin dashboard. Backend functionality will be 
            connected when the application system is ready.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-gold" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <Badge className={`mt-2 ${changeTypeColors[stat.changeType]}`}>
                {stat.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="hover:border-gold/30 transition-colors cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <FileText className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold">Review Applications</h3>
                <p className="text-sm text-muted-foreground">
                  View and manage submitted applications
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-gold/30 transition-colors cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold">Manage Recipients</h3>
                <p className="text-sm text-muted-foreground">
                  Add and update scholarship recipients
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-gold/30 transition-colors cursor-pointer">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-semibold">Post Announcement</h3>
                <p className="text-sm text-muted-foreground">
                  Create news and announcements
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-gold" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 text-muted-foreground">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="font-medium">No Recent Activity</p>
            <p className="text-sm mt-1">
              Activity will appear here once the application system is live.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
