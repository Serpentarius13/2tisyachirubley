const routes = {
  "/uslugi": "/pages/uslugi.html",
  "/": "/pages/index.html",
};

export function route(event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);

  handleLocation();
}
export async function handleLocation() {
  const path = window.location.pathname;
  const route = routes[path] || routes["/"];
  const html = await fetch(route).then((data) => data.text());
  document.body.innerHTML = html;
}
