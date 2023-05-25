import { createContext, useState } from 'react';

export const AppContent = createContext({});

export default function AppContentProvider(props) {
  const predefinedPackages = require('../data/predefined_packages.json');
  const [data, setData] = useState(predefinedPackages);
  const [customerList, setCustomerList] = useState([]);
  const [report, setReport] = useState([]);
  const [bookingList, setBookingList] = useState([]);
<<<<<<< HEAD
=======
  const [token, setToken] = useState();
>>>>>>> 1aece17de39255c238a1ceb91c91491a667534c0

  const updateData = (newData) => {
    setData([...data, ...newData]);
  };

  const updateCustomerList = (newCustomer) => {
    setCustomerList([...customerList, ...newCustomer]);
  };

  const addReport = (newReport) => {
    setReport([...report, ...newReport]);
  };

  const updateReport = (report) => {
    setReport(report);
  };

  const bookingListAdd = (newBooking) => {
    setBookingList([...bookingList, ...newBooking]);
  };

  const updateBookingList = (bookingList) => {
<<<<<<< HEAD
    setBookingList(bookingList)
    
    
=======
    setBookingList(bookingList);
  }
    
  const setAuthToken = (token) => {
      setToken(token);
  }
>>>>>>> 1aece17de39255c238a1ceb91c91491a667534c0

//const objectIdToRemove = 2;

//const index = array.findIndex(obj => obj.id === objectIdToRemove);
//if (index > -1) {
  //array.splice(index, 1);
<<<<<<< HEAD
};
=======

  
>>>>>>> 1aece17de39255c238a1ceb91c91491a667534c0


  


  const storedInfo = {
    data: data,
    customerList: customerList,
    report: report,
    bookingList: bookingList,
<<<<<<< HEAD
=======
    token: token, 
    isAuthenticated: !!token,
>>>>>>> 1aece17de39255c238a1ceb91c91491a667534c0
  };

  const setFcn = {
    updateData: updateData,
    updateCustomerList: updateCustomerList,
    addReport: addReport,
    updateReport: updateReport,
    bookingListAdd: bookingListAdd,
    updateBookingList: updateBookingList,
<<<<<<< HEAD
=======
    setAuthToken: setAuthToken,
>>>>>>> 1aece17de39255c238a1ceb91c91491a667534c0
  };

  const value = {
    setFcn: setFcn,
    storedInfo: storedInfo,
    //storedUsername: username,
    //token: token,
    //isAuthenticated: !!token,
  };

  return (
    <AppContent.Provider value={value}>{props.children}</AppContent.Provider>
  );
}
