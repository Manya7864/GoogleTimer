import { Tab,Heading, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import './App.css';
import Stopwatch from '../src/Component/Stopwatch';
import Timer from '../src/Component/Timer';

function App() {
  return (
    <div className="App">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab><Heading>Timer</Heading></Tab>
          <Tab><Heading>Stop Watch</Heading></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Timer/>
          </TabPanel>
          <TabPanel>
            <Stopwatch/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;