import { data } from './main';

console.log('/dep loaded')

if (import.meta.hot) {
    import.meta.hot.accept();
}
