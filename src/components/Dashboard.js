import React from 'react'
import Customers from './Customers';
import OnlineCustomers from './OnlineCustomers';
import Leads from './Leads';
import WithdrawalsPending from './WithdrawalsPending';
import DepositsPending from './DepositsPending';
import Verifications from './Verifications';
function Dashboard() {
  return (
    <div className='container mx-auto mt-5'>
      <div className="row">
      <Customers />
      <OnlineCustomers />
      <Leads />
      <WithdrawalsPending />
      <DepositsPending />
      <Verifications />
      </div>
    </div>
  )
}

export default Dashboard
