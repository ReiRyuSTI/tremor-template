import { Card, Color, Tracker } from '@tremor/react';

export const TrackerComponent = () => {
  type Tracker = {
    color: Color;
    tooltip: string;
  };

  const data: Tracker[] = [
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'rose', tooltip: 'Downtime' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'gray', tooltip: 'Maintenance' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'yellow', tooltip: 'Degraded' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
    { color: 'emerald', tooltip: 'Operational' },
  ];
  return (
    <>
      <Card className="mx-auto w-full">
        <Tracker data={data} className="mt-2" />
      </Card>
    </>
  );
};
