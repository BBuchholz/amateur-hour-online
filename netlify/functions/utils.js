export const getId = (urlPath) => {
	return urlPath.match(/([^\/]*)\/*$/)[0];
}