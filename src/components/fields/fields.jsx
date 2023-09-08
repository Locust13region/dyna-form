import React from "react";

const Fields = ({
	formContent,
	formReadOnly,
	saveElementValue,
	deleteElement,
}) => {
	return (
		<div className="form">
			{formContent &&
				formContent.map(({ label, element, value }, index) => (
					<Form
						key={index}
						index={index}
						label={label}
						element={element}
						value={value}
						formReadOnly={formReadOnly}
						saveElementValue={saveElementValue}
						deleteElement={deleteElement}
					/>
				))}
		</div>
	);
};

export default Fields;

const Form = ({
	label,
	element,
	value,
	formReadOnly,
	saveElementValue,
	deleteElement,
	index,
}) => {
	const title = formReadOnly ? (
		<span>{label}</span>
	) : (
		<>
			<span>{label}</span>
			<span
				className="delete"
				onClick={() => deleteElement(index)}
			>
				&times;
			</span>
		</>
	);
	return (
		<div>
			<div className="label">{title} </div>
			<div className="field">
				{element(formReadOnly, value, saveElementValue, index)}
			</div>
		</div>
	);
};
