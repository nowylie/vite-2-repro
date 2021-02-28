console.log('/main.js loaded')

import('/src/dep');

export const data = {};

if (import.meta.hot) {
    import.meta.hot.decline();
}
