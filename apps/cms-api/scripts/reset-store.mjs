import { resetStore, storePath } from '../lib/store.mjs';

await resetStore();
console.log(`CMS store resetado em ${storePath}`);
