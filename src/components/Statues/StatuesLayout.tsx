import React from "react";
import styles from "./statuesLayout.module.scss";
import Statue3 from "../../assets/st1.png";
import Statue2 from "../../assets/st2.png";
import Statue1 from "../../assets/st3.png";
import Pas from "../../assets/pas.png";
import Image from "next/image";
import Link from "next/link";

function StatuesLayout() {
	return (
		<div className={styles.container}>
			<Link
				className={styles.imageContainer}
				target="_blank"
				href="https://www.google.com/maps/place/J%C3%B3zsef+E%C3%B6tv%C3%B6s/@47.498104,19.0448821,17z/data=!3m1!4b1!4m6!3m5!1s0x4741dc3fb3e3b6e5:0x9e62952e0d998b16!8m2!3d47.498104!4d19.047457!16s%2Fg%2F11crzjldwc?entry=ttu"
			>
				<Image className={styles.image} src={Statue1} alt="Statue 1" />

				<div className={styles.title}>
					<span>József Eötvös</span>
				</div>
			</Link>
			<Link
				target="_blank"
				href="https://www.google.com/maps/place/Statue+de+Saint+Vincent/@38.7122175,-9.1301684,20.51z/data=!4m6!3m5!1s0xd1934766857ec4f:0x827438240bf3eff2!8m2!3d38.7122476!4d-9.13022!16s%2Fg%2F11d_1d78dx?entry=ttu"
				className={styles.imageContainer}
			>
				<Image className={styles.image} src={Statue2} alt="Statue 2" />
				<div className={styles.title}>
					<span>Saint-Vincent</span>
				</div>
			</Link>
			<Link
				target="_blank"
				href="https://www.google.com/maps/place/Monument+Maria+Sklodowska+Curie/@52.2536595,21.0055201,15.37z/data=!4m6!3m5!1s0x471ecc71fd8b460b:0x264492013c7bf9da!8m2!3d52.2541785!4d21.0095321!16s%2Fg%2F11c527kbty?entry=ttu"
				className={styles.imageContainer}
			>
				<Image className={styles.image} src={Statue3} alt="Statue 3" />
				<div className={styles.title}>
					<span>Marie Curie</span>
				</div>
			</Link>
			<div className={styles.footbar}>
				<div className={styles.carpet}>
					<Link href="/">
						<Image className={styles.prev} src={Pas} alt="Prev" />
					</Link>
					<Link href="/">
						<Image className={styles.next} src={Pas} alt="Next" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default StatuesLayout;
