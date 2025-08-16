"use client"

import { useRouter } from "next/navigation"
import { Construction } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UnderDevelopment({ pageName }: { pageName?: string }) {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4 bg-gradient-to-br from-yellow-100 via-white to-yellow-50">
      <Card className="w-full max-w-xl shadow-2xl border border-yellow-200 hover:scale-[1.02] transition-transform duration-300 animate-fadeIn">
        
        <CardHeader className="flex flex-col items-center space-y-3">
          {/* Icon with glowing background */}
          <div className="relative">
            <div className="absolute w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-60 animate-pulse" />
            <Construction className="w-20 h-20 text-yellow-600 relative z-10 animate-bounce" />
          </div>

          {/* Page Title */}
          <CardTitle className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900">
            {pageName ? `${pageName} Page` : "This Page"} is Under Development
          </CardTitle>

          {/* Status Badge */}
          <Badge variant="secondary" className="bg-yellow-200 text-yellow-800 font-medium">
            🚀 Coming Soon
          </Badge>
        </CardHeader>

        <CardContent className="text-center">
          <p className="text-gray-600 mt-2 leading-relaxed">
            We’re putting the final touches on this section.  
            Exciting <span className="font-semibold text-yellow-700">new features</span> are on the way!
          </p>
          <p className="text-gray-500 text-sm mt-1 italic">
            Stay tuned — it will be ready very soon.
          </p>

          {/* Back Button */}
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="mt-6 border-yellow-500 text-yellow-700 font-medium hover:bg-yellow-100 hover:text-yellow-800 transition-all duration-200 cursor-pointer"
          >
            ← Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
