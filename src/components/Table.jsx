// const Table = ({ sat }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Type of Satellite</th>
//           <th>Launch Date</th>
//           <th>Status</th>
//         </tr>
//       </thead>

//       <tbody>
//         const tableData = sat.map((sat) => (
//         <tr key={sat.id}>
//           <td>data.name</td>
//           <td>data.type</td>
//           <td>data.launchDate</td>
//           <td>data.operational</td>
//         </tr>
//         ))
//       </tbody>
//     </table>
//   );
// };

// export default Table;

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {sat.map((id, data) => {
          return (
            <button onClick={() => Table.data} key={id}>
              {data}
            </button>
          );
          <tr>
            <td>data.name</td>
            <td>data.type</td>
            <td>data.launchDate</td>
            <td>data.operational</td>
          </tr>;
        })}
        ;
      </tbody>
    </table>
  );
};

export default Table;
