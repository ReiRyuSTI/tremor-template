import { Card, LineChart, Title } from '@tremor/react';

export const LineCartComponent = () => {
  const chartList = [
    {
      year: 1970,
      'Export Growth Rate': 2.04,
      'Import Growth Rate': 1.53,
    },
    {
      year: 1971,
      'Export Growth Rate': 1.96,
      'Import Growth Rate': 1.58,
    },
    {
      year: 1972,
      'Export Growth Rate': 1.96,
      'Import Growth Rate': 1.61,
    },
    {
      year: 1973,
      'Export Growth Rate': 1.93,
      'Import Growth Rate': 1.61,
    },
    {
      year: 1974,
      'Export Growth Rate': 1.88,
      'Import Growth Rate': 1.67,
    },
    {
      year: 1975,
      'Export Growth Rate': 1.96,
      'Import Growth Rate': 1.61,
    },
    {
      year: 1976,
      'Export Growth Rate': 1.93,
      'Import Growth Rate': 1.61,
    },
    {
      year: 1977,
      'Export Growth Rate': 1.88,
      'Import Growth Rate': 1.67,
    },
  ];
  const dataFormatter = (number: number) =>
    `${Intl.NumberFormat('us').format(number).toString()}%`;

  return (
    <>
      <Card>
        <Title>Export/Import Growth Rates (1970 to 2021)</Title>
        <LineChart
          className="mt-6"
          data={chartList}
          index="year"
          categories={['Export Growth Rate', 'Import Growth Rate']}
          colors={['emerald', 'gray']}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
        />
      </Card>
    </>
  );
};
