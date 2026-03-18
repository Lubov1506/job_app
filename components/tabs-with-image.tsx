"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { useState } from "react"

export default function ImgTabs() {
  const [activeTab, setActiveTab] = useState("organize")

  return (
    <section>
      <div className='container mx-auto px-4'>
        <div className='mx-auto max-w-6xl'>
          {/* Tabs */}
          <div className='flex gap-2 justify-center mb-8'>
            <Button
              onClick={() => setActiveTab("organize")}
              className={`rounded-lg  px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === "organize"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } `}
            >
              Organize apps
            </Button>
            <Button
              onClick={() => setActiveTab("hired")}
              className={`rounded-lg  px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === "hired"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } `}
            >
              Get hired
            </Button>
            <Button
              onClick={() => setActiveTab("boards")}
              className={`rounded-lg  px-6 py-3 text-sm font-medium transition-colors ${
                activeTab === "boards"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } `}
            >
              Manage boards
            </Button>
          </div>
          <div className='relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-400 shadow-xl mb-10'>
            {activeTab === "organize" && (
              <Image
                src='/hero-img/hero1.png'
                alt='hero_!'
                width={1200}
                height={800}
              />
            )}
            {activeTab === "hired" && (
              <Image
                src='/hero-img/hero2.png'
                alt='hero_2'
                width={1200}
                height={800}
              />
            )}
            {activeTab === "boards" && (
              <Image
                src='/hero-img/hero3.png'
                alt='hero_3'
                width={1200}
                height={800}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
