import { BarChart, Card, Subtitle, Title } from '@tremor/react';

export const BarChartComponent = () => {
  const chartList = [
    {
      name: 'Topic 1',
      'Group A': 890,
      'Group B': 338,
      'Group C': 538,
      'Group D': 396,
      'Group E': 138,
      'Group F': 436,
    },
    {
      name: 'Topic 2',
      'Group A': 289,
      'Group B': 233,
      'Group C': 253,
      'Group D': 333,
      'Group E': 133,
      'Group F': 533,
    },
    {
      name: 'Topic 3',
      'Group A': 111,
      'Group B': 233,
      'Group C': 222,
      'Group D': 444,
      'Group E': 444,
      'Group F': 555,
    },
  ];

  const dataFormatter = (number: number) => {
    return '$ ' + Intl.NumberFormat('us').format(number).toString();
  };
  return (
    <>
      <Card>
        <Title>Number of species threatened with extinction (2021)</Title>
        <Subtitle>
          The IUCN Red List has assessed only a small share of the total known
          species in the world.
        </Subtitle>
        <BarChart
          className="mt-6"
          data={chartList}
          index="name"
          categories={[
            'Group A',
            'Group B',
            'Group C',
            'Group D',
            'Group E',
            'Group F',
          ]}
          colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
        />
      </Card>
    </>
  );
};
