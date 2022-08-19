import { RouteRecordRaw } from "vue-router";

const layout = import.meta.glob("../layout/*.vue");
const views = import.meta.glob("../views/**/*.vue");

function getLayoutRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layout).forEach(([file, module]) => {
    const route = getRouteByModule(file, module);
    route.children = getChildrenRoutes(route)!;
    layoutRoutes.push(route);
  });
  return layoutRoutes;
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
  const childrenRoutes = [] as RouteRecordRaw[];
  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, module);
      childrenRoutes.push(route);
    }
  });
  return childrenRoutes;
}

function getRouteByModule(file: string, module: () => Promise<any>) {
  const name = file.match(/.+[layout|views]\/(.+)\.vue/i)![1];
  return {
    name: name.replace("/", "."),
    path: `/${name}`,
    component: module,
  } as RouteRecordRaw;
}

export default getLayoutRoutes();
