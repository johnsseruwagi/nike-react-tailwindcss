const Button = ({ label, iconUrl }) => {
	return (
		<button className="border-2 bg-coral-red text-white flex justify-center items-center px-7 py-3 gap-2 rounded-full border-coral-red font-montserrat text-lg leading-none ">
			{label}
			<img
				src={iconUrl}
				alt="arrow right icon"
				className=" rounded-full ml-2 w-5 h-5  "
			/>
		</button>
	);
};
export default Button;
