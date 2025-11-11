import { Zap, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-black" />
              </div>
              <span className="text-2xl font-bold">SwiftLaunch</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
              The fastest way to build your next big idea. Join thousands of developers who trust SwiftLaunch for their projects.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                <Github className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Status</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-300 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400">&copy; 2024 SwiftLaunch. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Terms of Service</Link>
            <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
