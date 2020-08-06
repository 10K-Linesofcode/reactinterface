var React = require('react');
var ReactDom = require('react-dom');
//Main Interface
//Step 1
var MainInterface = React.createClass({
    //Information to render
    render: function () {
        return (

            <div>
            <h1>Pet Appointments</h1>
            <ul>
                <li>Prabhu's Dog 3.30 PM</li>
                <li>Prabhu's Cat 3.30 PM</li>
                <li>Prabhu's Cow 3.30 PM</li>
            </ul>
            </div>

        )
    }

});

//Step2 
ReactDom.render(

    <MainInterface />,
    document.getElementById("petAppointments")


);