import React, { useState } from "react";

//create your first component
const Home = () => {

	const [luzRoja, setLuzRoja] = useState("")
	const [luzAmarilla, setLuzAmarilla] = useState("")
	const [luzVerde, setLuzVerde] = useState("")

	const encenderLuz = (color) => {
		// console.log(color)
		if (color === "red") {
			setLuzRoja("ligthOn")
			setLuzVerde("")
			setLuzAmarilla("")
		} else if (color === "yellow") {
			setLuzAmarilla("ligthOn")
			setLuzRoja("")
			setLuzVerde("")
		} else if (color === "green") {
			setLuzVerde("ligthOn")
			setLuzRoja("")
			setLuzAmarilla("")
		}
	}

	return (
		<div>
			<div className="cable">
			</div>
			<div className="semaforo">
				<div className="luces">
					<div className={`luzRoja ${luzRoja}`} onClick={() => encenderLuz("red")}>
					</div>
					<div className={`luzAmarilla ${luzAmarilla}`} onClick={() => encenderLuz("yellow")}>
					</div>
					<div className={`luzVerde ${luzVerde}`} onClick={() => encenderLuz("green")}>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
