const sideBarMenu = [
	{
		title: "Add basic field",
		buttons: [
			{
				icon: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="Layer_1"
						data-name="Layer 1"
						viewBox="0 0 24 24"
						width="13px"
						height="13px"
						fill="white"
					>
						<path d="M13.929,15H5v-2H15.93l-2,2Zm-8.929,4h5v-.071l1.929-1.929H5v2ZM24,5v5H2v12H10v2H0V5c0-1.654,1.346-3,3-3h3V0h2V2h8V0h2V2h3c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1v3H22v-3Zm1.122,7.879c.566,.566,.878,1.32,.878,2.121s-.312,1.555-.879,2.122l-6.878,6.878h-4.243v-4.243l6.879-6.878c1.133-1.134,3.109-1.134,4.243,0Zm-1.122,2.121c0-.267-.104-.518-.293-.707-.378-.379-1.037-.378-1.414,0l-6.293,6.292v1.415h1.415l6.292-6.293c.189-.189,.293-.44,.293-.707Z" />
					</svg>
				),
				label: "Text Field",
				element(formReadOnly, value, saveElementValue, index) {
					return (
						<input
							type="text"
							readOnly={formReadOnly}
							value={value}
							onChange={(e) => saveElementValue(index, e.target.value)}
						/>
					);
				},
			},
			{
				icon: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="Layer_1"
						data-name="Layer 1"
						viewBox="0 0 24 24"
						width="13px"
						height="13px"
						fill="white"
					>
						<path d="M.485,8.088l9.862,5.917c.51,.306,1.081,.459,1.653,.459,.571,0,1.143-.153,1.653-.459l9.861-5.917c.301-.181,.485-.506,.485-.857s-.184-.677-.485-.857L13.654,.456c-1.021-.613-2.287-.613-3.307,0L.485,6.373c-.301,.181-.485,.506-.485,.857s.184,.677,.485,.857ZM11.376,2.171h0c.384-.23,.863-.23,1.248,0l8.432,5.06-8.432,5.06c-.385,.23-.864,.23-1.249,0L2.944,7.23,11.376,2.171Zm12.624,17.829c0,.553-.448,1-1,1h-2v2c0,.553-.448,1-1,1s-1-.447-1-1v-2h-2c-.552,0-1-.447-1-1s.448-1,1-1h2v-2c0-.553,.448-1,1-1s1,.447,1,1v2h2c.552,0,1,.447,1,1Zm-11.143,3.286c-.188,.312-.519,.485-.858,.485-.175,0-.353-.046-.514-.143L.485,17.029c-.474-.284-.627-.898-.343-1.372,.283-.474,.897-.628,1.372-.343l11,6.6c.474,.284,.627,.898,.343,1.372Zm11-12.196c.284,.474,.131,1.088-.343,1.372l-11,6.6c-.159,.095-.336,.143-.515,.143s-.356-.048-.515-.143L.485,12.462c-.474-.284-.627-.898-.343-1.372,.283-.475,.897-.628,1.372-.343l10.485,6.291,10.485-6.291c.474-.284,1.088-.131,1.372,.343Z" />
					</svg>
				),
				label: "Text Aria",
				element(formReadOnly, value, saveElementValue, index) {
					return (
						<textarea
							readOnly={formReadOnly}
							value={value}
							onChange={(e) => saveElementValue(index, e.target.value)}
						/>
					);
				},
			},
			{
				icon: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="13px"
						height="13px"
						fill="white"
					>
						<g
							id="_01_align_center"
							data-name="01 align center"
						>
							<path d="M21,2H18V0H16V2H8V0H6V2H3A3,3,0,0,0,0,5V24H24V5A3,3,0,0,0,21,2ZM2,5A1,1,0,0,1,3,4H21a1,1,0,0,1,1,1V8H2ZM2,22V10H22V22Z" />
							<rect
								x="15"
								y="13"
								width="2"
								height="2"
							/>
							<rect
								x="11"
								y="13"
								width="2"
								height="2"
							/>
							<rect
								x="7"
								y="13"
								width="2"
								height="2"
							/>
							<rect
								x="15"
								y="17"
								width="2"
								height="2"
							/>
							<rect
								x="11"
								y="17"
								width="2"
								height="2"
							/>
							<rect
								x="7"
								y="17"
								width="2"
								height="2"
							/>
						</g>
					</svg>
				),
				label: "Date/Time",
				element(formReadOnly, value, saveElementValue, index) {
					return (
						<input
							type="datetime-local"
							readOnly={formReadOnly}
							value={value}
							onChange={(e) => saveElementValue(index, e.target.value)}
						/>
					);
				},
			},
		],
	},
	{
		title: "Add advanced field",
		buttons: [
			{
				icon: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="Outline"
						viewBox="0 0 24 24"
						width="13px"
						height="13px"
						fill="white"
					>
						<path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
					</svg>
				),
				label: "E-mail",
				element(formReadOnly, value, saveElementValue, index) {
					return (
						<input
							type="email"
							readOnly={formReadOnly}
							value={value}
							onChange={(e) => saveElementValue(index, e.target.value)}
						/>
					);
				},
			},
			{
				icon: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="Outline"
						viewBox="0 0 24 24"
						width="13px"
						height="13px"
						fill="white"
					>
						<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048A10.211,10.211,0,0,1,16.5,12ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm11.252,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z" />
					</svg>
				),
				label: "URL",
				element(formReadOnly, value, saveElementValue, index) {
					return (
						<input
							type="url"
							readOnly={formReadOnly}
							value={value}
							onChange={(e) => saveElementValue(index, e.target.value)}
						/>
					);
				},
			},
			{
				icon: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="Layer_1"
						data-name="Layer 1"
						viewBox="0 0 24 24"
						width="13px"
						height="13px"
						fill="white"
					>
						<path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z" />
					</svg>
				),
				label: "Phone Number",
				element(formReadOnly, value, saveElementValue, index) {
					return (
						<input
							type="tel"
							readOnly={formReadOnly}
							value={value}
							onChange={(e) => saveElementValue(index, e.target.value)}
						/>
					);
				},
			},
			{
				icon: (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						id="Outline"
						viewBox="0 0 24 24"
						width="13px"
						height="13px"
						fill="white"
					>
						<path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z" />
					</svg>
				),
				label: "Address",
				element(formReadOnly, value, saveElementValue, index) {
					return (
						<input
							type="text"
							readOnly={formReadOnly}
							value={value}
							onChange={(e) => saveElementValue(index, e.target.value)}
						/>
					);
				},
			},
		],
	},
	{
		title: "Edit fields & content",
		buttons: [],
	},
	{
		title: "Data to export",
		buttons: [],
	},
];

export default sideBarMenu;
