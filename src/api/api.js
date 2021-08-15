import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: { 'API-KEY': '64e333df-e9d0-4115-b50f-b08967237296' },
});

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => response.data);
	},
	getStatus(userId) {
		return instance
			.get(`profile/status/${userId}`)
			.then(response => response.data);
	},
	updateStatus(status) {
		return instance
			.put(`profile/status`, { status: status })
			.then(response => response.data);
	},
	updateProfilePhoto(photo) {
		const formData = new FormData();
		formData.append('image', photo);
		return instance
			.put(`profile/photo`, formData)
			.then(response => response.data);
	},
	updateProfileData(profileData) {
		return instance.put(`profile`, profileData).then(response => response.data);
	},
};

export const usersAPI = {
	getPages(currentPage, pageSize) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},
	setPage(page, pageSize) {
		return instance
			.get(`users?page=${page}&count=${pageSize}`)
			.then(response => response.data);
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`).then(response => response.data);
	},
	follow(userId) {
		return instance.post(`follow/${userId}`).then(response => response.data);
	},
};

export const authAPI = {
	isAuth() {
		return instance.get('auth/me').then(response => response.data);
	},
	login(email, password, rememberMe = false) {
		return instance
			.post('auth/login', { email, password, rememberMe })
			.then(response => response.data);
	},
	logout() {
		return instance.delete('auth/login').then(response => response.data);
	},
};
