import { useCallback } from 'react';

import { fetchData } from '../utils/fetchData';


const useUser = () => {
  /*const postUser = async (inputs) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    return await fetchData(import.meta.env.VITE_AUTH_API + '/users', options);
  };

  const checkUser = async (username) => {
    return await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/username/' + username,
    );
  };*/

  const getUserByToken = useCallback(async (token) => {
    const options = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return await fetchData(
     import.meta.env.VITE_API_URL + '/user/me',
      options,
    );
  }, []);

  //return { postUser, checkUser, getUserByToken };
  return { getUserByToken }
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    return await fetchData(
      import.meta.env.VITE_API_URL + '/user/login',
      fetchOptions,
    );
  };

   const postRegister = async (inputs) => {
    const fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      };
	  return await fetchData(
      import.meta.env.VITE_API_URL + '/user/signin',
	  fetchOptions,
    );
  };

  return { postLogin, postRegister };
};


const useMenu = () => {
  const getMenu = async () => {
    return await fetchData(
      import.meta.env.VITE_API_URL + '/restaurant/list'
    );
  };

  return { getMenu };
};

const useReviews = () => {
  const getReviews = async () => {
    return await fetchData(
      import.meta.env.VITE_API_URL + '/restaurant/review'
    );
  };

  const addReview = async (review, token) => {
	  const fetchOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify(review),
      };
	  return await fetchData(
      import.meta.env.VITE_API_URL + '/restaurant/review',
	  fetchOptions,
    );
  };

  return { getReviews, addReview };
};


export { useUser, useAuthentication, useMenu, useReviews };
