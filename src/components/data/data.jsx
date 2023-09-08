import React from "react";

const Data = ({ formContent }) => {
	return (
		<div className="form">
			{formContent.map(({ label, value }, index) => (
				<DataItem
					key={index}
					label={label}
					value={value}
				/>
			))}
		</div>
	);
};

export default Data;

const DataItem = ({ label, value }) => {
	return (
		<div>
			{label}: {value}
		</div>
	);
};
