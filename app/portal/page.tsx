'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Lock, Loader2, FileText, BarChart3, MessageSquare, Workflow } from 'lucide-react'

export default function PortalPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For now, just show a message - no demo credentials
    setError('Please contact info@cliqk.com for portal access.')
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Simple Header */}
      <nav className="bg-white border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="CLIQK"
              width={100}
              height={23}
              className="h-5 w-auto"
              priority
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to CLIQK
          </Link>
        </div>
      </nav>

      <div className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Branding & Features */}
            <div>
              <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-4">
                Client Access
              </p>
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                CLIQK Consulting Portal
              </h1>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Secure workspace for active engagements. Review deliverables, track project progress,
                test workflows, and collaborate on strategy in real-time.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <FileText className="w-5 h-5 text-neutral-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Project Deliverables</p>
                    <p className="text-sm text-neutral-500">Documents, reports & artifacts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <BarChart3 className="w-5 h-5 text-neutral-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Progress Tracking</p>
                    <p className="text-sm text-neutral-500">Milestones & status updates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <Workflow className="w-5 h-5 text-neutral-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Workflow Testing</p>
                    <p className="text-sm text-neutral-500">Try automations & agents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <MessageSquare className="w-5 h-5 text-neutral-400 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Direct Communication</p>
                    <p className="text-sm text-neutral-500">Secure messaging & feedback</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-neutral-500">
                Portal access is provided to active consulting clients.
                <Link href="mailto:info@cliqk.com" className="text-neutral-900 hover:underline ml-1">
                  Contact us
                </Link> to discuss an engagement.
              </p>
            </div>

            {/* Right side - Login Form */}
            <div>
              <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-6 h-6 text-neutral-400" />
                  </div>
                  <h2 className="text-xl font-medium mb-1">Client Sign In</h2>
                  <p className="text-sm text-neutral-500">
                    Access your project workspace
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent disabled:bg-neutral-50 disabled:text-neutral-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent disabled:bg-neutral-50 disabled:text-neutral-400"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-neutral-600 bg-neutral-100 p-3 rounded-lg">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-neutral-900 text-white px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors disabled:bg-neutral-400 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-neutral-100 text-center">
                  <p className="text-sm text-neutral-500">
                    Need access?{' '}
                    <Link href="mailto:info@cliqk.com" className="text-neutral-900 hover:underline">
                      Contact us
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-6 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center text-sm text-neutral-500">
          <p>CLIQK Digital LLC · Est. 2004 · Technology consulting, software development, marketing services, and systems integration.</p>
        </div>
      </footer>
    </main>
  )
}
