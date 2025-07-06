import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

export default function AppiledJobTable() {
  return (
    <div>
      <Table>
        <TableCaption>A list of you applied jobs</TableCaption>
        <TableHeader>
           <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">status</TableHead>
           </TableRow>
        </TableHeader>
        <TableBody>
          {

            [1,2].map((items,index)=>(
              <TableRow key={index}>
                 <TableCell>17-07-2024</TableCell>
                 <TableCell>Fronted Developer</TableCell>
                 <TableCell>Google</TableCell>
                 <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
