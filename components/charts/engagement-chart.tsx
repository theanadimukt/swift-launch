"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EngagementChart() {
  // Simulated chart data
  const data = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 45 },
    { month: "Apr", value: 60 },
    { month: "May", value: 75 },
    { month: "Jun", value: 90 },
  ]

  const maxValue = Math.max(...data.map((d) => d.value))

  return (
    <Card className="border-border/70 bg-card/80 shadow-2xl">
      <CardHeader className="flex flex-col gap-2">
        <Badge variant="secondary" className="w-fit">
          Analytics
        </Badge>
        <CardTitle className="text-2xl font-semibold">Engagement Growth</CardTitle>
        <CardDescription>Track your marketing performance over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.month} className="flex items-center gap-4">
              <div className="w-12 text-sm font-medium text-muted-foreground">{item.month}</div>
              <div className="flex-1">
                <div className="h-8 rounded-lg bg-muted overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-500 flex items-center justify-end pr-2"
                    style={{ width: `${(item.value / maxValue) * 100}%` }}
                  >
                    <span className="text-xs font-semibold text-white">{item.value}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border/50">
          <p className="text-sm text-muted-foreground">
            Your engagement has grown <span className="font-semibold text-foreground">350%</span> over the last 6 months.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
