
export class SongMetadata {
  readonly title: string;
  readonly titleUnicode: string;
  readonly artist: string;
  readonly artistUnicode: string;
  readonly source: string;

  constructor(title: string, titleUnicode: string, artistUnicode: string) {
    this.title = title;
    this.titleUnicode = titleUnicode;
    this.artist = artistUnicode;
    this.artistUnicode = artistUnicode;
    this.source = title;
  }

  public equals(other: SongMetadata): boolean {
    if (this.source !== other.source) {
      return false;
    }
    if (this.title !== other.title) {
      return false;
    }
    if (this.titleUnicode !== other.titleUnicode) {
      return false;
    }
    if (this.artistUnicode !== other.artistUnicode) {
      return false;
    }
    if (this.source !== other.source) {
      return false;
    }
    return true;
  }
}
