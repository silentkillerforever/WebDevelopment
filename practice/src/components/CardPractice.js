import React from 'react';
import './CardPractice.css'

function Welcome(){
    return(
        <div>
            <h2>Checkboxes colored</h2>
            <input type="checkbox" id="cb-1" name="cb-1" value="fruit1"/>
            <label for="cb-1">Apples</label><br/>
            <input type="checkbox" id="cb-2" name="cb-2" value="fruit2"/>
            <label for="cb-1">Banana</label><br/>
            <input type="checkbox" id="cb-3" name="cb-3" value="fruit3"/>
            <label for="cb-1">Custard Apple</label>


            <h3>Accent color for checkboxes:</h3>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
            <label for="vehicle1"> I have a bike</label><br/>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
            <label for="vehicle2"> I have a car</label><br/>
        </div>
    )
}
    


export default Welcome