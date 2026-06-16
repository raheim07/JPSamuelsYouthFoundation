"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Facebook,
  Instagram,
  Twitter,
  MessageSquare
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@jpsamuelsyouthfoundation.org",
    href: "mailto:info@jpsamuelsyouthfoundation.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Coming Soon",
    href: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jamaica",
    href: null,
  },
]

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: connect contact form to email service or Supabase
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert("Thank you for your message! We will get back to you soon.")
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-black text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mt-3 text-balance">
              Contact Us
            </h1>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message 
              and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have questions about our programs, want to learn more about 
                  the foundation, or are interested in supporting our mission, we&apos;re 
                  here to help.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-10">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-muted-foreground hover:text-gold transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="font-serif text-xl flex items-center">
                    <MessageSquare className="h-5 w-5 text-gold mr-2" />
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input 
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message"
                        placeholder="How can we help you?"
                        className="min-h-[150px]"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-dark text-black font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
