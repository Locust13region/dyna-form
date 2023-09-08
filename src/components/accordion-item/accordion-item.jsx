import React from "react";
import { Link } from "react-router-dom";
const AccordionItem = ({
	title,
	index,
	buttons,
	selectedItem,
	setActive,
	addElement,
}) => {
	return (
		<>
			<Link
				to={index !== 3 ? "/" : "data"}
				className="accordionItem"
				onClick={() => {
					setActive(index);
				}}
			>
				{title}
			</Link>
			{buttons.length !== 0 && index === selectedItem && (
				<div className="panel">
					{buttons.map(({ icon, label, element }, index) => (
						<ItemPanel
							key={index}
							icon={icon}
							label={label}
							element={element}
							addElement={addElement}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default AccordionItem;

const ItemPanel = ({ icon, label, element, addElement }) => {
	return (
		<div
			onClick={() => {
				addElement({ label: label, element: element, value: "" });
			}}
		>
			{icon} {label}
		</div>
	);
};
