import _ from "lodash";

export const parseEnv = (env: Record<string, any>): ImportMetaEnv => {
  const envs = _.cloneDeep(env) as any;

  Object.entries(env).forEach(([k, v]) => {
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
};
