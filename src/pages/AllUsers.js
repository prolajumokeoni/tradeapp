import React from 'react'

const AllUsers = () => {
  return (
    <div className='allusers container-fluid mt-2'>
      <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <button type="button" class="btn btn-primary mx-2">Kyc Verifications</button>
        <button type="button" class="btn btn-primary mx-2">Plans</button>
        <button type="button" class="btn btn-dark mx-2">Deposits</button>
        <button type="button" class="btn btn-success mx-2">Withdrawal</button>
        <button type="button" class="btn btn-success mx-2">Transactions</button>
      </div>
      <div className="shadow-lg p-3 mb-5 bg-body rounded ">
        <div className="d-flex justify-content-between">
          <button type="button" class="btn btn-success mx-2">Bulk Action</button>
          <div>
            <button type="button" class="btn btn-warning">Add Customer</button>
            <button type="button" class="btn btn-success mx-2">Bulk Action</button>
          </div>
        </div>
        <div className="d-flex justify-content-between p-4">
          <p>items/page</p>
        <input type="text" placeholder="Search.."></input>
        </div>
        <table class="table  text-center border  table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">PHONE</th>
              <th scope="col">MANAGER</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers
