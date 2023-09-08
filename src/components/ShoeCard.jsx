const ShoeCard = ({ imgUrl, changeBigImg, bigShoeImg }) => {
	const handleClick = () => {
		if (bigShoeImg !== imgUrl.bigShoe) {
			changeBigImg(imgUrl.bigShoe);
		}
	};
	return (
		<div
			className={`border-2 rounded-xl ${
				bigShoeImg === imgUrl.bigShoe
					? "border-coral-red"
					: "border-transparent"
			} cursor-pointer max-sm:flex-1`}
			onClick={handleClick}
		>
			<div className=" flex justify-center items-center bg-gray-200 bg-center bg-cover  sm:h-40 rounded-xl max-sm:p-4 ">
				<img
					src={imgUrl.thumbnail}
					alt="image collection"
					width={127}
					height={103}
					className="object-contain"
				/>
			</div>
		</div>
	);
};
export default ShoeCard;
