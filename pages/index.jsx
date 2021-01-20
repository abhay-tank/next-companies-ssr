import Head from "next/head";
import Image from "next/image";
import fetchData from "../helper/fetchData";
import Navbar from "../components/Navbar/Navbar";
export default function Home(props) {
	if (props.hasError) {
		return <h1>Error loading page</h1>;
	} else {
		let {
			id,
			title,
			logoURL,
			companyName,
			companyTagline,
			backgroundColor,
			sections,
		} = props.data;
		return (
			<div>
				<Head>
					<title key="title">{title}</title>
					<link rel="shortcut icon" type="image/x-icon" href={`/${id}.ico`} />
				</Head>
				<Navbar />
				<div className="container" style={{ backgroundColor: backgroundColor }}>
					<Image src={logoURL} height="300" width="300" alt="logoImage" />
					<h1>{companyName}</h1>
					<h3>{companyTagline}</h3>
				</div>
				{sections.map((section) => {
					return (
						<div
							style={{
								backgroundColor: section.backgroundColor,
								color: section.fontColor,
							}}
							key={section.sectionId}
							className="container section"
						>
							<div className="col">
								<Image
									src={section.bannerImageURL}
									height="500"
									width="500"
									alt="bannerImage"
								/>
							</div>
							<div className="col">
								<h1>{section.title}</h1>
								<h3>{section.subtitle}</h3>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export const getStaticProps = async (context) => {
	const url = "https://abhay-tank.github.io/json-server/surfboardData.json";
	const data = await fetchData(url);
	if (data instanceof Error) {
		return {
			props: {
				hasError: true,
			},
		};
	}
	return {
		props: { data }, // will be passed to the page component as props
	};
};
