"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Upload, 
  FileText, 
  User, 
  Mail, 
  Phone, 
  School, 
  GraduationCap,
  Clock,
  AlertCircle
} from "lucide-react"

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: connect form submission to Supabase applications table
    // TODO: upload documents to Supabase Storage bucket named application-documents
    // TODO: show generated application code after submission
    // TODO: send confirmation email after submission
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Applications are not yet open. Please check back soon!")
  }

  return (
    <Card className="max-w-3xl mx-auto border-2">
      <CardHeader className="text-center pb-6 border-b">
        <div className="flex justify-center mb-4">
          <Badge className="bg-gold/10 text-gold hover:bg-gold/20 border-gold/30 px-4 py-1">
            <Clock className="h-3 w-3 mr-2" />
            Applications Opening Soon
          </Badge>
        </div>
        <CardTitle className="font-serif text-2xl">Application Form</CardTitle>
        <CardDescription className="text-base">
          Fill out all required fields to submit your application for review.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-8">
        {/* Notice Banner */}
        <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 mb-8 flex gap-3">
          <AlertCircle className="h-5 w-5 text-gold shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-sm">Applications Opening Soon</p>
            <p className="text-sm text-muted-foreground mt-1">
              We are currently preparing our application system. Please check our announcements 
              page for updates on when applications will open.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <User className="h-5 w-5 text-gold mr-2" />
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input 
                  id="fullName" 
                  placeholder="Enter your full name" 
                  required 
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  required 
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 (876) 000-0000" 
                  required 
                  disabled
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <GraduationCap className="h-5 w-5 text-gold mr-2" />
              Academic Information
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="school">School/Institution *</Label>
                <Input 
                  id="school" 
                  placeholder="Enter your school name" 
                  required 
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gpa">GPA/Grade Average *</Label>
                <Input 
                  id="gpa" 
                  placeholder="e.g., 3.5 or 85%" 
                  required 
                  disabled
                />
              </div>
            </div>
          </div>

          {/* Essay */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <FileText className="h-5 w-5 text-gold mr-2" />
              Personal Essay
            </h3>
            <div className="space-y-2">
              <Label htmlFor="essay">
                Tell us about yourself and why you deserve this scholarship/grant *
              </Label>
              <Textarea 
                id="essay" 
                placeholder="Write your essay here (minimum 250 words)..."
                className="min-h-[200px]"
                required
                disabled
              />
              <p className="text-sm text-muted-foreground">
                Minimum 250 words. Share your story, goals, and how this support will help you.
              </p>
            </div>
          </div>

          {/* Document Uploads */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Upload className="h-5 w-5 text-gold mr-2" />
              Required Documents
            </h3>
            <div className="space-y-4">
              {[
                { id: "idDocument", label: "Valid Identification (ID Card, Passport, etc.)" },
                { id: "transcript", label: "Academic Transcript" },
                { id: "essayDoc", label: "Essay Document (if applicable)" },
                { id: "recommendation", label: "Recommendation Letter" },
              ].map((doc) => (
                <div key={doc.id} className="space-y-2">
                  <Label htmlFor={doc.id}>{doc.label} *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center bg-muted/30">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your file here, or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, DOC, DOCX, JPG, PNG (max 5MB)
                    </p>
                    <Input 
                      id={doc.id}
                      type="file" 
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      disabled
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      disabled
                    >
                      Choose File
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full bg-gold hover:bg-gold-dark text-black font-semibold h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
            <p className="text-sm text-muted-foreground text-center mt-4">
              By submitting, you agree to our terms and conditions and confirm that 
              all information provided is accurate.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
