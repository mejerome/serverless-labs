import React from "react";
import logoImg from "./images/small_logo.png";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

function Map() {
	return (
		<div className="container">
			<h3 className="text-center">Address and Contact information</h3>

			<div className="row">
				<div className="col-3">
					<img src={logoImg} alt="logo" height="60"></img>
					<h5>
						House 7 City Enclave, Brick Cl Plant Pool Road,
						Abelemkpe Accra GA, Ghana
					</h5>
				</div>
				<div className="col-8 google-map">
					<GoogleMapReact
						bootstrapURLKeys={{ key: "" }}
						defaultCenter={location}
						defaultZoom={17}
					>
						<LocationPin
							lat={location.lat}
							lng={location.lng}
							text={location.address}
						/>
					</GoogleMapReact>
				</div>
			</div>
		</div>
	);
}
const location = {
	address:
		"7, City enclave, Brick Cl Plant Pool Road, Abelemkpe Accra GA, Ghana",
	lat: 5.605767491440582,
	lng: -0.2074396598659667,
};

const LocationPin = ({ text }) => {
	return (
		<div className="pin">
			<Icon icon={locationIcon} className="pin-icon" />
			<p className="pin-text">{text}</p>
		</div>
	);
};
export default Map;
