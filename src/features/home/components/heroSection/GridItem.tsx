interface GridItemProps {
	number: number;
	title: string;
	children: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ number, title, children }) => {
	return (
		<div className="w-full bg-white/90 rounded-md space-y-3 p-6">
			<div className="w-full  flex items-center gap-4">
				<span className="bg-muted text-xl text-primary font-bold w-9 aspect-square flex items-center justify-center rounded-full">
					{number}
				</span>
				<p className="flex text-lg lg:text-lg font-semibold">{title}</p>
			</div>
			{children}
		</div>
	);
};

export default GridItem;