import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer"

export const DefaultLayout = (): JSX.Element => {
	return (
		<>
			<Header />
			<div className="cotent flex-auto">
				<Outlet />
			</div>
			<Footer />
		</>
	)
}
