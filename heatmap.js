async function drawHeatmap() {
  //*******1. Access Data */
  const data = await d3.json("./assets/test.csv");
  console.log(data);
  const dateParser = d3.timeParse("%Y");

  const row = data.map((d) => d["Designer"]);
  //   console.log(column);
  // console.log(row);
  const xAccessor = (d) => d["Designer"];
  //   console.log(xAccessor(data[0]));
}
drawHeatmap();
