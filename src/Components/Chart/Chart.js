import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {

    const valueArray = props.dataPoints.map(dataPoint => {return dataPoint.value});
    const maxValue = Math.max(...valueArray);

    return (
      <div className={"chart"}>
          {props.dataPoints.map((dataPoint) => {
              return <ChartBar key = {dataPoint.label} value = {dataPoint.value} maxValue = {maxValue} label = {dataPoint.label}/>
          })}
      </div>
    );
}
export default Chart;
