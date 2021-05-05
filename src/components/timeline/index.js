import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,
      prevIdx: -1
    };
  }

  render() {
    const { curIdx } = this.state;
    const curStatus = this.props.dates[curIdx].status;

    return (
      <>
        <HorizontalTimeline
          styles={{
            background: "#f8f8f8",
            foreground: "#317efa",
            outline: "#dfdfdf",
            height: "80px"
          }}
          className="timeline"
          labelWidth={85}
          index={this.state.curIdx}
          indexClick={index => {
            const curIdx = this.state.curIdx;
            this.setState({ curIdx: index, prevIdx: curIdx });
          }}
          values={this.props.dates.map(x => x.date)}
          getLabel={date => date}
        />

        <p
          className="p-shrinked"
          style={{ fontWeight: "600", margin: "80px 0 0 0" }}
        >
          {curStatus}
        </p>

        <p className="p-shrinked mb-30">
          These dates are <span className="highlighted">estimated</span>. We
          will make sure to notifiy by email on every step.
        </p>
      </>
    );
  }
}
