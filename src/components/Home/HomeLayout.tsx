import React from "react";
import styles from "./homeLayout.module.scss";
import Image from "next/image";
import Peinture from "../../assets/1.png";
import Livre from "../../assets/2.png";
import Statue from "../../assets/3.png";
import Musique from "../../assets/4.png";
import Nature from "../../assets/5.png";
import Link from "next/link";

function HomeLayout() {
	return (
		<div className={styles.container}>
			<div className={styles.imagesContainer}>
				<div className={styles.imageContainer}>
					<Image className={styles.image} src={Peinture} alt="Peinture" />
					<div className={styles.filter} />
				</div>
				<div className={styles.imageContainer}>
					<Image className={styles.image} src={Livre} alt="Livre" />
					<div className={styles.filter} />
				</div>
				<Link href="/statues" className={styles.imageContainer}>
					<Image className={styles.image} src={Statue} alt="Statue" />
					<div className={styles.filter} />
				</Link>
				<div className={styles.imageContainer}>
					<Image className={styles.image} src={Musique} alt="Musique" />
					<div className={styles.filter} />
				</div>
				<div className={styles.imageContainer}>
					<Image className={styles.image} src={Nature} alt="Nature" />
					<div className={styles.filter} />
				</div>
			</div>
		</div>
	);
}

export default HomeLayout;
