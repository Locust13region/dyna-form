import React from "react";
import { useState } from "react";
import "./side-bar.css";
import AccordionItem from "../accordion-item";
import sideBarMenu from "../menu";

const SideBar = ({ addElement, setFormReadOnly }) => {
	const [selectedItem, setSelectedItem] = useState(0);
	const setActive = (index) => {
		if (index === 2) {
			setSelectedItem(index);
			setFormReadOnly(false);
		} else {
			setSelectedItem(index);
			setFormReadOnly(true);
		}
	};
	return (
		<div className="sideBar">
			<input
				id="search"
				type="text"
				placeholder="Search field(s)"
				readOnly
			></input>
			<div className="accordion">
				{sideBarMenu.map(({ title, buttons }, index) => (
					<AccordionItem
						key={index}
						title={title}
						index={index}
						buttons={buttons}
						selectedItem={selectedItem}
						setActive={setActive}
						addElement={addElement}
					/>
				))}
			</div>
		</div>
	);
};

export default SideBar;
