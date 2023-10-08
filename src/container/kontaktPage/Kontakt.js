import "./kontakt.css";
import React, {useState, useRef, useEffect} from 'react';
import emailjs from '@emailjs/browser';
import { cars } from "../kalkulatorPage/data";
import { uslugeData } from "../../components/usluge/uslugeData";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

const Kontakt = () => {
    const [className, setClassName] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
        setClassName('show-animate');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const form = useRef();

    const [selectedCar, setSelectedCar] = useState({
        selectedMake: "",
        selectedModel: "",
        selectedYear: "",
        selectedEngine: "",
        selectedCarData: null, 
    });

    const toggleFormAdd = () => {
        setDodatnoVozilo(!dodatnoVozilo);
    };

    const toggleFormAdd2 = () => {
        setDodatnaUsluga(!dodatnaUsluga);
    };

    const [dodatnoVozilo, setDodatnoVozilo] = useState(true);
    const [dodatnaUsluga, setDodatnaUsluga] = useState(true);

    const sendEmail = (e) => {
      e.preventDefault();

      const data = {};
      const formData = form.current;

      let carString = `vozilo: ${selectedCar.selectedMake},   ` +
                        `model: ${selectedCar.selectedModel},   ` +
                        `godina: ${selectedCar.selectedYear},   ` +
                        `motor: ${selectedCar.selectedEngine}`;

             
      if(selectedCar.selectedCarData !== null){
        const carr = 
        `standardna snaga (ks): ${selectedCar.selectedCarData.std_power},   ` +
        `stage 1 snaga (ks): ${selectedCar.selectedCarData.tuned_power},    ` +
        `standardni okretni moment (Nm): ${selectedCar.selectedCarData.std_torque}, ` +
        `stage 1 okretni moment (Nm): ${selectedCar.selectedCarData.tuned_torque},  ` +
        `CC: ${selectedCar.selectedCarData.cc}, ` +
        `ECU: ${selectedCar.selectedCarData.Type_ecu},  ` +
        `Kod motora: ${selectedCar.selectedCarData.Engine_code},    `;

        data["car-details"] = carr;
      }

      data["car"] = carString;

      const selectedOptionsList = selects.map((select) => select.selectedOption).filter(Boolean);
      const selectedOptionsString = selectedOptionsList.join(", ");
      data["usluge"] = selectedOptionsString;

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const value = data[key];
          const inputField = formData.elements[key];
    
          if (inputField) {
            inputField.value = value;
          }else {
            const newInput = document.createElement('input');
            newInput.hidden = true;
            newInput.name = key;
            newInput.value = value;
            formData.appendChild(newInput);
          }
        }
      }

      console.log(formData.elements);

      emailjs.sendForm('contact_service', 'contact_service', formData, '8Ym7hNo08SUJ6usTe')
         .then((result) => {
            const message = document.createElement("div");
            message.innerText = "Vaš zahtjev je uspješno poslan."
            formData.appendChild(message);
         }, (error) => {
            const message = document.createElement("div");
            message.innerText = "Vaš zahtjev nije uspješno poslan."
            formData.appendChild(message);
         }); 
    };

    const [selects, setSelects] = useState([]);

    const handleDivClick = () => {
        const newSelect = { id: Date.now(), selectedOption: "" };
        setSelects([...selects, newSelect]);
    };

    const handleChange = (event, selectId) => {
        const updatedSelects = selects.map((select) => {
          if (select.id === selectId) {
            return { ...select, selectedOption: event.target.value };
          }
          return select;
        });
        setSelects(updatedSelects);
    };
    

    const handleDeleteSelect = (selectId) => {
        const updatedSelects = selects.filter((select) => select.id !== selectId);
        setSelects(updatedSelects);
    };

    return (
        <div className={`kontakt-forma ${className}`}>
            <div className="headingg">
                <h1>Kontaktiraj nas putem&nbsp;<span className="text-accent"> forme</span></h1>
            </div>
           
            <form ref={form} className="forma" onSubmit={sendEmail}>
                <div className="label-input inp">
                    <input type="text" name="ime" placeholder="Unesi ime"/>
                </div>

                <div className="label-input inp">
                    <input type="text" name="prezime" placeholder="Unesi prezime"/>
                </div>
            
            <div className="label-input inp">
                    <input type="number" name="telefon" placeholder="Unesi broj telefona" required/>
            </div>
            
            <div className="label-input">
                    <p>Odaberite Vaše vozilo:</p>
                    <div className="select-cont">
                            <select
                                    className="select"
                                    value={selectedCar.selectedMake}
                                    onChange={(e) => setSelectedCar({ selectedMake: e.target.value, selectedModel: "", selectedYear: "", selectedEngine: "" })}
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
                                value={selectedCar.selectedModel}
                                onChange={(e) => setSelectedCar({selectedMake: selectedCar.selectedMake, selectedModel: e.target.value, selectedYear: "", selectedEngine: "" })}
                                >
                                <option className="option" value="">Model</option>
                                {selectedCar.selectedMake &&
                                    Object.keys(cars[selectedCar.selectedMake]).map((model) => (
                                    <option className="input" key={model} value={model}>
                                        {model}
                                    </option>
                                    ))}
                            </select>
                            <select
                                className="select"
                                value={selectedCar.selectedYear}
                                onChange={(e) => setSelectedCar({selectedMake: selectedCar.selectedMake, selectedModel: selectedCar.selectedModel, selectedYear: e.target.value, selectedEngine: "" })}
                                >
                                <option className="option" value="">Godina</option>
                                {selectedCar.selectedMake &&
                                    selectedCar.selectedModel &&
                                    cars[selectedCar.selectedMake][selectedCar.selectedModel] &&
                                    Object.keys(cars[selectedCar.selectedMake][selectedCar.selectedModel]).map(
                                    (year) => (
                                        <option className="input option" key={year} value={year}>
                                        {year}
                                        </option>
                                    )
                                    )}
                            </select>
                            <select
                                className="select"
                                value={selectedCar.selectedEngine}
                                onChange={(e) => setSelectedCar({selectedMake: selectedCar.selectedMake, selectedModel: selectedCar.selectedModel, selectedYear: selectedCar.selectedYear, selectedEngine: e.target.value, 
                                selectedCarData: cars[selectedCar.selectedMake][selectedCar.selectedModel][selectedCar.selectedYear][e.target.value]})}
                                >
                                <option className="option" value="">Motor</option>
                                {selectedCar.selectedMake &&
                                    selectedCar.selectedModel &&
                                    selectedCar.selectedYear &&
                                    cars[selectedCar.selectedMake][selectedCar.selectedModel][
                                    selectedCar.selectedYear
                                    ] &&
                                    Object.keys(
                                    cars[selectedCar.selectedMake][selectedCar.selectedModel][
                                        selectedCar.selectedYear
                                    ]
                                    ).map((engine) => (
                                    <option className="input option" key={engine} value={engine}>
                                        {engine}
                                    </option>
                                    ))}
                            </select>
                    </div>
            </div>
                
            <div className="label-i">
                <div className="para">
                    <label>Vaše vozilo nije ponuđeno?</label>
                    <BsFillPlusCircleFill className={`form-add icon1 ${dodatnoVozilo ? "show" : ""} `} onClick={toggleFormAdd} />
                    <AiFillMinusCircle className={`form-add icon1 ${dodatnoVozilo ? "" : "show"}`} onClick={toggleFormAdd} />
                </div>
            </div>

                <div className={`label-i dodatno-vozilo ${dodatnoVozilo ? "" : "show"}`}>
                    <textarea name='dodatno-vozilo' placeholder="Unesite osnovne podatke o vozilu"></textarea>
                </div>
            
                <div className="label-i nova-usluga">
                    <div className="para">
                        <label>Dodaj novu uslugu:</label>
                        <BsFillPlusCircleFill className="icon1" onClick={handleDivClick} />
                    </div>
                </div>
                
                <div className="usluge-cont">
                    {selects.map((select) => (
                        <div key={select.id} className="select-container para">
                            <select className="select" onChange={(event) => handleChange(event, select.id)}>
                                <option>ODABERI USLUGU</option>
                                {uslugeData.map((usluga, index) => (
                                <option key={index}>{usluga.title}</option>
                                ))}
                            </select>
                            <AiFillMinusCircle
                                className="delete-icon icon1"
                                onClick={() => handleDeleteSelect(select.id)}
                            />
                        </div>
                    ))}
                </div>

                <div className="label-i">
                    <div className="para">
                        <label>Nema usluge koju želiš?</label>
                        <BsFillPlusCircleFill className={`form2-add icon1 ${dodatnaUsluga ? "show" : ""} `} onClick={toggleFormAdd2} />
                        <AiFillMinusCircle className={`form2-add icon1 ${dodatnaUsluga ? "" : "show"}`} onClick={toggleFormAdd2} /><br />
                    </div>
                </div>

                <div className={`label-input dodatno-vozilo ${dodatnaUsluga ? "" : "show"}`}>
                    <textarea name='dodatna-usluga' placeholder="Unesi uslugu"></textarea><br/>
                </div>
                
                <div className="label-i">
                    <div className="par">
                        <input type="submit" className="but istrazi" value="Pošalji zahtjev" />
                    </div>
                </div>
                
            </form>
        </div>
    );
};

export default Kontakt;