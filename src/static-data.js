import Arcade from './assets/images/icon-arcade.svg'
import Advanced from './assets/images/icon-advanced.svg'
import Pro from './assets/images/icon-pro.svg'

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
      name: 'name'
    },
    {
      label: 'Email Address',
      type: 'email',
      placeholder: 'e.g. stephenking@lorem.com',
      name: 'email'
    },
    {
      label: 'Phone Number',
      type: 'text',
      placeholder: 'e.g. +1 234 567 890',
      name: 'phone'
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

  const info = {
    title: 'Personal Info',
    description: 'Please provide your name, email address, and phone number.'
  }
  const plan = {
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.'
  }
  const addOns = {
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.'
  }

  const finish = {
    title: 'Finishing up',
    description: 'Double-check everything looks OK before confirming.'
  }

  export {
    menuItems, formFields, cardData, addOnsData, cardDatas, info, plan, addOns, finish
  }