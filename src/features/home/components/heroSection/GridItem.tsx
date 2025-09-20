interface GridItemProps {
	number: number;
	title: string;
	children: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ number, title, children }) => {
	return (
		<div className="w-full bg-white rounded-md space-y-3 p-6 shadow-lg shadow-purple-100">
			<div className="w-full flex items-center gap-2">
				<span className="bg-muted  text-primary font-bold w-6 aspect-square flex items-center justify-center rounded-sm">
					{number}
				</span>
				<span className="flex text-lg font-medium">{title}</span>
			</div>
			{children}
		</div>
	);
};

export default GridItem;