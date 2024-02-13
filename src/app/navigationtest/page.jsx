"use client";
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react'

function NavigationPage() {

    // CLIENT SIDE NAVIGATE
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams();

    const q = searchParams.get("q")

    const handleClick = () => {
        console.log("clicked");
        router.push('/')
        // router.back()
        // router.replace('/')
        // router.refresh()
        // router.forward();
    }

  return (
    <div>
        <Link href={"/"} prefetch={false}>Click here</Link>
        <button onClick={handleClick}></button>
    </div>
  )
}

export default NavigationPage