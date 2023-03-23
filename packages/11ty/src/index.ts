export function htmlterser(options: any) {

}

export function svgo(options: any) {

}

type plugins = (
  typeof htmlterser |
  typeof svgo
)

type options<T> = (
  T extends typeof htmlterser
  ? { foo: string }
  : T extends typeof svgo
  ? { bar: string }
  : any
)
interface Config {
  addPlugin<T = plugins> (plugin: T, options?: options<T>): void
}


const foo: Config;
