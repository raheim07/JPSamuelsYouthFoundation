"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  User, 
  Mail, 
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  AlertCircle
} from "lucide-react"

type ApplicationStatus = "pending" | "under-review" | "accepted" | "rejected" | null

interface StatusResult {
  applicationCode: string
  applicantName: string
  email: string
  submittedDate: string
  status: ApplicationStatus
}

const statusConfig = {
  pending: {
    label: "Pending",
    icon: Clock,
    className: "bg-yellow-100 text-yellow-800 border-yellow-300",
  },
  "under-review": {
    label: "Under Review",
    icon: Eye,
    className: "bg-blue-100 text-blue-800 border-blue-300",
  },
  accepted: {
    label: "Accepted",
    icon: CheckCircle,
    className: "bg-green-100 text-green-800 border-green-300",
  },
  rejected: {
    label: "Rejected",
    icon: XCircle,
    className: "bg-red-100 text-red-800 border-red-300",
  },
}

// Sample status result for demonstration
const sampleResult: StatusResult = {
  applicationCode: "JPSYF-2024-0001",
  applicantName: "Sample Applicant",
  email: "sample@email.com",
  submittedDate: "January 15, 2024",
  status: "under-review",
}

export default function StatusPage() {
  const [email, setEmail] = useState("")
  const [applicationCode, setApplicationCode] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [result, setResult] = useState<StatusResult | null>(null)
  const [showDemo, setShowDemo] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    
    // TODO: query Supabase applications table using email + application_code
    // TODO: display status result securely
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSearching(false)
    
    // For demo purposes, show the sample result
    setShowDemo(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Application Status
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mt-3 text-balance">
              Check Your Status
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Enter your email and application code to check the status of your application.
            </p>
          </div>
        </section>

        {/* Status Check Section */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-xl mx-auto">
              {/* Search Form */}
              <Card className="border-2 mb-8">
                <CardHeader>
                  <CardTitle className="font-serif text-xl flex items-center">
                    <Search className="h-5 w-5 text-gold mr-2" />
                    Find Your Application
                  </CardTitle>
                  <CardDescription>
                    Enter the details you used when applying.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSearch} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="statusEmail">Email Address</Label>
                      <Input 
                        id="statusEmail"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="applicationCode">Application Code</Label>
                      <Input 
                        id="applicationCode"
                        placeholder="e.g., JPSYF-2024-0001"
                        value={applicationCode}
                        onChange={(e) => setApplicationCode(e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        You received this code in your confirmation email after applying.
                      </p>
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-dark text-black font-semibold"
                      disabled={isSearching}
                    >
                      {isSearching ? "Searching..." : "Check Status"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Demo Notice */}
              {showDemo && (
                <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-6 flex gap-3">
                  <AlertCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Demo Mode</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      The status check system is not yet connected. Below is a sample result 
                      showing how your status will appear once the system is live.
                    </p>
                  </div>
                </div>
              )}

              {/* Sample Status Result */}
              {showDemo && (
                <Card className="border-2 border-gold/30">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-serif text-lg">Application Found</CardTitle>
                      {sampleResult.status && (
                        <Badge className={statusConfig[sampleResult.status].className}>
                          {(() => {
                            const StatusIcon = statusConfig[sampleResult.status].icon
                            return <StatusIcon className="h-3 w-3 mr-1" />
                          })()}
                          {statusConfig[sampleResult.status].label}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Application Code</p>
                        <p className="font-medium font-mono">{sampleResult.applicationCode}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Submitted Date</p>
                        <p className="font-medium flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                          {sampleResult.submittedDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Applicant Name</p>
                        <p className="font-medium flex items-center">
                          <User className="h-4 w-4 mr-1 text-muted-foreground" />
                          {sampleResult.applicantName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium flex items-center">
                          <Mail className="h-4 w-4 mr-1 text-muted-foreground" />
                          {sampleResult.email}
                        </p>
                      </div>
                    </div>

                    {/* Status Message */}
                    <div className="bg-muted/50 rounded-lg p-4 mt-4">
                      <p className="text-sm text-muted-foreground">
                        <strong>Status Update:</strong> Your application is currently under review 
                        by our selection committee. We will notify you via email once a decision 
                        has been made. This process typically takes 4-6 weeks.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Status Legend */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Status Legend</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(statusConfig).map(([key, config]) => (
                    <div key={key} className="flex items-center gap-2">
                      <Badge className={`${config.className} text-xs`}>
                        <config.icon className="h-3 w-3 mr-1" />
                        {config.label}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
