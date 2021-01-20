const fetchData = async (url) => {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (error) {
		return error;
	}
};
export default fetchData;
