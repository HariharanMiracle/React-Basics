import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Customer() {
    // States are declared here
    /* This state is used to set Customer Data */
    const [customerData, setCustomerData] = useState([]);

    // Variables are declared here
    /* This variable is used to set Customer Number */
    var customerNumber = 1;

    // Effects are declare here
    /* This effect is used fetch Customer Data */
    useEffect(() => {
        const axios = require('axios');
		axios.get('http://localhost:9900/api/customer')
		.then(e => {
			setCustomerData(e.data)
		})
    });
    
    return (
        <div>
            <h1 className="text-info">Customers</h1>
            <br/><hr/>
            <div>
				<div className="row">
					{
						customerData.map(e => 
							<div className="col-4 p-4">
								<p><b>#{customerNumber++}</b></p>
								<p><b>Customer Id:</b> {e.customerId}</p>
								<p><b>Customer Name:</b> {e.customerName}</p>
								<img src={'/uploads/customer/' + e.customerPicture} height="150px" width="150px"/>
								<div className="row">										
                                    <div className="mt-2 col-12">
									    <button className="btn btn-info">Edit Customer</button>
								    </div>
							    </div>
						    </div>
						)							
					}
				</div>
			</div>
        </div>
    )
}

export default Customer;