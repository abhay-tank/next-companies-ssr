import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
export default function RawEngineering(props) {
	if (props.hasError) {
		return <h1>Error loading page</h1>;
	} else {
		let {
			id,
			title,
			logoURL,
			message,
			backgroundColor,
			fontColor,
		} = props.data;
		return (
			<div>
				<Head>
					<title key="title">{title}</title>
					<link rel="shortcut icon" type="image/x-icon" href={`/${id}.ico`} />
				</Head>
				<Navbar />
				<div
					className="container"
					style={{ backgroundColor: backgroundColor, color: fontColor }}
				>
					<Image src={logoURL} height="400" width="600" alt="logoImage" />
					<h1>{message}</h1>
				</div>
			</div>
		);
	}
}

export const getStaticProps = (context) => {
	const data = {
		id: "surfboard_k3y2J4HB_K",
		logoURL: "/404.gif",
		title: "404",
		message: "Looks like you're lost",
		backgroundColor: "#55C5D9",
		fontColor: "#ECEFF2",
	};
	return {
		props: { data }, // will be passed to the page component as props
	};
};
