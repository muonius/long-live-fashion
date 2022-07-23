async function drawHeatmap() {
  //*******1. Access Data */
  const data = await d3.csv("./assets/summary.csv");
  //   console.log(data);
  const column = Object.keys(data[0]);
  const row = data.map((d) => d["Designer"]);
  //   console.log(column);
  //   console.log(row);
  const xAccessor = (d) => d["Designer"];
  //   console.log(xAccessor(data[0]));
}
drawHeatmap();
