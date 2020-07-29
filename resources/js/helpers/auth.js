export function login(credential) {
	return new Promise((resolve, rej)=> {
		axios.post('/api/auth/login', credential)
		.then(res => {
			resolve(res.data)
			console.log(res)
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
