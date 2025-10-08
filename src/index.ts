import routes from "./routes";

const DEFAULT_CFG = {
  routes: routes,
  description: "The Core module of the vigtra",
};

export function CoreModule(cfg) {
  return DEFAULT_CFG;
}
