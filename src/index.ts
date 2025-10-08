import routes from "./routes";

const DEFAULT_CFG = {
  routes: routes,
};

export function CoreModule(cfg) {
  return DEFAULT_CFG;
}
