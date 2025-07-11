import { map } from '@/.map';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/docs',baseUrl: '/docs2',

  rootDir: 'docs',rootDir: 'docs2',
  source: createMDXSource(map),

  rootDir: 'docs',rootDir: 'docs2',
  source: createMDXSource(map),

  rootDir: 'docs',rootDir: 'docs2',
  source: createMDXSource(map),
});
