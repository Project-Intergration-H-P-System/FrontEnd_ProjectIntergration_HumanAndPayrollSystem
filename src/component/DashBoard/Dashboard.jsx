import React from 'react'
import 
{ BsCashCoin, BsFillGrid3X3GapFill, BsPeopleFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import "./Dashboard.css"

function DashBoard() {

    const data = [
        {
          name: 'Jan',
          Manager: 4000,
          Employee: 2400,
          amt: 2400,
        },
        {
          name: 'Feb',
          Manager: 3000,
          Employee: 1398,
          amt: 2210,
        },
        {
          name: 'Mar',
          Manager: 2000,
          Employee: 9800,
          amt: 2290,
        },
        {
          name: 'Apr',
          Manager: 2780,
          Employee: 3908,
          amt: 2000,
        },

      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>AMOUNT OF EMPLOYEES</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SALARY</h3>
                    <BsCashCoin className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>QOLD</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Manager" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Employee" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default DashBoard