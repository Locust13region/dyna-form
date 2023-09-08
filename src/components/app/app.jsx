import { Route, Routes } from "react-router-dom";
import "./app.css";
import SideBar from "../side-bar";
import Fields from "../fields";
import Data from "../data";
import { useState } from "react";

function App() {
	const [formReadOnly, setFormReadOnly] = useState(true);
	const [formContent, setFormContent] = useState([]);

	const addElement = (element) => {
		const content = [...formContent];
		content.push(element);
		setFormContent(content);
	};
	const saveElementValue = (index, value) => {
		if (value) {
			const content = [...formContent];
			content[index].value = value;
			setFormContent(content);
		}
	};
	const deleteElement = (index) => {
		const content = [...formContent];
		content.splice(index, 1);
		setFormContent(content);
	};
	return (
		<div className="grid">
			<SideBar
				addElement={addElement}
				setFormReadOnly={setFormReadOnly}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Fields
							formContent={formContent}
							formReadOnly={formReadOnly}
							saveElementValue={saveElementValue}
							deleteElement={deleteElement}
						/>
					}
				/>
				<Route
					path="data"
					element={<Data formContent={formContent} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
