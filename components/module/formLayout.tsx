'use client'

import React from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"

const FormLayout = ({imgSrc , ClassName , children} : {imgSrc : string, ClassName ?: string , children : React.ReactNode}) => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between h-screen max-h-screen">
        
        <section className="remove-scrollbar container">
            <div className={`${ClassName}`}>
                <div className="flex justify-between mb-16">
                    <Image src='/logo.svg' width={161} height={32} alt="logo icon"/>
                    {
                        pathName == '/' ? <span className="text-2xl sm:text-4xl"> 1 / 2</span>
                        : <span className="flex justify-between items-baseline gap-3 text-2xl sm:text-4xl"> 2 / 2 <small className="hidden sm:flex text-sm text-dark-600">almost done.</small></span>
                        
                    } 
                </div>
                {
                    pathName == '/' ? 
                    <section className="space-y-4 mb-10">
                        <h1 className="header">Hi there 👋</h1>
                        <p className="text-dark-700">Schedule your first appointment.</p>
                    </section>
                    :
                    <section className="space-y-4 mb-10">
                        <h1 className="header">Additional Information ✍️</h1>
                        <p className="text-dark-700">Let us know more about yourself.</p>
                    </section>
                }
                <div>
                    {children}
                </div>
                <div className="flex justify-between items-center relative pt-16 pb-5">
                    <small className="text-sm text-dark-600">© 2024 CarePulse</small>
                    {pathName == '/' && <small className="text-sm text-green-500 cursor-pointer">Admin</small>}
               </div>
            </div>
        </section>

        <Image
        src={imgSrc}
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[30%]"/>

    </div>
  )
}

export default FormLayout;