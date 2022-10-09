import { existsSync, mkdirSync, writeFile } from 'fs';
import { dirname } from 'path';

export function save(file: string, content: any) {
  return new Promise((resolve: (file: string) => any, reject: (e: Error) => any) => {
    if (typeof content === 'object') content = JSON.stringify(content);
    if (typeof content === 'string') {
      if (!existsSync(dirname(file))) mkdirSync(dirname(file), { recursive: true });
      writeFile(file, content, (err) => {
        if (err) return reject(err);
        resolve(file);
      });
    }
  });
}
