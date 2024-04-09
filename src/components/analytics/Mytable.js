import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import chart1 from "../../assets/table-icons/Chart (1).png";
import chart2 from "../../assets/table-icons/Chart (2).png";
import chart3 from "../../assets/table-icons/Chart (3).png";
import chart4 from "../../assets/table-icons/Chart (4).png";
import chart5 from "../../assets/table-icons/Chart (5).png";
import chart6 from "../../assets/table-icons/Chart (6).png";
import data from "../../data/table.json";

const sample = [
  [
    "/Defect Arrival Rate",
    "872,337",
    "574,332",
    "00:05:43",
    "802,873",
    "25.96%",
    "$1,093",
  ],
  [
    "/Fixed Rate",
    "803,792",
    "456,792",
    "00:05:24",
    "793,982",
    "76.13%",
    "$6,792",
  ],
  [
    "/cycle time",
    "740,702",
    "405,860",
    "00:04:36",
    "684,873",
    "41.54%",
    "$702",
  ],
  [
    "/lead time",
    "676,659",
    "340,765",
    "00:04:12",
    "638,982",
    "46.42%",
    "$2,659",
  ],
  [
    "/new features",
    "508,837",
    "317,543",
    "00:04:11",
    "555,982",
    "27.40%",
    "$4,508",
  ],
  [
    "/ready features",
    "495,938",
    "310,554",
    "00:02:56",
    "297,303",
    "28.89%",
    "$495",
  ],
];

function createData(
  id,
  page,
  pageviews,
  unique,
  average,
  extrances,
  exit,
  pagevalue
) {
  return { id, page, pageviews, unique, average, extrances, exit, pagevalue };
}

data.header[1].trend = chart1;
data.header[2].trend = chart2;
data.header[3].trend = chart3;
data.header[4].trend = chart4;
data.header[5].trend = chart5;
data.header[6].trend = chart6;

const rows = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

console.log("ROW DATA", rows);
console.log("COLUMN DATA", data.header);

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {data.header.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: 30 }}
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          <div className={`table-header ${!column.numeric && "reverse"}`}>
            <div
              className={`table-header-title ${!column.numeric && "reverse"}`}
            >
              {column.title}
            </div>
            <div
              className={`table-header-value ${!column.numeric && "reverse"}`}
            >
              {column.value}
            </div>
            {column.numeric ? (
              <img src={column.trend} alt="img" />
            ) : (
              <p
                className={`table-header-title ${!column.numeric && "reverse"}`}
              >
                trends
              </p>
            )}
          </div>
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {data.header.map((column) => (
        <TableCell
          key={column.datakey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.datakey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function MyTable() {
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
