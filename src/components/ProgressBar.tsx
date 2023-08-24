import {
  Card,
  CategoryBar,
  DeltaBar,
  MarkerBar,
  ProgressBar,
} from '@tremor/react';

export const ProgressBarComponent = () => {
  return (
    <>
      <Card className="mx-auto flex w-full flex-col gap-10">
        <ProgressBar value={45} color="teal" className="mt-3" />
        <MarkerBar value={45} color="teal" className="mt-3" />
        <MarkerBar
          value={45}
          minValue={25}
          maxValue={65}
          color="yellow"
          className="mt-4"
        />

        <DeltaBar value={45} color="teal" className="mt-3" />
        <DeltaBar value={45} isIncreasePositive={false} className="mt-3" />

        <CategoryBar
          values={[40, 30, 20, 10]}
          markerValue={62}
          colors={['emerald', 'yellow', 'orange', 'rose']}
          className="mt-3"
        />
      </Card>
    </>
  );
};
