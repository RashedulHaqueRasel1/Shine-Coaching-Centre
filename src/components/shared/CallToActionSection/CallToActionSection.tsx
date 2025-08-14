"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

type CTAProps = {
  title: string
  subtitle: string
  primaryBtn: { label: string; href: string }
  secondaryBtn: { label: string; href: string }
  bgColor?: string // Custom background classes
}

export default function CallToActionSection({
  title,
  subtitle,
  primaryBtn,
  secondaryBtn,
  bgColor = "bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900",
}: CTAProps) {
  return (
    <section className={`${bgColor} py-16 text-white`}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-blue-100">{subtitle}</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold"
            >
              <Link href={primaryBtn.href}>{primaryBtn.label}</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              <Link href={secondaryBtn.href}>{secondaryBtn.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
