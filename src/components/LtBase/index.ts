// function parseComponentNameByPath (path: string, ext = '.vue') {
// 	let paths: string[] = path.split('/');
// 	path = paths[paths.length - 1];
// 	if (!path.endsWith(ext)) {
// 		return null;
// 	}
// 	if (!/[_$a-zA-Z]/.test(path[0])) {
// 		return null;
// 	}
// 	return path.slice(0, -ext.length);
// }


const files: any = import.meta.globEager("./*/*.vue")
const compReg = /^\.\/(.+?)\/\1\.vue$/

const install = (app: any) => {
	for (const path in files) {
    if (Object.prototype.hasOwnProperty.call(files, path)) {
			// const componentName = parseComponentNameByPath(path)
			const matches: any = path.match(compReg)
			let componentName = ''
			if( !matches[1] ) return
			componentName = matches[1]
			app.component(componentName, files[path].default || files[path])
    }
	}
}

export default {
	install
};