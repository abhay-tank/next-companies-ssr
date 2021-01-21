import React, { useEffect, useState } from "react";
import fetchData from "../../helper/fetchData";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
function Navbar(props) {
	let [links, setLinks] = useState([]);
	let [error, setError] = useState(null);
	useEffect(async () => {
		if (!links.length) {
			try {
				const url = "https://abhay-tank.github.io/json-server/navbarData.json";
				let data = await fetchData(url);
				setLinks(data);
			} catch (err) {
				console.error(err);
				if (!error) {
					setError(error);
				}
			}
		}
	}, []);
	if (error) {
		return <h1>Error fetching data</h1>;
	} else {
		return (
			<div className={styles["navbarContainer"]}>
				{links.map((link) => {
					return (
						<Link key={link.id} href={link.URL}>
							<div className={styles["navLink"]}>
								<Image
									className={styles["linkImage"]}
									height="60"
									width="60"
									src={link.logoURL}
									alt={link.title}
									title={link.title}
								/>
							</div>
						</Link>
					);
				})}
			</div>
		);
	}
}

export default Navbar;
