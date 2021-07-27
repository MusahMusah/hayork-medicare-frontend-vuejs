export default function admin({ next, store }) {
  if (store.getters["auth/isHealthWorker"] && store.getters["auth/authUser"]) next();
  else if (!store.getters["auth/isHealthWorker"] && store.getters["auth/authUser"]){
    next({ name: "user-account", params: {id: store.getters["auth/authUser"].id} })
  }
  else if(!store.getters["auth/authUser"]) { next({ name: "auth-login" }); }
  else next({ name: "Error404" });
}
