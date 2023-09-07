import { headerLogo } from "../assets /images";
import { hamburger } from "../assets /icons";
import { navLinks } from "../constants";
const Nav = () => {
	return (
		<header className="padding-x py-8 z-50 w-full absolute">
			<nav className="flex justify-between max-content items-center">
				<a href="/">
					<img src={headerLogo} alt="Nike logo" width={130} height={29} />
				</a>
				<ul className="flex flex-1 max-lg:hidden justify-center items-center gap-16">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat leading-normal text-lg text-slate-gray"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div className="hidden max-lg:block">
					<img src={hamburger} alt="hamburger menu" width={25} height={25} />
				</div>
			</nav>
		</header>
	);
};
export default Nav;
