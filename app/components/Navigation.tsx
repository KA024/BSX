'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Upload, Search, User, Moon, Sun, Monitor } from 'lucide-react'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Dispatch, SetStateAction } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface NavigationProps {
  setTheme: Dispatch<SetStateAction<Theme>>
}

export default function Navigation({ setTheme }: NavigationProps) {
  // Remove the useState and useEffect hooks for theme

  //useEffect(() => {
  //  const root = window.document.documentElement
  //  root.classList.remove('light', 'dark')
  //  if (theme === 'system') {
  //    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  //    root.classList.add(systemTheme)
  //  } else {
  //    root.classList.add(theme)
  //  }
  //}, [theme])

  return (
    <nav className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold">SocialSphere</Link>
          <div className="flex-1 max-w-md mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 pr-10 rounded-full border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
              />
              <Search className="absolute right-3 top-2.5 text-muted-foreground" />
            </div>
          </div>
          <div className="flex space-x-6 items-center">
            <Button size="sm" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Upload className="w-5 h-5 mr-1" />
              Upload
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-lg border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  <Monitor className="mr-2 h-4 w-4" />
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}

