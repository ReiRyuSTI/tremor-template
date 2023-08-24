import { Flex } from '@tremor/react';
import { AreaChartComponent } from './components/AreaChart';
import { BarChartComponent } from './components/BarChart';
import { BarListComponent } from './components/BarList';
import { DonutChartComponent } from './components/DonutChart';
import { LineCartComponent } from './components/LineChart';
import { ProgressBarComponent } from './components/ProgressBar';
import { TrackerComponent } from './components/Tracker';

function App() {
  return (
    <>
      <main className="my-10 flex w-full justify-center gap-10">
        <Flex className="flex max-w-2xl flex-col gap-5">
          <LineCartComponent />
          <BarChartComponent />
          <AreaChartComponent />
          <DonutChartComponent />
          <BarListComponent />
          <ProgressBarComponent />
          <TrackerComponent />
        </Flex>
      </main>
    </>
  );
}

export default App;
