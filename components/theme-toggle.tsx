"use client"

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/contexts/theme-context'

export function ThemeToggle() {
  try {
    const { theme, toggleTheme } = useTheme()

    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleTheme}
        className="w-9 h-9 p-0 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </Button>
    )
  } catch (error) {
    // Fallback UI if theme context is not available
    return (
      <Button
        variant="ghost"
        size="sm"
        className="w-9 h-9 p-0 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-200"
        disabled
        aria-label="Theme toggle loading"
      >
        <Sun className="h-4 w-4" />
      </Button>
    )
  }
}
