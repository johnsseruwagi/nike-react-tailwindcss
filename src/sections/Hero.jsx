import { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets /icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets /images";
import ShoeCard from "../components/ShoeCard";
const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
	return (
		<section
			id="home"
			className="min-h-screen max-container gap-10 w-full flex flex-col xl:flex-row justify-center items-center "
		>
			<div className="relative flex flex-col justify-center items-start xl:w-2/5 w-full padding-x pt-28">
				<h4 className="text-coral-red text-xl font-montserrat">
					Our Summer collections
				</h4>
				<h1 className="text-8xl font-palanquin mt-8 max-sm:text-[72px] max-sm:leading-[82px] font-bold">
					<span className="xl:bg-white relative z-10 pr-10 xl:whitespace-nowrap">
						The New Arrival
					</span>
					<br />
					<span className="text-coral-red mt-3 inline-block">Nike </span>
					Shoes
				</h1>
				<p
					className="text-lg
				mt-8 mb-10 font-montserrat text-slate-gray leading-8"
				>
					Discover stylish Nike arrivals, quality comfort, and innovation for
					your active life.
				</p>
				<Button label="Show Now" iconUrl={arrowRight} />
				<div className="w-full flex flex-wrap justify-start items-start gap-16 mt-20">
					{statistics.map((statistic) => (
						<div key={statistic.label}>
							<h2 className="text-4xl font-palanquin font-bold max-sm:text-[38px]">
								{statistic.value}
							</h2>
							<p className="text-slate-gray font-montserrat leading-7 ">
								{statistic.label}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
				<img
					src={bigShoeImg}
					alt="first big shoe "
					width={610}
					height={500}
					className="object-contain z-10 relative"
				/>
				<div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
					{shoes.map((shoe) => (
						<div key={shoe}>
							<ShoeCard
								imgUrl={shoe}
								changeBigImg={(shoe) => setBigShoeImg(shoe)}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Hero;
