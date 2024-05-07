import React from 'react'
import RecentOrders from '../Charts/RecentOrders'
import TransactionChart from '../Charts/TransactionChart'
import BuyerProfilePieChart from '../Charts/BuyerProfilePieChart'
export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
			</div>
		</div>
	)
}