import './App.css';
import React, { useState } from 'react';

import sideImage from './assets/images/bg-sidebar-desktop.svg'
import Arcade from './assets/images/icon-arcade.svg'
import Advanced from './assets/images/icon-advanced.svg'
import Pro from './assets/images/icon-pro.svg'

function App() {
  const [step, setStep] = useState(0);
  const [isChecked, setIsCheceked] = useState(false);

  const changeMenu = (tabIndex) => {
    setStep(tabIndex);
  };

  const changeCheckBox = (e) => {
    setIsCheceked(e.target.checked)
  }

  const menuItems = [
    {
      number: 1,
      step: 'YOUR INFO',
      title: 'STEP 1',
    },
    {
      number: 2,
      step: 'SELECT PLAN',
      title: 'STEP 2',
    },
    {
      number: 3,
      step: 'ADD-ONS',
      title: 'STEP 3',
    },
    {
      number: 4,
      step: 'SUMMARY',
      title: 'STEP 4',
    },
  ];

  const formFields = [
    {
      label: 'Name',
      type: 'text',
      placeholder: 'e.g. Stephen King',
    },
    {
      label: 'Email Address',
      type: 'text',
      placeholder: 'e.g. stephenking@lorem.com',
    },
    {
      label: 'Phone Number',
      type: 'text',
      placeholder: 'e.g. +1 234 567 890',
    },
  ];

  const cardData = [
    {
      title: 'Arcade',
      imageSrc: Arcade,
      price: '$9/month',
    },
    {
      title: 'Advanced',
      imageSrc: Advanced,
      price: '$12/month',
    },
    {
      title: 'Pro',
      imageSrc: Pro,
      price: '$15/month',
    },
  ];

  const addOnsData = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: '+$1/mo',
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: '+$2/mo',
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: '+$5/mo',
    },
  ];

  const cardDatas = [
    {
      title: 'Arcade (Monthly)',
      change: 'Change',
      amount: '+$9/mo',
    },
    {
      title: 'Online service',
      amount: '+$1/mo',
    },
    {
      title: 'Larger storage',
      amount: '+$1/mo',
    },
  ];



  return (
    <>
      <div className="body-wrapper">
        <div className="body-content grid-container">
          <div className="content-wrapper">
            <div className="menu-wrapper">
              {
                menuItems.map((item, index) => (
                  <div className="nav" key={index} onClick={() => changeMenu(index)}>
                    <div className="number"><span className={index === step ? 'active' : ''}>{item?.number}</span></div>
                    <div className="info">
                      <h3>{item?.step}</h3>
                      <h2>{item?.title}</h2>
                    </div>
                  </div>
                ))
              }
              <div className="side-image">
                <img src={sideImage} alt="" />
              </div>
            </div>
            <div className="form-wrapper">
              {step === 0 && <div id="step1" className="step active">
                <div className="header">
                  <h2>Personal Info</h2>
                  <p>Please provide your name, email address, and phone number.</p>
                </div>
                {
                  formFields.map((field, index) => (
                    <div key={index} className="content">
                      <label htmlFor={field.label}>{field.label}</label><br />
                      <input type={field.type} placeholder={field.placeholder} />
                    </div>
                  ))
                }
                <div className="next-step first">
                  <button className="btn" type="button" onClick={() => changeMenu(1)}>Next Step</button>
                </div>
              </div>}
              {step === 1 && <div className="step active">
                <div className="header">
                  <h2>Select your plan</h2>
                  <p>You have the option of monthly or yearly billing.</p>
                </div>
                <div className="content">
                  <div className="card-wrapper">
                    {cardData.map((card, index) => (
                      <div key={index} className={`content-title ${index === 0 ? 'active' : ''}`}>
                        <img src={card.imageSrc} alt="" />
                        <h2>{card.title}</h2>
                        <p>{card.price}</p>
                      </div>
                    ))}
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
                </div>
                <div className="next-step">
                    <button onClick={() => changeMenu(0)} className="btn back">Go Back</button>
                    <button className="btn" type="button" onClick={() => changeMenu(2)}>Next Step</button>
                  </div>
              </div>}
              {step === 2 && <div className="step active">
                <div className="header">
                  <h2>Pick add-ons</h2>
                  <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className="content">
                  <div className="card-wrapper add-ons">
                    {addOnsData.map((addOn, index) => (
                      <div key={index} className={`content-title ${index === 0 ? 'active' : ''}`}>
                        <div className="content-title-details">
                          <div className="checkbox">
                            <input
                              type="checkbox"
                              id={`scales${index}`}
                              name={`scales${index}`}
                              checked={isChecked}
                              onChange={changeCheckBox}
                            />
                          </div>
                          <div className="inner-text">
                            <h2>{addOn.title}</h2>
                            <p>{addOn.description}</p>
                          </div>
                        </div>
                        <div className="amount">
                          <p>{addOn.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="next-step">
                    <button onClick={() => changeMenu(1)} className="btn back">Go Back</button>
                    <button className="btn" type="button" onClick={() => changeMenu(3)}>Next Step</button>
                  </div>
              </div>}
              {step === 3 && <div className="step active">
                <div className="header">
                  <h2>Finishing up</h2>
                  <p>Double-check everything looks OK before confirming.</p>
                </div>
                <div className="content">
                  <div className="card-wrapper add-ons finishing-up">
                    {cardDatas.map((card, index) => (
                      <div key={index} className="content-title">
                        <div className="inner-text">
                          {card.change ? <h2>{card.title}</h2> : <p>{card.title}</p>}
                          {card.change && <p>{card.change}</p>}
                        </div>
                        <div className="amount">
                          <p>{card.amount}</p>
                        </div>
                      </div>
                    ))}
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
                </div>
                <div className="next-step total">
                    <button onClick={() => changeMenu(2)} className="btn back">Go Back</button>
                    <button className="btn" type="button">Confirm</button>
                  </div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
