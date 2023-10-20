import './App.css';
import React, { useState } from 'react';

function App() {
  const [step, setStep] = useState(0); // Initialize with the current step

  const nextStep = () => {
    if (step >= steps.length) {
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const changeMenu = (menuStep) => {
    setStep(menuStep);
  };

  const steps = [
  ];

  return (
    <>
      <div className="body-wrapper">
        <div className="body-content grid-container">
          <div className="content-wrapper">
            <div className="menu-wrapper">
              <div className="nav" onClick={changeMenu}>
                <div className="number"><span className="active">1</span></div>
                <div className="info">
                  <h3>STEP 1</h3>
                  <h2>YOUR INFO</h2>
                </div>
              </div>
              <div className="nav" onClick={changeMenu}>
                <div className="number"><span>2</span></div>
                <div className="info">
                  <h3>STEP 2</h3>
                  <h2>SELECT PLAN</h2>
                </div>
              </div>
              <div className="nav" onClick={changeMenu}>
                <div className="number"><span>3</span></div>
                <div className="info">
                  <h3>STEP 3</h3>
                  <h2>ADD-ONS</h2>
                </div>
              </div>
              <div className="nav" onClick={changeMenu}>
                <div className="number"><span>4</span></div>
                <div className="info">
                  <h3>STEP 4</h3>
                  <h2>SUMMARY</h2>
                </div>
              </div>
              <div className="side-image">
                <img src="./assets/images/bg-sidebar-desktop.svg" alt="" />
              </div>
            </div>
            <div className="form-wrapper">
              <div id="step1" className="step active">
                <div className="header">
                  <h2>Personal Info</h2>
                  <p>Please provide your name, email address, and phone number.</p>
                </div>
                <div className="content">
                  <label htmlFor="">Name</label><br />
                  <input type="text" placeholder="e.g. Stephen King" />
                </div>
                <div className="content">
                  <label htmlFor="">Email Address</label> <br />
                  <input type="text" placeholder="e.g. stephenking@lorem.com" />
                </div>
                <div className="content">
                  <label htmlFor="">Phone Number</label> <br />
                  <input type="text" placeholder="e.g. +1 234 567 890" />
                </div>
                <div className="next-step first">
                  <button className="btn" type="button" onClick={nextStep}>Next Step</button>
                </div>
              </div>
              <div className="step">
                <div className="header">
                  <h2>Select your plan</h2>
                  <p>You have the option of monthly or yearly billing.</p>
                </div>
                <div className="content">
                  <div className="card-wrapper">
                    <div className="content-title active">
                      <img src="./assets/images/icon-arcade.svg" alt="" />
                      <h2>Arcade</h2>
                      <p>$9/month</p>
                    </div>
                    <div className="content-title">
                      <img src="./assets/images/icon-advanced.svg" alt="" />
                      <h2>Advanced</h2>
                      <p>$12/month</p>
                    </div>
                    <div className="content-title">
                      <img src="./assets/images/icon-pro.svg" alt="" />
                      <h2>Pro</h2>
                      <p>$15/month</p>
                    </div>
                  </div>
                  <div className="monthly-yearly">
                    <div>
                      <span className="monthly-yearly-text">Monthly</span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                      <span className="monthly-yearly-text">Yearly</span>
                    </div>
                  </div>
                  <div className="next-step">
                    <button onClick={prevStep} className="btn back">Go Back</button>
                    <button className="btn" type="button" onClick={nextStep}>Next Step</button>
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="header">
                  <h2>Pick add-ons</h2>
                  <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className="content">
                  <div className="card-wrapper add-ons">
                    <div className="content-title active">
                      <div className="content-title-details">
                        <div className="checkbox">
                          <input type="checkbox" id="scales" name="scales" checked />
                        </div>
                        <div className="inner-text">
                          <h2>Online service</h2>
                          <p>Access to multiplayer games</p>
                        </div>
                      </div>
                      <div className="amount">
                        <p>+$1/mo</p>
                      </div>
                    </div>
                    <div className="content-title active">
                      <div className="content-title-details">
                        <div className="checkbox">
                          <input type="checkbox" id="scales" name="scales" checked />
                        </div>
                        <div className="inner-text">
                          <h2>Larger storage</h2>
                          <p>Extra 1TB of cloud save</p>
                        </div>
                      </div>
                      <div className="amount">
                        <p>+$2/mo</p>
                      </div>
                    </div>
                    <div className="content-title ">
                      <div className="content-title-details">
                        <div className="checkbox">
                          <input type="checkbox" id="scales" name="scales" checked />
                        </div>
                        <div className="inner-text">
                          <h2>Customizable profile</h2>
                          <p>Custom theme on your profile</p>
                        </div>
                      </div>
                      <div className="amount">
                        <p>+$2/mo</p>
                      </div>
                    </div>
                  </div>
                  <div className="next-step">
                    <button onClick={prevStep} className="btn back">Go Back</button>
                    <button className="btn" type="button" onClick={nextStep}>Next Step</button>
                  </div>
                </div>
              </div>
              <div className="step">
                <div className="header">
                  <h2>Finishing up</h2>
                  <p>Double-check everything looks OK before confirming.</p>
                </div>
                <div className="content">
                  <div className="card-wrapper add-ons finishing-up">
                    <div className="content-title">
                      <div className="inner-text">
                        <h2>Arcade (Monthly)</h2>
                        <p>Change</p>
                      </div>
                      <div className="amount">
                        <h2>+$9/mo</h2>
                      </div>
                    </div>
                    <hr />
                    <div className="content-title">
                      <div className="inner-text">
                        <p>Online service</p>
                      </div>
                      <div className="amount">
                        <p>+$1/mo</p>
                      </div>
                    </div>
                    <div className="content-title">
                      <div className="inner-text">
                        <p>Larger storage</p>
                      </div>
                      <div className="amount">
                        <p>+$1/mo</p>
                      </div>
                    </div>
                  </div>
                  <div className="total add-ons">
                    <div className="content-title">
                      <div className="inner-text">
                        <p>Total (per month)</p>
                      </div>
                      <div className="amount">
                        <h2>+$12/mo</h2>
                      </div>
                    </div>
                  </div>
                  <div className="next-step total">
                    <button onClick={prevStep} className="btn back">Go Back</button>
                    <button className="btn" type="button">Confirm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
