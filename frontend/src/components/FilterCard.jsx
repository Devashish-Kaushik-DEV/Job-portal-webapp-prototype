import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from '@radix-ui/react-label'

const filterData = [
  {
  filterType:"Location",
  array:["Delhi", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
  },
  {
  filterType:"Job Role",
  array:["Frontend Developer", "Backend Developer", "Data Scientist", "Data Analyst", "Graphic Designer", "FullStack Developer", "Software Tester", "System Administrator"]
  },
  {
  filterType:"Salary",
  array:["0-40K", "40K-1L", "1L-5L"]
  },
]

const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
          filterData.map((data, index) => (
            <div key={index}>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.array.map((item, index) => {
                  return(
                    <div className='flex items-center space-x-2 my-2 font-medium text'>
                      <RadioGroupItem value={item} />
                      <Label>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard