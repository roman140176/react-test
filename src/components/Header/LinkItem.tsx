import React, { FC } from "react"
import { Link } from "react-router-dom"

export interface ILink {
	id: number
	name: string
	to: string
}

interface IMenuProps {
	key?: number
	link: ILink
}

export const LinkItem: FC<IMenuProps> = ({ link, key }): JSX.Element => {
	return <Link to={link.to}>{link.name}</Link>
}
