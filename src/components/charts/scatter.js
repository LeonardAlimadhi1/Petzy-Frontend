import React, { PureComponent } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend
} from "recharts";

export default class ScatterCharts extends PureComponent {
  renderTooltip = props => {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: "#1e6ce8",
            color: "white",
            margin: 0,
            padding: 10
          }}
        >
          <p>{data.hour}</p>
          <p>
            <span>Amount of grams: </span>
            {data.value}
          </p>
        </div>
      );
    }

    return null;
  };

  render() {
    const amount = this.props.amount * 10;
    const dailyAmount = amount / 30;
    const morningAmount = Math.ceil(dailyAmount * 0.3);
    const eveningAmount = Math.ceil(dailyAmount * 0.3);
    const lunchAmount = Math.ceil(dailyAmount * 0.4);

    const data01 = [
      { hour: "8AM", index: 1, value: morningAmount },
      { hour: "1PM", index: 1, value: lunchAmount },
      { hour: "9PM", index: 1, value: eveningAmount }
    ];

    const domain = () => [
      0,
      Math.max(Math.max.apply(null, data01.map(entry => entry.value)))
    ];
    const range = [125, 225];

    return (
      <div>
        <ScatterChart
          width={550}
          height={50}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tick={{ fontSize: 0 }}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={15}
            width={90}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "Monday", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            wrapperStyle={{ zIndex: 100 }}
            content={this.renderTooltip}
          />
          <Scatter data={data01} fill="#1e6ce8" />
        </ScatterChart>

        <ScatterChart
          width={550}
          height={50}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tick={{ fontSize: 0 }}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={90}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "Tuesday", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            wrapperStyle={{ zIndex: 100 }}
            content={this.renderTooltip}
          />
          <Scatter data={data01} fill="#1e6ce8" />
        </ScatterChart>

        <ScatterChart
          width={550}
          height={50}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tick={{ fontSize: 0 }}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={90}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "Wednesday", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            wrapperStyle={{ zIndex: 100 }}
            content={this.renderTooltip}
          />
          <Scatter data={data01} fill="#1e6ce8" />
        </ScatterChart>

        <ScatterChart
          width={550}
          height={50}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tick={{ fontSize: 0 }}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={90}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "Thursday", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            wrapperStyle={{ zIndex: 100 }}
            content={this.renderTooltip}
          />
          <Scatter data={data01} fill="#1e6ce8" />
        </ScatterChart>

        <ScatterChart
          width={550}
          height={50}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tick={{ fontSize: 0 }}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={90}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "Friday", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            wrapperStyle={{ zIndex: 100 }}
            content={this.renderTooltip}
          />
          <Scatter data={data01} fill="#1e6ce8" />
        </ScatterChart>

        <ScatterChart
          width={550}
          height={50}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={90}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "Saturday", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            wrapperStyle={{ zIndex: 100 }}
            content={this.renderTooltip}
          />
          <Scatter data={data01} fill="#1e6ce8" />
        </ScatterChart>
      </div>
    );
  }
}
