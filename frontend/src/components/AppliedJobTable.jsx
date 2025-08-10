import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A List of your applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Compnay</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            [1,2].map((item, index) => (
              <TableRow key={index}>
                <TableCell>10-08-2025</TableCell>
                <TableCell>Frontend Developer</TableCell>
                <TableCell>Global Logics</TableCell>
                <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable