import React from "react";
import {
 BarChart,
 Bar,
 XAxis,
 YAxis,
 Tooltip,
 ResponsiveContainer
} from "recharts";
import cubejs from "@cubejs-client/core";
import moment from "moment";
import { QueryRenderer } from "@cubejs-client/react";

const cubejsApi = cubejs(
  'CUBEJS-API-TOKEN',
  { apiUrl: 'http://localhost:4000/cubejs-api/v1' }
);


const dateFormatter = item => moment(item).format("MMM YY");

const Chart = () => {
    return (
        <QueryRenderer
          query=
        
          {{
            measures: ["Orders.count"],
            timeDimensions: [
              {
                dimension: "Orders.createdAt",
                granularity: "month"
                
              }
            ]
          }}
          cubejsApi={cubejsApi}
          render={({ resultSet }) => {
            if (!resultSet) {
              return "Loading...";
            }
   
            return (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={resultSet.chartPivot()}>
                  <XAxis dataKey="x" tickFormatter={dateFormatter} />
                  <YAxis />
                  <Tooltip labelFormatter={dateFormatter} />
                  <Bar dataKey="Orders.count" fill="rgba(106, 110, 229)" />
                </BarChart>
              </ResponsiveContainer>
            );
          }}
        />
      );
    }
export default Chart;