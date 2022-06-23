import React from "react";
import GradeBox from "./GradeBox";
import "./Body.css";

function Body() {

    const [angle, setAngle] = React.useState(50);
    const [color1, setColor1] = React.useState("black");
    const [color2, setColor2] = React.useState("black");

    const handleChange = (e) => {

        const state = {
            "color1" : {
                execute(){
                    setColor1(e.target.value);
                }
            },

            "color2" : {
                execute(){
                    setColor2(e.target.value);
                }
            },

            "degree" : {
                execute(){
                    setAngle(e.target.value);
                }
            }
        }

        state[e.target.id].execute();
    }

    return (
        <div className="body">
            <main>
                <GradeBox
                    angle={angle}
                    color1={color1}
                    color2={color2}
                />

                <div className="color-picker">
                    <div className="degree-container">
                        <label>Deg:</label>
                        <input id="degree" type="number" onChange={handleChange} value={angle}/>
                    </div>
                    <input id="color1" type="color" onChange={handleChange} value={color1}/>
                    <input id="color2" type="color" onChange={handleChange} value={color2}/>
                </div>

                <div className="output-text">
                    <h3><span className="prop">background:</span> linear-gradient({angle}deg, {color1} , {color2}); <br/>
                        <span className="prop">-moz-background:</span> linear-gradient({angle}deg, {color1}, {color2}); <br/>
                        <span className="prop">-webkit:</span> linear-gradient({angle}deg, {color1}, {color2});
                    </h3>
                </div>

            </main>

        </div>
    )
}

export default Body;