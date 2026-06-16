"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Trophy, 
  Plus, 
  Edit, 
  Trash2, 
  GraduationCap,
  AlertCircle,
  Award,
  User
} from "lucide-react"

interface Recipient {
  id: string
  name: string
  school: string
  program: string
  year: string
  bio: string
}

// Sample recipients for UI demonstration (empty to show "coming soon" state)
const sampleRecipients: Recipient[] = []

export default function AdminRecipientsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [name, setName] = useState("")
  const [school, setSchool] = useState("")
  const [program, setProgram] = useState("")
  const [year, setYear] = useState("")
  const [bio, setBio] = useState("")

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: save recipient to Supabase
    alert("Recipient added! (Demo mode)")
    setShowCreateForm(false)
    setName("")
    setSchool("")
    setProgram("")
    setYear("")
    setBio("")
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold">Recipients</h1>
          <p className="text-muted-foreground mt-1">
            Manage scholarship and grant recipients.
          </p>
        </div>
        <Button 
          className="bg-gold hover:bg-gold-dark text-black"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Recipient
        </Button>
      </div>

      {/* Notice Banner */}
      <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-8 flex gap-3">
        <AlertCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-sm">Demo Mode</p>
          <p className="text-sm text-muted-foreground mt-1">
            Recipient management is in preview mode. Add recipients once scholarship 
            awards have been made.
          </p>
        </div>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <Card className="mb-8 border-2 border-gold/30">
          <CardHeader>
            <CardTitle>Add New Recipient</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    placeholder="Recipient's full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school">School/Institution</Label>
                  <Input 
                    id="school"
                    placeholder="e.g., Wolmer's Boys' School"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="program">Program</Label>
                  <Input 
                    id="program"
                    placeholder="e.g., Scholarship, Grant"
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Award Year</Label>
                  <Input 
                    id="year"
                    placeholder="e.g., 2024"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Short Bio</Label>
                <Textarea 
                  id="bio"
                  placeholder="Brief description of the recipient's achievements..."
                  className="min-h-[100px]"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit" className="bg-gold hover:bg-gold-dark text-black">
                  Add Recipient
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setShowCreateForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Recipients List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-gold" />
            All Recipients ({sampleRecipients.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {sampleRecipients.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-gold/50" />
              </div>
              <h3 className="font-semibold text-lg mb-2">No Recipients Yet</h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Recipients will appear here once scholarship and grant awards have been made. 
                Click &quot;Add Recipient&quot; to add the first recipient.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sampleRecipients.map((recipient) => (
                <div 
                  key={recipient.id}
                  className="border rounded-lg p-4 hover:border-gold/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="font-semibold">{recipient.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <GraduationCap className="h-4 w-4" />
                    {recipient.school}
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Badge className="bg-gold/10 text-gold">{recipient.program}</Badge>
                    <Badge variant="outline">{recipient.year}</Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
