import './App.css';
import React, { useState } from 'react';

import sideImage from './assets/images/bg-sidebar-desktop.svg'

import Header from './components/header';

import { menuItems, info, formFields, plan, cardData, addOns, addOnsData, finish, cardDatas } from './static-data'

function App() {
  const [step, setStep] = useState(0);
  const [checkboxes, setCheckboxes] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const [isMonthly, setIsMonthly] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [validationMessages, setValidationMessages] = useState({
    name: '',
    email: '',
    phone: '',
  });


  const handleServiceTab = (index) => {
    console.log(index)
    setActiveServiceIndex(index)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleCheckboxChange = (index) => {
    setCheckboxes((prevState) => {
      const updatedCheckboxes = { ...prevState };

      if (updatedCheckboxes[index] === null || updatedCheckboxes[index] === false) {
        updatedCheckboxes[index] = true;
      } else {
        updatedCheckboxes[index] = null;
      }

      return updatedCheckboxes;
    });
  };

  const navigateToNextMenu = (tabIndex) => {
    const newValidationMessages = {
      name: '',
      email: '',
      phone: '',
    };

    if (formData.name.trim() === '') {
      newValidationMessages.name = 'This field is required';
    }

    if (formData.email.trim() === '') {
      newValidationMessages.email = 'Email is required';
    } else if (!isEmailValid(formData.email.trim())) {
      newValidationMessages.email = 'Enter a valid email address';
    }

    if (formData.phone.trim() === '') {
      newValidationMessages.phone = 'Phone number is required';
    } else if (formData.phone.trim().length !== 11) {
      newValidationMessages.phone = 'Enter a valid 11-digit phone number';
    }

    setValidationMessages(newValidationMessages);

    if (Object.values(newValidationMessages).every((message) => message === '')) {
      changeMenu(tabIndex);
    }
  }

  const changeMenu = (tabIndex) => {
    setStep(tabIndex)
  }

  function isEmailValid(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const handleActiveCardIndex = (cardIndex) => {
    setActiveCardIndex(cardIndex);
  }

  const togglePlan = () => {
    setIsMonthly(!isMonthly)
  }


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
                <Header data={info} />
                <div className="content">
                  {
                    formFields.map((field, index) => (
                      <div key={index} className='form-holder'>
                        <div className='label'><label htmlFor={field.label}>{field.label}</label>
                          <span className="error-message">{validationMessages[field.name.toLowerCase()]}</span></div>
                        <input type={field.type} placeholder={field.placeholder} name={field?.name} value={formData[field.name.toLowerCase()]} onChange={handleInputChange} />
                      </div>
                    ))
                  }
                </div>
                <div className="next-step first">
                  <button className="btn" type="button" onClick={() => navigateToNextMenu(1)}>Next Step</button>
                </div>
              </div>}
              {step === 1 && <div className="step active">
                <Header data={plan} />
                <div className="content">
                  <div className="card-wrapper">
                    {cardData.map((card, index) => (
                      <div key={index} onClick={() => handleActiveCardIndex(index)} className={`content-title ${index === activeCardIndex ? 'active-card' : ''}`}>
                        <img src={card.imageSrc} alt="" />
                        <h2>{card.title}</h2>
                        <p>{isMonthly ? card?.monthlyPrice : card?.yearlyPrice}</p>
                      </div>
                    ))}
                  </div>
                  <div className="monthly-yearly">
                    <div>
                      <span className="monthly-yearly-text">Monthly</span>
                      <label className="switch">
                        <input type="checkbox" onChange={togglePlan} checked={!isMonthly} />
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
                <Header data={addOns} />
                <div className="content">
                  <div className="card-wrapper add-ons">
                    {addOnsData?.map((addOn, index) => (
                      <div key={index} className={`content-title ${index === activeServiceIndex ? 'active-service' : ''}`} onClick={() => handleServiceTab(index)}>
                        <div className="content-title-details">
                          <div className="checkbox" >
                            <input
                              type="checkbox"
                              id={`scales${index}`}
                              name={`scales${index}`}
                              checked={checkboxes[index] || false}
                              onChange={() => handleCheckboxChange(index)}
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
                <Header data={finish} />
                <div className="content">
                  <div className="card-wrapper add-ons finishing-up">
                    {cardDatas.map((card, index) => (
                      <div key={index} className="content-title">
                        <div className="inner-text">
                          {card.change ? <h2>{card.title}</h2> : <p>{card.title}</p>}
                          {card.change && <p onClick={() => changeMenu(1)}>{card.change}</p>}
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
