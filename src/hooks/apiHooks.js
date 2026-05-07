import {useCallback} from 'react';

import {fetchData} from '../utils/fetchData';

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
			options
		);
	}, []);

	//return { postUser, checkUser, getUserByToken };
	return {getUserByToken};
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
			fetchOptions
		);
	};

	const postRegister = async (inputs) => {
		const fetchOptions = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(inputs),
		};
		return await fetchData(
			import.meta.env.VITE_API_URL + '/user/signin',
			fetchOptions
		);
	};

	return {postLogin, postRegister};
};

const useMenu = () => {
	const getMenu = async () => {
		return await fetchData(
			import.meta.env.VITE_API_URL + '/restaurant/list'
		);
	};
	const addMenuItem = async (inputs, token) => {
		const fetchOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
			body: JSON.stringify(inputs),
		};
		return await fetchData(
			import.meta.env.VITE_API_URL + '/restaurant/list',
			fetchOptions
		);
	};
	const deleteMenuItem = async (meal_id, token) => {
		const fetchOptions = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				meal_id,
			}),
		};
		return await fetchData(
			import.meta.env.VITE_API_URL + '/restaurant/list',
			fetchOptions
		);
	};
	const updateMenuItem = async (meal_id, inputs, token) => {
		const fetchOptions = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({
				meal_id,
				...inputs,
			}),
		};
		return await fetchData(
			import.meta.env.VITE_API_URL + '/restaurant/list',
			fetchOptions
		);
	};

	return {getMenu, addMenuItem, deleteMenuItem, updateMenuItem};
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
			body: JSON.stringify({
				review_title: review.title,
				review_content: review.description,
			}),
		};
		return await fetchData(
			import.meta.env.VITE_API_URL + '/restaurant/review',
			fetchOptions
		);
	};

	return {getReviews, addReview};
};

const useOrderHistory = () => {
	const getOrderHistory = async () => {
		return await fetchData(
			import.meta.env.VITE_API_URL + '/restaurant/order'
		);
	};

	const addOrderHistory = async (inputs, token) => {
		const fetchOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + token,
			},
			body: JSON.stringify(inputs),
		};
		return await fetchData(
			import.meta.env.VITE_API_URL + '/restaurant/order',
			fetchOptions
		);
	};
	return {getOrderHistory, addOrderHistory};
};

export {useUser, useAuthentication, useMenu, useReviews, useOrderHistory};
