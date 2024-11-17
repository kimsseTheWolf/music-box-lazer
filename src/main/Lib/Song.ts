import { HashFile } from "./HashFile";
import { SongMetadata } from "./SongMetadata";

export class Song {
  readonly songMetadata: SongMetadata;
  audioFiles: Set<HashFile>;
  bgFiles: Set<HashFile>;

  constructor(metadata: SongMetadata) {
    this.songMetadata = metadata;
    this.audioFiles = new Set();
    this.bgFiles = new Set();
  }
}
