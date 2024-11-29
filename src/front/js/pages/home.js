import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {Login} from "../component/login"

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();


	const goMenu = () => {
		navigate("/menu");


	}

	return (
		<div>
			<Login/>
		</div>
	);
};
