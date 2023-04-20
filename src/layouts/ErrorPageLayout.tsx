import React, { FC, ReactElement, ReactNode } from "react"
import { Link, Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"

export const ErrorPageLayout = (): JSX.Element => {
	return (
		<>
			<div className="container mx-auto pt-8">
				<Link to="/" className="text-4xl text-sky-100 text-center block">
					Back Home Page
				</Link>
			</div>
			<div className="cotent flex-auto">
				<Outlet />
			</div>
			<Footer />
		</>
	)
}
