import React from 'react';
import {VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip} from 'victory';

const populationData = [
  {year: 1995, population: 7.35, label:"7.35M"},
  {year: 1996, population: 7.361, label:"7.361M"},
  {year: 1997, population: 7.383, label:"7.383M"},
  {year: 1998, population: 7.404, label:"7.404M"},
  {year: 1999, population: 7.428, label:"7.428M"},
  {year: 2000, population: 8.015, label:"8.015M"},
  {year: 2001, population: 8.044, label:"8.044M"},
  {year: 2002, population: 8.042, label:"8.042M"},
  {year: 2003, population: 8.023, label:"8.023M"},
  {year: 2004, population: 7.984, label:"7.984M"},
  {year: 2005, population: 7.94, label:"7.94M"},
  {year: 2006, population: 7.904, label:"7.904M"},
  {year: 2007, population: 7.909, label: "7.909M"},
  {year: 2008, population: 7.946, label: "7.946M"},
  {year: 2009, population: 7.991, label: "7.991M"},
  {year: 2010, population: 8.194, label: "8.194M"},
  {year: 2011, population: 8.293, label: "8.293M"},
  {year: 2012, population: 8.384, label: "8.384M"},
  {year: 2013, population: 8.459, label: "8.459M"},
  {year: 2014, population: 8.521, label: "8.521M"},
  {year: 2015, population: 8.582, label:"8.528M"},
  {year: 2016, population: 8.615, label: "8.615M"},
  {year: 2017, population: 8.623, label:"8.623M"}
];

function Population() {
  return (
    <div className="Population">
       
        <VictoryChart
        domainPadding={20}
        theme={VictoryTheme.material}> 
        <VictoryAxis
          tickValues={[1995,2000,2005,2010, 2015]}
          tickFormat={["1995", "2000",  "2005", "2010", "2015"] } />
        <VictoryAxis
          dependentAxis
          tickValues={[1,2,3,4,5,6,7,8]}
          tickFormat={(y) => (`${y}M`)}/>
        <VictoryBar
         labelComponent={<VictoryTooltip/>}
         data={populationData} 
         x="year" 
         y="population" />
      </VictoryChart>  
                
      
      
    </div>
  );
}

export default Population;
