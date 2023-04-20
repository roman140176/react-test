import React from "react"
import { Link } from "react-router-dom"
import { ILink, LinkItem } from "./LinkItem"

export const Header = (): JSX.Element => {
	const links: ILink[] = [
		{ id: 1, name: "Home", to: "/" },
		{ id: 2, name: "Favourites", to: "/favourites" },
	]
	return (
		<header className="py-4">
			<div className="container mx-auto">
				<div className="header__flex flex flex-wrap items-center justify-between">
					<Link to="/" className="font-bold text-2xl">
						LOGO
					</Link>
					<ul className="grid grid-flow-col gap-2 uppercase text-sky-400 font-semibold">
						{links.map((link) => (
							<li key={link.id}>
								<LinkItem link={link} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	)
}
