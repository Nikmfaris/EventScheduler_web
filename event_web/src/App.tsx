import CalendarApp from "./components/calendar";
import BasicExample from "./components/admin_form";
import TextControlsExample from "./components/admin_form";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function App() {
  return (
    <div >
       {/* <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs> */}
      <BasicExample/>
      <CalendarApp/>
      {/* <TextControlsExample/> */}
    </div>
  );
}

export default App;
