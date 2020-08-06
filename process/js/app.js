var React = require('react');
var ReactDom = require('react-dom');
//Main Interface
var MainInterface = React.CreateClass({
    //Information to render
    render: function () {
        return <h1>Pet Appointments</h1>
    }

});


ReactDom.render(

    <MainInterface/>,
    document.getElementById("petAppointments")


);