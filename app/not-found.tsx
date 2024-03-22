import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {

	return (
		<div className={styles.reactive}>
			<div className={styles.notfound}>
				<svg className={styles.dino} width="264" height="384" viewBox="0 0 264 384" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M169.933 0.933319C164.6 2.39999 156.067 10.8 152.333 18.8C150.733 22 148.733 24.6667 148.067 24.6667C147.267 24.6667 144.067 22.2667 141 19.4667C132.333 11.4667 122.6 7.06666 112.2 6.26666C99.1333 5.33333 98.0667 6.39998 103.4 15.3333C105.8 19.3333 108.2 23.7333 108.733 24.9333C110.2 28.9333 105 27.8667 98.3334 22.8C86.2 13.4667 65.1333 9.33333 55.6667 14.4L51.9333 16.2667L56.6 21.4667C66.7333 32.8 70.4667 40.5333 66.7333 42.8C65.9333 43.3333 57.6667 43.7333 48.4667 43.8667C32.6 44 31.2667 44.2667 24.7333 47.8667C11.4 55.2 11 58.2667 22.7333 62.4C28.7333 64.6667 39 71.7333 39 73.7333C39 74.2667 35.9333 75.4667 32.2 76.2667C22.7333 78.5333 12.7333 85.3333 8.20001 92.5333C2.46668 101.467 2.86668 102 14.0667 102C19.5333 102.133 25 102.8 26.8667 103.867L30.0667 105.6L25.4 107.2C14.3333 110.8 5.66668 118.933 1.80001 129.067L0.333344 132.667L10.7333 132.533C16.8667 132.4 22.3333 132.933 24.2 134L27.4 135.6L26.4667 163.2C25 214.667 22.6 371.067 23.4 373.2C24.6 376.267 40.6 380.533 57 382.267C69.2667 383.6 74.4667 383.467 89 381.6C106.333 379.467 128.067 374 141.933 368.267L149.4 365.333L145.533 352.4C140.067 333.867 132.6 315.6 119 287.333C99.2667 246.533 95.9334 232.4 98.8667 202.8C101.933 171.2 108.067 150.133 115.8 145.2C123.533 140 137 144.267 157.133 158.4C163 162.4 171.533 167.733 176.333 170.133C184.2 174.133 186.067 174.667 196.467 174.667C207.667 174.667 208.067 174.533 217.8 168.533C223.267 165.2 227.8 161.6 228.067 160.533C228.2 159.467 226.733 156.667 224.733 154.4C221.133 150.267 220.2 150 205 148C161.8 142.4 157.533 137.733 195.4 137.733C207.267 137.733 221.8 138.4 227.8 139.2C243.267 141.333 249.267 138.533 255.667 126C260.2 116.933 261.667 111.2 263 99.0667C265.133 78 260.6 64.8 247 52.1333C234.2 40.4 210.467 30.8 185 27.0667C177.267 26 173.667 24.9333 173.667 23.7333C173.667 22.8 175.133 17.6 177 12.4C178.867 7.19999 180.333 2.4 180.333 1.86667C180.333 0.266669 174.6 -0.266681 169.933 0.933319ZM204.467 54.8C209.267 57.2 213.267 62.5333 215.133 68.6667C218.067 78.5333 213.533 89.3333 204.467 94C186.067 103.333 165.667 85.8667 172.867 66.8C177.933 53.6 191.933 48.2667 204.467 54.8ZM93.4 168.933C93.1334 169.867 88.7333 172.8 83.6667 175.333C75 179.733 73.5333 180 62.3333 179.867C49.1333 179.733 35.9333 176 35.2667 172.267C34.8667 170.533 36.4667 170.8 45.2667 173.6C59.6667 178.133 72.3333 177.467 83.6667 171.6C92.6 166.933 94.0667 166.533 93.4 168.933ZM93.6667 204.667C93.6667 205.333 89.1333 208.133 83.6667 210.8C75.2667 214.933 72.3333 215.733 64.7333 215.733C53.8 215.867 35 210.667 35 207.6C35 206.4 35.8 206 37 206.533C45.6667 209.733 55.8 211.867 63.8 211.867C71.9333 211.867 74.4667 211.333 82.4667 207.2C91.4 202.8 93.6667 202.267 93.6667 204.667ZM93.6667 235.333C93.6667 237.2 82.7333 242.933 74.4667 245.333C65.4 248 57.4 247.467 43.8 243.333C38.2 241.6 35 239.867 35 238.667C35 236.267 34.4667 236.133 43.5333 239.333C56.2 243.6 65.4 244.133 75.9333 240.8C80.8667 239.333 86.4667 236.8 88.3334 235.467C91.4 232.933 93.6667 232.933 93.6667 235.333ZM94.8667 268.8C90.2 272.4 78.7333 276.533 70.6 277.467C59.4 278.8 35 273.067 35 269.067C35 267.733 35.6667 267.333 37.2667 268C43.8 270.533 60.2 274 65.8 274C73.1333 274 87.2667 269.867 93 266C97.9333 262.8 99.5334 265.2 94.8667 268.8ZM108.733 296C97.1334 304.667 81.4 309.333 67.5333 308.133C51.2667 306.8 31.8 299.467 35.2667 296C35.6667 295.6 40.3333 296.933 45.8 298.933C54.2 302 57.9333 302.533 71.1333 302.533L86.7333 302.667L98.4667 296.667C107 292.4 110.467 291.2 110.733 292.4C111 293.467 110.067 295.067 108.733 296ZM120.733 325.333C116.067 328.933 101.533 335.467 94.0667 337.333C80.3333 340.933 62.7333 339.2 43.4 332.4C37 330.267 35 328.933 35 326.933C35 325.067 35.6667 324.533 37.2667 325.067C65.5333 334.133 79.2667 335.733 93.5333 332C101.933 329.867 114.333 324.267 119.667 320.133C122.067 318.4 122.333 318.4 122.733 320.8C123 322.4 122.067 324.4 120.733 325.333Z"/>
					<path className={styles.blank} d="M169.933 0.933319C164.6 2.39999 156.067 10.8 152.333 18.8C150.733 22 148.733 24.6667 148.067 24.6667C147.267 24.6667 144.067 22.2667 141 19.4667C132.333 11.4667 122.6 7.06666 112.2 6.26666C99.1333 5.33333 98.0667 6.39998 103.4 15.3333C105.8 19.3333 108.2 23.7333 108.733 24.9333C110.2 28.9333 105 27.8667 98.3334 22.8C86.2 13.4667 65.1333 9.33333 55.6667 14.4L51.9333 16.2667L56.6 21.4667C66.7333 32.8 70.4667 40.5333 66.7333 42.8C65.9333 43.3333 57.6667 43.7333 48.4667 43.8667C32.6 44 31.2667 44.2667 24.7333 47.8667C11.4 55.2 11 58.2667 22.7333 62.4C28.7333 64.6667 39 71.7333 39 73.7333C39 74.2667 35.9333 75.4667 32.2 76.2667C22.7333 78.5333 12.7333 85.3333 8.20001 92.5333C2.46668 101.467 2.86668 102 14.0667 102C19.5333 102.133 25 102.8 26.8667 103.867L30.0667 105.6L25.4 107.2C14.3333 110.8 5.66668 118.933 1.80001 129.067L0.333344 132.667L10.7333 132.533C16.8667 132.4 22.3333 132.933 24.2 134L27.4 135.6L26.4667 163.2C25 214.667 22.6 371.067 23.4 373.2C24.6 376.267 40.6 380.533 57 382.267C69.2667 383.6 74.4667 383.467 89 381.6C106.333 379.467 128.067 374 141.933 368.267L149.4 365.333L145.533 352.4C140.067 333.867 132.6 315.6 119 287.333C99.2667 246.533 95.9334 232.4 98.8667 202.8C101.933 171.2 108.067 150.133 115.8 145.2C123.533 140 137 144.267 157.133 158.4C163 162.4 171.533 167.733 176.333 170.133C184.2 174.133 186.067 174.667 196.467 174.667C207.667 174.667 208.067 174.533 217.8 168.533C223.267 165.2 227.8 161.6 228.067 160.533C228.2 159.467 226.733 156.667 224.733 154.4C221.133 150.267 220.2 150 205 148C161.8 142.4 157.533 137.733 195.4 137.733C207.267 137.733 221.8 138.4 227.8 139.2C243.267 141.333 249.267 138.533 255.667 126C260.2 116.933 261.667 111.2 263 99.0667C265.133 78 260.6 64.8 247 52.1333C234.2 40.4 210.467 30.8 185 27.0667C177.267 26 173.667 24.9333 173.667 23.7333C173.667 22.8 175.133 17.6 177 12.4C178.867 7.19999 180.333 2.4 180.333 1.86667C180.333 0.266669 174.6 -0.266681 169.933 0.933319ZM93.4 168.933C93.1334 169.867 88.7333 172.8 83.6667 175.333C75 179.733 73.5333 180 62.3333 179.867C49.1333 179.733 35.9333 176 35.2667 172.267C34.8667 170.533 36.4667 170.8 45.2667 173.6C59.6667 178.133 72.3333 177.467 83.6667 171.6C92.6 166.933 94.0667 166.533 93.4 168.933ZM93.6667 204.667C93.6667 205.333 89.1333 208.133 83.6667 210.8C75.2667 214.933 72.3333 215.733 64.7333 215.733C53.8 215.867 35 210.667 35 207.6C35 206.4 35.8 206 37 206.533C45.6667 209.733 55.8 211.867 63.8 211.867C71.9333 211.867 74.4667 211.333 82.4667 207.2C91.4 202.8 93.6667 202.267 93.6667 204.667ZM93.6667 235.333C93.6667 237.2 82.7333 242.933 74.4667 245.333C65.4 248 57.4 247.467 43.8 243.333C38.2 241.6 35 239.867 35 238.667C35 236.267 34.4667 236.133 43.5333 239.333C56.2 243.6 65.4 244.133 75.9333 240.8C80.8667 239.333 86.4667 236.8 88.3334 235.467C91.4 232.933 93.6667 232.933 93.6667 235.333ZM94.8667 268.8C90.2 272.4 78.7333 276.533 70.6 277.467C59.4 278.8 35 273.067 35 269.067C35 267.733 35.6667 267.333 37.2667 268C43.8 270.533 60.2 274 65.8 274C73.1333 274 87.2667 269.867 93 266C97.9333 262.8 99.5334 265.2 94.8667 268.8ZM108.733 296C97.1334 304.667 81.4 309.333 67.5333 308.133C51.2667 306.8 31.8 299.467 35.2667 296C35.6667 295.6 40.3333 296.933 45.8 298.933C54.2 302 57.9333 302.533 71.1333 302.533L86.7333 302.667L98.4667 296.667C107 292.4 110.467 291.2 110.733 292.4C111 293.467 110.067 295.067 108.733 296ZM120.733 325.333C116.067 328.933 101.533 335.467 94.0667 337.333C80.3333 340.933 62.7333 339.2 43.4 332.4C37 330.267 35 328.933 35 326.933C35 325.067 35.6667 324.533 37.2667 325.067C65.5333 334.133 79.2667 335.733 93.5333 332C101.933 329.867 114.333 324.267 119.667 320.133C122.067 318.4 122.333 318.4 122.733 320.8C123 322.4 122.067 324.4 120.733 325.333Z"/>
					<path className={styles.eye} d="M194.733 75.4667C189.933 78.2667 192.6 86 198.333 86C203.933 86 206.2 80.1333 202.2 76.1333C199.8 73.7333 197.933 73.4667 194.733 75.4667Z"/>
				</svg>
				<h2>Page not found</h2>
				<div>Currently sharenotoparty is under active development.<br />Try again later, or go to <Link href="/">homepage</Link>.</div>
			</div>
		</div>
	)
}