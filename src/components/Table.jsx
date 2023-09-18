import React from "react"
import {BsFillEyeFill, BsFillPencilFill, BsFillTrashFill} from "react-icons/bs"
import "./Table.css"

export const Table = ({ rows }) => {
  return ( 
  <div className="table-wrapper">
    <table className="table">
        <thead>
            <tr>
                <th>Provinsi</th>
                <th>Kota</th>
                <th>Kabupaten</th>
                <th>Actions</th>
            </tr>
        </thead >
        <tbody>
            {rows.map((row, idx) => {
                const statusText = 
                row.status.charAt(0).toUpperCase() + row.status.slice(1);
                
                return (
                    <tr key={idx}>
                        <td>{row.provinsi}</td>
                        <td>{row.kota}</td>
                        <td>{row.kabupaten} {statusText}</td>
                        <td>
                            <span className="actions">
                                <BsFillEyeFill className="eye-btn"/>
                                <BsFillPencilFill />
                                <BsFillTrashFill className="delete-btn"/>
                            </span>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  </div>
  )
}