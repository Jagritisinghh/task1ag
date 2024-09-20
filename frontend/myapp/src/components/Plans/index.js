import React, { useEffect, useState } from 'react';
import './index.css';
import { TiTickOutline } from "react-icons/ti";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null); // Track the selected plan

  useEffect(() => {
    // Fetch features from the backend
    const fetchPlans = async () => {
      try {
        const response = await fetch('http://localhost:3006/api/features'); // Adjust the URL if necessary
        const data = await response.json();
        setPlans(data.data); // Assuming response contains plan data
        console.log("response", data.data);
      } catch (err) {
        console.error("Error fetching plans:", err);
      }
    };

    fetchPlans();
  }, []);

  const handleSelectPlan = (planName) => {
    setSelectedPlan(planName); // Set the clicked plan as the selected one
  };

  return (
    <div className='main-container'>
      <div className='plans-container'>
        {plans.map((plan) => (
          <div className={`plan-card ${plan.plan.toLowerCase()}-plan`} key={plan.plan}>
            <div> 
            <h3 className='plan-type'>{plan.plan} Plan</h3>
            <p className='year'>PER YEAR</p>
            <h2 className='price'>Rs. {plan.price}/year</h2>
            <ul className='plan-features'>
              {plan.features.map((featureCategory, index) => (
                <li key={index} className='features'>
                <TiTickOutline/>{featureCategory.category}
                </li>
              ))}
            </ul>
            </div>
            <button
              className={`Buy-now-btn ${plan.plan.toLowerCase()}-btn`}
              onClick={() => handleSelectPlan(plan.plan)}
            >
              {selectedPlan === plan.plan ? 'CURRENT PLAN' : 'BUY NOW'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
