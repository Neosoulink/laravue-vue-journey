export function login(credential) {
	return new Promise((resolve, rej)=> {
		axios.post('/api/auth/login', credential)
		.then(res => {
			resolve(res.data)
			console.log(res)
			axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
		})
		.catch(err => {
			rej('Wrong email or password')
		})
	})
}

export function getLocalUser() {
	const userStr = localStorage.getItem('user');

	if (!userStr) {
		return null;
	}

	return JSON.parse(userStr);
}
