import _ from "lodash";
class EnvTypeHelper {
  public env = {} as ImportMetaEnv;

  constructor() {
    this.env = this.getEnvs();
  }

  private getEnvs(): ImportMetaEnv {
    const envs = _.cloneDeep(import.meta.env) as any;

    Object.entries(import.meta.env).forEach(([k, v]) => {
      if (v === "true" || v === "false") {
        envs[k] = v === "true" ? true : false;
      } else if (/^\d+$/.test(v)) {
        envs[k] = Number(v);
      } else if (v === 'null') {
        envs[k] = null;
      } else if (v === 'undefind') {
        envs[k] = undefined;
      }
    });

    return envs;
  }
}

const helper = new EnvTypeHelper();
const env = helper.env;

export default helper;

export { env };