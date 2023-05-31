const directives = import.meta.globEager("./*.ts")
const regex = /\/(.+)\.ts$/;

const install = (app: any) => {
  for (const path in directives) {
    if (Object.prototype.hasOwnProperty.call(directives, path)) {
      const directive: any = directives[path];
      const match: any = path.match(regex);
      const directiveName: string = match[1]
      app.directive(directiveName, directive.default)
    }
  }
} 

export default { install }