import "./calc.css";
import React, { Component } from "react";
import { cars } from "./data";

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
                <select
                    value={this.state.selectedMake}
                    onChange={(e) => this.setState({ selectedMake: e.target.value })}
                    >
                    <option value="">Odaberi Vozilo</option>
                    {Object.keys(cars).map((make) => (
                        <option key={make} value={make}>
                        {make}
                        </option>
                    ))}
                </select>
                <select
                    value={this.state.selectedModel}
                    onChange={(e) => this.setState({ selectedModel: e.target.value })}
                    >
                    <option value="">Odaberi Model</option>
                    {this.state.selectedMake &&
                        Object.keys(cars[this.state.selectedMake]).map((model) => (
                        <option key={model} value={model}>
                            {model}
                        </option>
                        ))}
                </select>
                <select
                    value={this.state.selectedYear}
                    onChange={(e) => this.setState({ selectedYear: e.target.value })}
                    >
                    <option value="">Odaberi Godinu</option>
                    {this.state.selectedMake &&
                        this.state.selectedModel &&
                        cars[this.state.selectedMake][this.state.selectedModel] &&
                        Object.keys(cars[this.state.selectedMake][this.state.selectedModel]).map(
                        (year) => (
                            <option key={year} value={year}>
                            {year}
                            </option>
                        )
                        )}
                </select>
                <select
                    value={this.state.selectedEngine}
                    onChange={(e) => this.setState({ selectedEngine: e.target.value })}
                    >
                    <option value="">Odaberi Motor</option>
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
                        <option key={engine} value={engine}>
                            {engine}
                        </option>
                        ))}
                </select>
                <button onClick={this.setSelectedCarData}>Istraži Vozilo</button>

                <div>
                    <h2>Selected Car Data</h2>
                    <pre>{JSON.stringify(this.state.selectedCarData, null, 2)}</pre>
                </div>
            </div>
        );
    }
}

export default Calc;