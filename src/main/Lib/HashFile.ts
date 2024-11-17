
export class HashFile {
  readonly fileName: string;
  readonly hash: string;

  constructor(fileName: string, hash: string) {
    this.fileName = fileName;
    this.hash = hash;
  }

}
