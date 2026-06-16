"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Megaphone, 
  Plus, 
  Edit, 
  Trash2, 
  Calendar,
  AlertCircle,
  Eye,
  EyeOff
} from "lucide-react"

interface Announcement {
  id: string
  title: string
  content: string
  category: string
  published: boolean
  createdAt: string
}

// Sample announcements for UI demonstration
const sampleAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Applications Opening Soon",
    content: "We are excited to announce that scholarship applications will be opening soon.",
    category: "Applications",
    published: true,
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "Foundation Launch",
    content: "The Jean Pierre Samuels Youth Foundation is officially launched.",
    category: "News",
    published: true,
    createdAt: "2024-01-10",
  },
]

export default function AdminAnnouncementsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: save announcement to Supabase
    alert("Announcement created! (Demo mode)")
    setShowCreateForm(false)
    setTitle("")
    setContent("")
    setCategory("")
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold">Announcements</h1>
          <p className="text-muted-foreground mt-1">
            Create and manage foundation announcements.
          </p>
        </div>
        <Button 
          className="bg-gold hover:bg-gold-dark text-black"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          <Plus className="h-4 w-4 mr-2" />
          New Announcement
        </Button>
      </div>

      {/* Notice Banner */}
      <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-8 flex gap-3">
        <AlertCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-sm">Demo Mode</p>
          <p className="text-sm text-muted-foreground mt-1">
            Announcement management is in preview mode. Changes will not be saved until 
            the system is connected to the database.
          </p>
        </div>
      </div>

      {/* Create Form */}
      {showCreateForm && (
        <Card className="mb-8 border-2 border-gold/30">
          <CardHeader>
            <CardTitle>Create New Announcement</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreate} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title"
                    placeholder="Announcement title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input 
                    id="category"
                    placeholder="e.g., Applications, News, Scholarships"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea 
                  id="content"
                  placeholder="Write your announcement content..."
                  className="min-h-[150px]"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit" className="bg-gold hover:bg-gold-dark text-black">
                  Publish Announcement
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

      {/* Announcements List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone className="h-5 w-5 text-gold" />
            All Announcements ({sampleAnnouncements.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sampleAnnouncements.map((announcement) => (
              <div 
                key={announcement.id}
                className="border rounded-lg p-4 hover:border-gold/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{announcement.category}</Badge>
                      <Badge className={announcement.published ? "bg-green-100 text-green-800" : "bg-muted"}>
                        {announcement.published ? (
                          <><Eye className="h-3 w-3 mr-1" /> Published</>
                        ) : (
                          <><EyeOff className="h-3 w-3 mr-1" /> Draft</>
                        )}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg">{announcement.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                      {announcement.content}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {announcement.createdAt}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
