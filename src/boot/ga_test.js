import gtm from "src/components/gtm";

export default async ({ router }) => {
  router.afterEach((to, from) => {
    gtm.logPage(to.path);
  });
};
