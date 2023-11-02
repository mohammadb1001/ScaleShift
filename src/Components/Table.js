import React from "react"
import { useState } from "react";

export default function Table(props) {

    const [textInp, setTextInp] = useState(0);
    const [unit, setUnit] = useState({
        name: "",
        value: 0
    });
    const [unitI, setUnitI] = useState({
        name: "",
        value: 0
    });

    const handleChange = async (e) => {
        setTextInp(e.target.value);
    }

    return (
        <form className="table">
            <div class="inp mb-3">
                <label for="exampleInputEmail1" class="form-label">From : {unitI.name} </label>
                <input onChange={handleChange} type="number" class="form-control" id="inp1" value={textInp}/>
            </div>
            <div class="inp mb-3">
                <label for="exampleInputPassword1" class="form-label">To : {unit.name} </label>
                <input type="number" class="form-control" id="inp2" value={(textInp * unit.value)/unitI.value} />
            </div>

            <div className="units-list">
                <p onClick={() => {
                    setUnitI({
                        name: "Foot",
                        value: 3.280839895
                    })
                }} role="button" >Foot</p>
                <p onClick={() => {
                    setUnitI({
                        name: "Inch",
                        value: 39.37007874
                    })
                }} role="button" >Inch</p>
                <p onClick={() => {
                    setUnitI({
                        name: "Meter",
                        value: 1
                    })
                }} role="button" >Meter</p>
                <p onClick={() => {
                    setUnitI({
                        name: "Centimeter",
                        value: 100
                    })
                }} role="button" >Centimeter</p>
                <p onClick={() => {
                    setUnitI({
                        name: "Kilometer",
                        value: 0.001
                    })
                }} role="button" >Kilometer</p>
                <p onClick={() => {
                    setUnitI({
                        name: "Millimeter",
                        value: 1000
                    })
                }} role="button" >Millimeter</p>
                <p onClick={() => {
                    setUnitI({
                        name: "Micrometer",
                        value: 1000000
                    })
                }} role="button" >Micrometer</p>
                <p onClick={() => {
                    setUnitI({
                        name: "Nanometer",
                        value: 1000000000
                    })
                }} role="button" >Nanometer</p>
                <p onClick={() => {
                    setUnitI({
                        name: "Mile",
                        value: 0.0006213689
                    })
                }} role="button" >Mile</p>
                <p onClick={() => {
                    setUnitI({
                        name: "Yard",
                        value: 1.0936132983
                    })
                }} role="button" >Yard</p>
                <p onClick={() => {
                    setUnitI({
                        name: "Light Year",
                        value: 1.057008707E-16
                    })
                }} role="button" >Light Year</p>
            </div>

            <div className="units-list">
                <p onClick={() => {
                    setUnit({
                        name: "Foot",
                        value: 3.280839895
                    })
                }} role="button" >Foot</p>
                <p onClick={() => {
                    setUnit({
                        name: "Inch",
                        value: 39.37007874
                    })
                }} role="button" >Inch</p>
                <p onClick={() => {
                    setUnit({
                        name: "Meter",
                        value: 1
                    })
                }} role="button" >Meter</p>
                <p onClick={() => {
                    setUnit({
                        name: "Centimeter",
                        value: 100
                    })
                }} role="button" >Centimeter</p>
                <p onClick={() => {
                    setUnit({
                        name: "Kilometer",
                        value: 0.001
                    })
                }} role="button" >Kilometer</p>
                <p onClick={() => {
                    setUnit({
                        name: "Millimeter",
                        value: 1000
                    })
                }} role="button" >Millimeter</p>
                <p onClick={() => {
                    setUnit({
                        name: "Micrometer",
                        value: 1000000
                    })
                }} role="button" >Micrometer</p>
                <p onClick={() => {
                    setUnit({
                        name: "Nanometer",
                        value: 1000000000
                    })
                }} role="button" >Nanometer</p>
                <p onClick={() => {
                    setUnit({
                        name: "Mile",
                        value: 0.0006213689
                    })
                }} role="button" >Mile</p>
                <p onClick={() => {
                    setUnit({
                        name: "Yard",
                        value: 1.0936132983
                    })
                }} role="button" >Yard</p>
                <p onClick={() => {
                    setUnit({
                        name: "Light Year",
                        value: 1.057008707E-16
                    })
                }} role="button" >Light Year</p>
            </div>
        </form>
    )
};
