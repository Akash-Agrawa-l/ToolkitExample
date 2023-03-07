import moment from 'moment';
import {createRef} from 'react';

export const priceFormatter = (number: number) => {
  const numFor = Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });
  if (typeof number === 'number') {
    return numFor.format(Math.round(number * 100));
  }
  return '₹-';
};

export const getEMI = (price: number) => {
  const numFor = Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  });
  if (typeof price === 'number') {
    return numFor.format(Math.ceil(price * 10 + price / 3)).concat('/ month.');
  }
  return '₹-/ month.';
};

export const getDeliveryDate = (date?: Date) => {
  var future = new Date();
  future.setDate(future.getDate() + 5);
  if (date) {
    date.setDate(date.getDate() + 5);
    return moment(date).format('DD MMM YYYY');
  }
  return moment(future).format('DD MMM YYYY');
};

export const navigationRef = createRef<any>();
