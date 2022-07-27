async function drawHeatmap() {
  //*******1. Access Data */
  const data = await d3.csv("./assets/test.csv");
  console.log(data);
  const dateParser = d3.timeParse("%Y");

  //Create labels of rows and column
  const row = Array.from(new Set(data.map((d) => d["Designer"])));
  const column = Array.from(new Set(data.map((d) => d["Year"])));
  // console.log(column);
  // console.log(row);
  //*******2. Create Dimensions
}
drawHeatmap();
