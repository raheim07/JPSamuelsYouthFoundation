"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Search, 
  Filter, 
  Eye, 
  Clock,
  CheckCircle,
  XCircle,
  FileText,
  Download,
  AlertCircle
} from "lucide-react"

// TODO: fetch applications from Supabase
// TODO: update application status in Supabase
// TODO: view uploaded documents from private Supabase Storage

type ApplicationStatus = "pending" | "under-review" | "accepted" | "rejected"

interface Application {
  id: string
  applicationCode: string
  name: string
  email: string
  school: string
  gpa: string
  status: ApplicationStatus
  submittedDate: string
  documents: string[]
}

// Sample data for UI demonstration
const sampleApplications: Application[] = [
  {
    id: "1",
    applicationCode: "JPSYF-2024-0001",
    name: "Sample Applicant 1",
    email: "applicant1@email.com",
    school: "Wolmer's Boys' School",
    gpa: "3.8",
    status: "pending",
    submittedDate: "2024-01-15",
    documents: ["ID", "Transcript", "Essay", "Recommendation"],
  },
  {
    id: "2",
    applicationCode: "JPSYF-2024-0002",
    name: "Sample Applicant 2",
    email: "applicant2@email.com",
    school: "Campion College",
    gpa: "3.6",
    status: "under-review",
    submittedDate: "2024-01-16",
    documents: ["ID", "Transcript", "Essay"],
  },
  {
    id: "3",
    applicationCode: "JPSYF-2024-0003",
    name: "Sample Applicant 3",
    email: "applicant3@email.com",
    school: "UWI Mona",
    gpa: "3.9",
    status: "accepted",
    submittedDate: "2024-01-10",
    documents: ["ID", "Transcript", "Essay", "Recommendation"],
  },
]

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

export default function AdminApplicationsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null)

  const filteredApplications = sampleApplications.filter((app) => {
    const matchesSearch = 
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.applicationCode.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || app.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleStatusChange = (applicationId: string, newStatus: ApplicationStatus) => {
    // TODO: update application status in Supabase
    alert(`Status updated to ${newStatus} for application ${applicationId}`)
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold">Applications</h1>
        <p className="text-muted-foreground mt-1">
          Review and manage scholarship and grant applications.
        </p>
      </div>

      {/* Notice Banner */}
      <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-8 flex gap-3">
        <AlertCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-sm">Demo Data</p>
          <p className="text-sm text-muted-foreground mt-1">
            The applications shown below are sample data for demonstration purposes. 
            Real applications will appear here once the system is connected to the database.
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or application code..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="under-review">Under Review</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-gold" />
            All Applications ({filteredApplications.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application Code</TableHead>
                  <TableHead>Applicant Name</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden lg:table-cell">School</TableHead>
                  <TableHead className="hidden lg:table-cell">GPA</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Submitted</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell className="font-mono text-sm">
                      {application.applicationCode}
                    </TableCell>
                    <TableCell className="font-medium">{application.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{application.email}</TableCell>
                    <TableCell className="hidden lg:table-cell">{application.school}</TableCell>
                    <TableCell className="hidden lg:table-cell">{application.gpa}</TableCell>
                    <TableCell>
                      <Select
                        value={application.status}
                        onValueChange={(value: ApplicationStatus) => 
                          handleStatusChange(application.id, value)
                        }
                      >
                        <SelectTrigger className="w-[140px]">
                          <Badge className={`${statusConfig[application.status].className} text-xs`}>
                            {statusConfig[application.status].label}
                          </Badge>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="under-review">Under Review</SelectItem>
                          <SelectItem value="accepted">Accepted</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{application.submittedDate}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedApplication(application)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Application Details Modal/Card */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardTitle>Application Details</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setSelectedApplication(null)}>
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Applicant Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Application Code</p>
                  <p className="font-mono font-medium">{selectedApplication.applicationCode}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge className={statusConfig[selectedApplication.status].className}>
                    {statusConfig[selectedApplication.status].label}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Full Name</p>
                  <p className="font-medium">{selectedApplication.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{selectedApplication.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">School</p>
                  <p className="font-medium">{selectedApplication.school}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GPA</p>
                  <p className="font-medium">{selectedApplication.gpa}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Submitted Date</p>
                  <p className="font-medium">{selectedApplication.submittedDate}</p>
                </div>
              </div>

              {/* Documents */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Uploaded Documents</p>
                <div className="grid grid-cols-2 gap-3">
                  {selectedApplication.documents.map((doc, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start"
                      onClick={() => alert(`Viewing ${doc} document`)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      {doc}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4 border-t">
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    handleStatusChange(selectedApplication.id, "accepted")
                    setSelectedApplication(null)
                  }}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Accept
                </Button>
                <Button
                  className="flex-1"
                  variant="destructive"
                  onClick={() => {
                    handleStatusChange(selectedApplication.id, "rejected")
                    setSelectedApplication(null)
                  }}
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Reject
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
