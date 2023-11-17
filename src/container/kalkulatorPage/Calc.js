import "./calc.css";
import React, { Component } from "react";
import { cars } from "./data";
import CountUp from "react-countup";

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMake: "",
            selectedModel: "",
            selectedYear: "",
            selectedEngine: "",
            selectedCarData: null, 
        };
    }

    setSelectedCarData = () => {
        const { selectedMake, selectedModel, selectedYear, selectedEngine } = this.state;
    
        if (selectedMake && selectedModel && selectedYear && selectedEngine) {
          const carData = cars[selectedMake][selectedModel][selectedYear][selectedEngine];
          this.setState({ selectedCarData: carData });
        }
    };

    render() {
        return (
            <div className="calc-container">
                <div className="text-select-container">
                <h1>Istraži <span>Snagu</span> Svog Vozila</h1>
                <div className="first-section">
                    <div className="select-container">
                        <select
                            className="select"
                            value={this.state.selectedMake}
                            onChange={(e) => this.setState({ selectedMake: e.target.value, selectedModel: "", selectedYear: "", selectedEngine: "" })}
                            >
                            <option className="option" value="">Vozilo</option>
                            {Object.keys(cars).map((make) => (
                                <option key={make} value={make}>
                                {make}
                                </option>
                            ))}
                        </select>
                        <select
                            className="select"
                            value={this.state.selectedModel}
                            onChange={(e) => this.setState({ selectedModel: e.target.value, selectedYear: "", selectedEngine: "" })}
                            >
                            <option className="option" value="">Model</option>
                            {this.state.selectedMake &&
                                Object.keys(cars[this.state.selectedMake]).map((model) => (
                                <option className="input" key={model} value={model}>
                                    {model}
                                </option>
                                ))}
                        </select>
                        <select
                            className="select"
                            value={this.state.selectedYear}
                            onChange={(e) => this.setState({ selectedYear: e.target.value, selectedEngine: "" })}
                            >
                            <option className="option" value="">Godina</option>
                            {this.state.selectedMake &&
                                this.state.selectedModel &&
                                cars[this.state.selectedMake][this.state.selectedModel] &&
                                Object.keys(cars[this.state.selectedMake][this.state.selectedModel]).map(
                                (year) => (
                                    <option className="input" key={year} value={year}>
                                    {year}
                                    </option>
                                )
                                )}
                        </select>
                        <select
                            className="select"
                            value={this.state.selectedEngine}
                            onChange={(e) => this.setState({ selectedEngine: e.target.value })}
                            >
                            <option className="option" value="">Motor</option>
                            {this.state.selectedMake &&
                                this.state.selectedModel &&
                                this.state.selectedYear &&
                                cars[this.state.selectedMake][this.state.selectedModel][
                                this.state.selectedYear
                                ] &&
                                Object.keys(
                                cars[this.state.selectedMake][this.state.selectedModel][
                                    this.state.selectedYear
                                ]
                                ).map((engine) => (
                                <option className="input" key={engine} value={engine}>
                                    {engine}
                                </option>
                                ))}
                        </select>

                        <button className="istrazi" onClick={this.setSelectedCarData}>Istraži Vozilo</button>
                    </div>
            
                </div>
                </div>
                

                <div className={this.state.selectedCarData === null ? "" : "second-section"}>
                    {this.state.selectedCarData !== null && 
                    <>
                        <div className="wrapp-pp">
                            <h2>Snaga</h2>
                            <div className="wrapp">
                            
                                <div className="text-broj">
                                    <label>Standardna snaga</label>
                                    <div className="about-count_number">
                                        <CountUp key={1} start={0} end={this.state.selectedCarData.std_power} duration={2} /> ks
                                    </div>
                                </div>

                                <div className="text-broj">
                                    <label>Stage 1 snaga</label>
                                    <div className="about-count_number">
                                        <CountUp key={2} start={0} end={this.state.selectedCarData.tuned_power} duration={2} /> ks
                                    </div>
                                </div>
                            
                                
                                <div className="text-broj">
                                    <label>Razlika</label>
                                    <div className="about-count_number text-accent">
                                        <CountUp key={3} start={0} end={this.state.selectedCarData.tuned_power - this.state.selectedCarData.std_power} duration={2} />+ ks
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="wrapp-pp">
                            <h2>Okretni moment</h2>
                            <div className="wrapp">
                            
                                <div className="text-broj">
                                    <label>Standardni okretni moment</label>
                                    <div className="about-count_number">
                                        <CountUp key={3} start={0} end={this.state.selectedCarData.std_torque} duration={2} /> Nm
                                    </div>
                                </div>
                                
                                <div className="text-broj">
                                    <label>Stage 1 okretni moment</label>
                                    <div className="about-count_number">
                                        <CountUp key={3} start={0} end={this.state.selectedCarData.tuned_torque} duration={2} /> Nm
                                    </div>
                                </div>
                            
                                <div className="text-broj">
                                    <label>Razlika</label>
                                    <div className="about-count_number text-accent">
                                        <CountUp key={3} start={0} end={this.state.selectedCarData.tuned_torque - this.state.selectedCarData.std_torque} duration={2} />+ Nm
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="wrapp-pp">
                            <h2>Specifikacije motora</h2>
                            <div className="wrapp">

                                <div className="text-broj">
                                    <label>Kapacitet cilindra</label>
                                    <div className="about-count_number">
                                        <CountUp key={3} start={0} end={this.state.selectedCarData.cc} duration={2} /> cc
                                    </div>
                                </div>


                                <div className="text-broj">
                                    <label className="ecu">Oznaka ecu</label>
                                    <div className="about-count_number ">{this.state.selectedCarData.Type_ecu}</div>
                                </div> 

                                <div className="text-broj">
                                    <label>Oznaka motora</label>
                                    <div className="about-count_number">{this.state.selectedCarData.Engine_code}</div>
                                </div>
                            </div>
                        </div>
                    </>
                    }
                </div>
            </div>
        );
    }
}

export default Calc;