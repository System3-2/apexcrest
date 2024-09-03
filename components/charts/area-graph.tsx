'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
const chartData = [
  { month: 'January', deposits: 186, withdrawals: 80 },
  { month: 'February', deposits: 305, withdrawals: 200 },
  { month: 'March', deposits: 237, withdrawals: 120 },
  { month: 'April', deposits: 73, withdrawals: 190 },
  { month: 'May', deposits: 209, withdrawals: 130 },
  { month: 'June', deposits: 214, withdrawals: 140 },
  { month: 'July', deposits: 214, withdrawals: 140 },
  { month: 'August', deposits: 214, withdrawals: 140 },
  { month: 'September', deposits: 214, withdrawals: 140 },
];

const chartConfig = {
  deposits: {
    label: 'deposits',
    color: 'hsl(var(--chart-1))'
  },
  withdrawals: {
    label: 'withdrawals',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function AreaGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>
          Displaying total transaction volume over the past 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="withdrawals"
              type="natural"
              fill="var(--color-withdrawals)"
              fillOpacity={0.4}
              stroke="var(--color-withdrawals)"
              stackId="a"
            />
            <Area
              dataKey="deposits"
              type="natural"
              fill="var(--color-deposits)"
              fillOpacity={0.4}
              stroke="var(--color-deposits)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Transaction volume up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - September 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
