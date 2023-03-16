import "/public/style.scss";

import { route, handleLocation } from "../router";

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
